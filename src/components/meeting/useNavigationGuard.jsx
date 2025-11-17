import { useCallback, useEffect } from "react";

export const useNavigationGuard = (setShowConfirm) => {
  const handleBackButton = useCallback((event) => {
    event.preventDefault();
    setShowConfirm(true);
  }, [setShowConfirm]);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("popstate", handleBackButton);

    // Push initial state
    window.history.pushState(null, "", window.location.pathname);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [handleBackButton]);
};