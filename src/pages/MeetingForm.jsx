import { useRef, useState } from "react";
import { createMeeting } from "../services/meetings";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import MeetingStepper from "../components/meeting/MeetingStepper";
import StepContent from "../components/meeting/StepContent";
import NavigationButtons from "../components/meeting/NavigationButtons";
import ExitConfirmationModal from "./ExitConfirmationModal";
import { useNavigationGuard } from "../components/meeting/useNavigationGuard";

const MeetingForm = () => {
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);
  
  // Use custom hook for navigation guard
  useNavigationGuard(setShowConfirm);

  const [meetingData, setMeetingData] = useState({
    info: { title: "", description: "", startDate: "", endDate: "" },
    participants: [],
    adminAddress: { coords: [], address: "" },
  });
  
  const [errors, setErrors] = useState({ message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  
  const meetingInfoRef = useRef();
  const addParticipantRef = useRef();

  const handlePreviousClick = () => setCurrentStep(Math.max(1, currentStep - 1));
  
  const handleNextClick = async () => {
    let valid = true;

    if (currentStep === 1 && meetingInfoRef.current) {
      valid = await meetingInfoRef.current.validate();
    }

    if (currentStep === 2 && addParticipantRef.current) {
      let flag = true;
      if (meetingData.participants.length > 0) {
        flag = false;
      }
      if (flag) {
        valid = await addParticipantRef.current.validate();
      } else {
        valid = true;
      }
    }
    
    if (currentStep === 3 && meetingData.adminAddress.address === "") {
      setErrors({ message: "This field is required" });
      valid = false;
    }

    if (!valid) return;
    setCurrentStep(Math.min(currentStep + 1, 4));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title: meetingData.info.title,
      description: meetingData.info.description,
      scheduledAt: meetingData.info.startDate,
      endsAt: meetingData.info.endDate,
      participants: meetingData.participants,
      creatorLocation: {
        lat: meetingData.adminAddress.coords[0],
        lng: meetingData.adminAddress.coords[1],
        placeName: meetingData.adminAddress.address,
      },
    };
    
    setIsLoading(true);
    try {
      const res = await createMeeting(data);
      toast.success(res.data.message);
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } catch (err) {
      toast.error(err?.response?.data?.message || "create meeting failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl bg-white rounded-2xl mt-5 overflow-hidden">
        {/* Header with Progress Bar */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Schedule a Meeting
          </h1>
          <p className="text-blue-100">
            Complete all steps to schedule your meeting
          </p>
          
          {/* Mobile Progress Bar */}
          <div className="mt-4 bg-blue-500 bg-opacity-30 rounded-full h-2 md:hidden">
            <div
              className="bg-white h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <MeetingStepper currentStep={currentStep} />
          
          <StepContent 
            currentStep={currentStep}
            meetingData={meetingData}
            setMeetingData={setMeetingData}
            errors={errors}
            setErrors={setErrors}
            meetingInfoRef={meetingInfoRef}
            addParticipantRef={addParticipantRef}
          />
          
          <NavigationButtons
            currentStep={currentStep}
            onPrevious={handlePreviousClick}
            onNext={handleNextClick}
            onSubmit={handleSubmit}
            isLoading={isLoading}
          />
        </div>
      </div>

      <ExitConfirmationModal 
        showConfirm={showConfirm}
        setShowConfirm={setShowConfirm}
      />
    </div>
  );
};

export default MeetingForm;