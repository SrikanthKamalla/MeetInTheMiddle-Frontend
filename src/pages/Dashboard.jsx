import React, { useCallback, useEffect, useState } from "react";
import moment from "moment";
import MeetingCard from "../components/MeetingCard";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaRegCheckCircle,
  FaRegStar,
  FaUsers,
} from "react-icons/fa";
import { IoPersonOutline, IoNotificationsOutline } from "react-icons/io5";
import { MdHistory } from "react-icons/md";
import { AiOutlineStock } from "react-icons/ai";
import InfoCard from "../components/dashboard/InfoCard";
import { dashBoardStats, getUpcomingMeetings } from "../services/meetings";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import CTACard from "../components/dashboard/CTACard";
import DashboardSection from "../components/dashboard/DashboardSection";
import MeetingItem from "../components/dashboard/MeetingItem";
import ActivityItem from "../components/dashboard/ActivityItem";
import NotificationItem from "../components/dashboard/NotificationItem";
import LoadMoreButton from "../components/dashboard/LoadMoreButton";

const Dashboard = () => {
  const { userId } = useSelector((store) => store.authSlice);
  const [upcomingMeetings, setUpcomingMeetings] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [updatesNumbers, setUpdatesNumbers] = useState({
    upcomingmeetings: null,
    pendingInvations: null,
    totalMeetings: null,
    currentWeekMeetingCount: null,
    avgParticipants: null,
    successRate: null,
  });


  const updates1 = [
    {
      title: "Upcoming meetings",
      number: updatesNumbers.upcomingmeetings,
      icon: <FaCalendarAlt />,
      color: "#1ea1e3",
    },
    {
      title: "Pending invitations",
      number: updatesNumbers.pendingInvations
,
      icon: <IoPersonOutline />,
      color: "#e1a949",
    },
    {
      title: "Total Meetings",
      number: updatesNumbers.totalMeetings,
      icon: <FaRegStar />,
      color: "#c962cc",
    },
  ];

  const updates2 = [
    {
      title: "This Week",
      number: updatesNumbers.currentWeekMeetingCount,
      icon: <AiOutlineStock />,
      color: "#d73e3f",
    },
    {
      title: "Avg Participants",
      number: updatesNumbers?.avgParticipants?.toFixed(2),
      icon: <FaUsers />,
      color: "#af52d0",
    },
    {
      title: "Success Rate",
      number: updatesNumbers.successRate,
      icon: <FaRegCheckCircle />,
      color: "#32c166",
    },
  ];

  const fetchUpcomingMeetings = useCallback(async (page = 1) => {
    try {
      setLoading(true);
      const upRes = await getUpcomingMeetings({ items: 5, pageNo: page });

      const newMeetings = upRes.data.data.meetings.map((ele) => {
        const scheduleAt = new Date(ele.scheduledAt);

        let dateLabel = moment(scheduleAt).isSame(moment(), "day")
          ? "Today"
          : moment(scheduleAt).format("DD MMM");

        const timeLabel = moment(scheduleAt).format("hh:mm A");
        const peopleCount = ele.participants.length;

        const myStatus =
          ele.participants.find((itm) => itm.user === userId)?.status ||
          "Pending";

        return {
          title: ele.title || "Untitled Meeting",
          date: dateLabel,
          time: timeLabel,
          people: peopleCount,
          status: myStatus,
          place: ele.locationSuggestion?.placeName || "Pending",
        };
      });

      setUpcomingMeetings((prev) =>
        page === 1 ? newMeetings : [...prev, ...newMeetings]
      );
      setHasMore(newMeetings.length > 0);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Error Fetching Meetings");
    } finally {
      setLoading(false);
    }
  }, [userId]);

  const fetchDashBoard = useCallback(async () => {
    try {
      const res = await dashBoardStats();
      setUpdatesNumbers(res.data.data);
      toast.success(res.message);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Error Dash Board Fetch");
    }
  }, []);

  useEffect(() => {
    fetchDashBoard();
    fetchUpcomingMeetings(1);
  }, [fetchDashBoard, fetchUpcomingMeetings]);

  const loadMore = () => {
    const nextPage = pageNo + 1;
    setPageNo(nextPage);
    fetchUpcomingMeetings(nextPage);
  };

  return (
    <div className="w-screen">
      <div className="px-5 sm:px-20 py-10">
        <h1 className="text-4xl font-extrabold">Welcome Back! 👋</h1>
        <p className="text-gray-600 mt-2">
          Here's what's happening with your meetings today
        </p>

        <InfoCard updates={updates1} />

        <CTACard
          title="Ready To Organize a New Meeting?"
          description="Create a meeting and invite participants to find the perfect location."
          buttonText="+ Create Meeting"
          onButtonClick={() => navigate("/create-meeting")}
        />

        <InfoCard updates={updates2} />

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Upcoming Meetings Section */}
          <DashboardSection
            icon={<FaCalendarAlt className="text-blue-500" />}
            title="Upcoming Meetings"
            headerColor="blue-500"
          >
            {upcomingMeetings.map((item, index) => (
              <MeetingItem
                key={index}
                title={item.title}
                date={item.date}
                time={item.time}
                people={item.people}
                place={item.place}
              />
            ))}
            <LoadMoreButton
              hasMore={hasMore}
              loading={loading}
              onLoadMore={loadMore}
            />
          </DashboardSection>          
          
        </div>

        <br />
        <MeetingCard />
      </div>
    </div>
  );
};

export default Dashboard;