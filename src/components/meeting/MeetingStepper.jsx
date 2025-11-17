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

const MeetingStepper = ({ currentStep }) => {
  return (
    <>
      {/* Desktop Stepper */}
      <div className="hidden md:flex justify-between items-center mb-8 relative">
        {/* Connector Line */}
        <div className="absolute top-6 left-16 right-16 h-0.5 bg-gray-300 z-0">
          <div
            className="h-0.5 bg-blue-600 transition-all duration-500"
            style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
          ></div>
        </div>

        {STEP_ITEMS.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center relative z-10"
          >
            <div
              className={`flex items-center justify-center w-12 h-12 rounded-full font-bold transition-all duration-300 ${
                currentStep >= item.id
                  ? "bg-blue-600 text-white shadow-lg transform scale-110"
                  : "bg-white border-2 border-gray-300 text-gray-400"
              } ${currentStep === item.id ? "ring-4 ring-blue-100" : ""}`}
            >
              {currentStep > item.id ? (
                <CheckIcon />
              ) : (
                item.icon
              )}
            </div>
            <span
              className={`mt-3 text-sm font-medium text-center ${
                currentStep >= item.id
                  ? "text-blue-600 font-semibold"
                  : "text-gray-500"
              }`}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Mobile Stepper */}
      <div className="flex md:hidden justify-center mb-6">
        <div className="bg-blue-50 rounded-lg p-3 flex items-center">
          <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
            {currentStep}
          </div>
          <div>
            <p className="text-xs text-gray-500">Current Step</p>
            <p className="font-semibold text-blue-700">
              {STEP_ITEMS[currentStep - 1].label}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

export default MeetingStepper;