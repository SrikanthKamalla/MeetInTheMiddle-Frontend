import React from 'react'
import { FaUsers } from 'react-icons/fa';

const PendingInvitationCard = ({index,invite,getInitials,setInviteId, setSelectedInvite, setShowAcceptModal,setShowDeclineModal}) => {
  return (
    <div
              key={index}
              className="relative bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition-all"
            >
              {/* Date at top right */}
              <div className="absolute top-2 right-2 text-sm font-semibold text-gray-500">
                <div>{invite.date}</div>
                <div className="text-xs">{invite.time}</div>
              </div>

              {/* Header with initials and title */}
              <div className="flex items-center mb-2">
                <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-lg font-bold mr-3">
                  {getInitials(invite.name)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{invite.title}</h3>
                  <p className="text-sm text-gray-500">by {invite.name}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-3">{invite.Description}</p>

              {/* People count */}
              <div className="flex items-center text-gray-500 text-sm mb-4">
                <FaUsers className="mr-2" />
                {invite.people} people
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <button
                  className="flex-1 cursor-pointer bg-blue-500 text-white py-1.5 rounded-lg hover:bg-green-600"
                  onClick={() => {
                    setSelectedInvite(invite);
                    setShowAcceptModal(true);
                  }}
                >
                  Accept
                </button>
                <button
                  className="flex-1 cursor-pointer py-1.5 rounded-lg hover:bg-red-600 hover:text-white"
                  onClick={() => {
                    setShowDeclineModal(true);
                    setInviteId(invite.id);
                  }}
                >
                  Decline
                </button>
              </div>
            </div>
  )
}

export default PendingInvitationCard