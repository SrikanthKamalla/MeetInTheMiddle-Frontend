import React, { useEffect, useState, lazy, Suspense, useCallback } from "react";
const ConfirmationModel = lazy(() => import("../components/ConfirmationModel"));
const LocationModel = lazy(() => import("../components/LocationModel"));
import { myMeetings } from "../MyMeetings";

import { getPendingMeetings, rejectMeeting } from "../services/meetings";
import { toast } from "react-toastify";
import PendingInvitationCard from "../components/invitations/PendingInvitationCard";

const Invitations = () => {
  const [showDeclineModal, setShowDeclineModal] = useState(false);
  const [showAcceptModal, setShowAcceptModal] = useState(false);
  const [selectedInvite, setSelectedInvite] = useState(null);
  const [inviteId, setInviteId] = useState(null);
  const [pendingInvitations, setPendingInvitations] = useState([]);
  // console.log(pendingInvitations);

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  useEffect(() => {
    async function getPendingMeets() {
      const res = await getPendingMeetings({ pageNo: 1, items: 10 });
      // toast.success(res.data.message);
      console.log("the data", res.data);
      setPendingInvitations(res.data.data.meetings);
    }
    if (!showAcceptModal && !showDeclineModal) getPendingMeets();
  }, [showAcceptModal, showDeclineModal]);

  const handleDecline = useCallback(async (id) => {
    try {
      const response = await rejectMeeting(id);
      const data = response.data;
      if (!data.success) {
        throw new Error(data.message);
      }
      toast.success(data.message);
    } catch (error) {
      toast.error(error.message);
    }
    setShowDeclineModal(false);
  }, []);
  return (
    <div>
      <div className="p-4 mt-4">
        <h2 className="text-xl font-bold mb-4">
           {pendingInvitations.length > 0
    ? `Pending Invitations (${pendingInvitations.length})`
    : "Pending Invitations"}
        </h2>

        {/* Grid for responsiveness */}
       {pendingInvitations.length>0?(
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
         {pendingInvitations.map((invite, index) => (  
          <PendingInvitationCard index={index} invite={invite} getInitials={getInitials} setInviteId={setInviteId} setSelectedInvite={setSelectedInvite} setShowAcceptModal={setShowAcceptModal} setShowDeclineModal={setShowDeclineModal} />
          ))}
        </div>

       ):(
        <div className="flex flex-col items-center justify-center text-gray-500 py-16">
    <img
      src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
      alt="No Invitations"
      className="w-28 h-28 mb-4 opacity-80"
    />
    <h3 className="text-lg font-semibold">No Pending Invitations</h3>
    <p className="text-sm text-gray-400 mt-2">
      You're all caught up for now 🎉
    </p>
  </div>

       )}
      </div>

      {/* Decline Modal */}

      <Suspense>
        {showDeclineModal && (
          <ConfirmationModel
            idx={inviteId}
            handleDecline={handleDecline}
            showDeclineModal={showDeclineModal}
            setShowDeclineModal={setShowDeclineModal}
          />
        )}

        {/* Accept Modal */}
        {showAcceptModal && (
          <LocationModel
            isOpen={showAcceptModal}
            onClose={() => setShowAcceptModal(false)}
            invite={selectedInvite}
            myMeetings={myMeetings}
          />
        )}
      </Suspense>
    </div>
  );
};

export default Invitations;
