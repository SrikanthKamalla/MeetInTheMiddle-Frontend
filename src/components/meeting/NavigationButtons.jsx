const NavigationButtons = ({ 
  currentStep, 
  onPrevious, 
  onNext, 
  onSubmit, 
  isLoading 
}) => {
  return (
    <div className="flex justify-between mt-8">
      {currentStep > 1 ? (
        <button
          onClick={onPrevious}
          className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition flex items-center gap-2"
        >
          <PreviousIcon />
          Previous
        </button>
      ) : (
        <div />
      )}

      {currentStep < 4 ? (
        <button
          onClick={onNext}
          className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 shadow-md transition flex items-center gap-2"
        >
          Next
          <NextIcon />
        </button>
      ) : (
        <button
          disabled={isLoading}
          className="px-6 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 shadow-md transition flex items-center gap-2"
          onClick={onSubmit}
        >
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <CheckIcon />
          )}
          Schedule Meeting
        </button>
      )}
    </div>
  );
};

const PreviousIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const NextIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const LoadingSpinner = () => (
  <div className="border-2 border-green-600 border-b-green-300 rounded-full w-4 h-4 animate-spin" />
);

export default NavigationButtons;