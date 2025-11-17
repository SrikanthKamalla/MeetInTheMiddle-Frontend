import MeetingInfo from "../meeting/MeetingInfo";
import AddParticipant from "../meeting/AddParticipant";
import AdminAddress from "../meeting/AdminAddress";
import MeetingSummary from "../meeting/MeetingSummary";
const STEP_ITEMS = [
  {
    id: 1,
    name: "1",
    label: "Meeting Info",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    name: "2",
    label: "Participants",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    name: "3",
    label: "User Location",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    id: 4,
    name: "4",
    label: "Summary",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];


const StepContent = ({ 
  currentStep, 
  meetingData, 
  setMeetingData, 
  errors, 
  setErrors,
  meetingInfoRef,
  addParticipantRef 
}) => {
  const getStepComponent = () => {
    const step = STEP_ITEMS[currentStep - 1];
    
    switch(currentStep) {
      case 1:
        return (
          <MeetingInfo
            ref={meetingInfoRef}
            meetingData={meetingData}
            setMeetingData={setMeetingData}
          />
        );
      case 2:
        return (
          <AddParticipant
            ref={addParticipantRef}
            meetingData={meetingData}
            setMeetingData={setMeetingData}
          />
        );
      case 3:
        return (
          <AdminAddress
            meetingData={meetingData}
            setMeetingData={setMeetingData}
            errors={errors}
            setErrors={setErrors}
          />
        );
      case 4:
        return <MeetingSummary meetingData={meetingData} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 min-h-[400px] transition-all duration-300">
      {getStepComponent()}
    </div>
  );
};

export default StepContent;