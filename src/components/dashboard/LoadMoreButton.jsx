import React from "react";

const LoadMoreButton = ({ 
  hasMore, 
  loading, 
  onLoadMore, 
  noMoreText = "No more meetings",
  loadingText = "Loading...",
  buttonText = "Load More"
}) => {
  if (!hasMore) {
    return <p className="text-center text-gray-500 mt-4">{noMoreText}</p>;
  }

  return (
    <button
      className="mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50 transition-colors"
      onClick={onLoadMore}
      disabled={loading}
    >
      {loading ? loadingText : buttonText}
    </button>
  );
};

export default LoadMoreButton;