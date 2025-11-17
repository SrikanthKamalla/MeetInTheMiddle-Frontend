const ExitConfirmationModal = ({ showConfirm, setShowConfirm }) => {
  if (!showConfirm) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center mt-10 bg-black/30 bg-opacity-20">
      <div className="bg-white p-6 rounded-xl shadow-lg w-[300px]">
        <p className="text-gray-800 font-medium">
          Are you sure you want to return back?
        </p>
        <div className="mt-4 flex justify-end space-x-2">
          <button
            onClick={() => {
              setShowConfirm(false);
              window.history.back();
            }}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Yes
          </button>
          <button
            onClick={() => setShowConfirm(false)}
            className="px-4 py-2 rounded border hover:bg-gray-100"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExitConfirmationModal;