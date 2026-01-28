"use client";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MoveLeft, Star } from "lucide-react";
import Nav from "./components/Nav";
import Mysidebar from "./components/Mysidebar";
import usersData from "./db.json";
import profile from "./assets/profile.png";
import { toast, Toaster } from "react-hot-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface DetailItemProps {
  label: string;
  value: string;
}

const DetailItem = ({ label, value }: DetailItemProps) => (
  <div className="flex flex-col gap-1">
    <p className="text-[12px] text-primary opacity-60 uppercase">{label}</p>
    <p className="font-medium text-primary text-[14px] break-words">
      {value || "N/A"}
    </p>
  </div>
);

const UsersDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const user = usersData.find((u) => u.id === id);

  if (!user) {
    return (
      <div className="p-20 text-center">
        <h2 className="text-2xl font-bold">User Not Found</h2>
        <button
          onClick={() => navigate("/dashboard")}
          className="mt-4 text-primary underline"
        >
          Return to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="bg-foreground min-h-screen">
      <Nav />
      <Mysidebar>
        <section className="p-4 md:p-10 max-w-7xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-3 text-primary opacity-70 hover:opacity-100 mb-8 transition-all"
          >
            <MoveLeft size={20} />
            <span>Back to Users</span>
          </button>

          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-semibold text-primary">
              User Details
            </h1>
            <div className="flex gap-4 items-center">
              <button
                className="px-5 py-2 rounded-md border border-red-500 text-red-500 uppercase text-[12px] font-bold tracking-wider hover:bg-red-50 transition-colors"
                onClick={() => toast.success("User Blacklisted")}
              >
                Blacklist User
              </button>
              <button
                className="px-5 py-2 rounded-md border border-primary text-chart-2 uppercase text-[12px] font-bold tracking-wider hover:bg-teal-50 transition-colors"
                onClick={() => toast.success("User Activated")}
              >
                Activate User
              </button>
            </div>
          </div>

          <Toaster position="top-center" reverseOrder={false} />

          {/* Inside UsersDetails.tsx */}
          <div className="bg-background p-6 rounded-sm shadow-sm border border-border mb-6">
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
              <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-5 lg:border-r lg:pr-8 border-gray-200 w-full lg:w-auto">
                <Avatar className="w-20 h-20 md:w-14 md:h-14">
                  {/* <AvatarImage src={profile} /> */}
                  <AvatarFallback className="text-primary text-2xl bg-foreground">
                    {user.username[0]}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-xl font-bold capitalize text-primary">
                    {user.username}
                  </h2>
                  <p className="text-sm text-primary opacity-70">{user.id}</p>
                </div>
              </div>

              <div className="lg:border-r px-8 border-gray-200 text-center w-full lg:w-auto">
                <p className="text-sm text-primary font-medium">User's Role</p>
                <div className="flex justify-center gap-1 mt-2 text-yellow-500">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} className="text-gray-300" />
                  <Star size={16} className="text-gray-300" />
                </div>
              </div>

              <div className="px-8 text-center lg:text-left w-full lg:w-auto">
                <h2 className="text-xl font-bold text-primary">₦200,000.00</h2>
                <p className="text-xs text-primary mt-1">
                  9912345678 / Providus Bank
                </p>
              </div>
            </div>
          </div>

          <div className="bg-background p-8 rounded-sm shadow-sm border border-border flex flex-col gap-10">
            <div>
              <h3 className="font-semibold text-primary mb-6">
                Personal Information
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-8">
                <DetailItem
                  label="Full Name"
                  value={user.personalInfo.fullname}
                />
                <DetailItem label="Phone Number" value={user.phone} />
                <DetailItem label="Email Address" value={user.email} />
                <DetailItem label="BVN" value={user.personalInfo.bvn} />
                <DetailItem label="Gender" value={user.personalInfo.gender} />
              </div>
            </div>

            <hr className="border-border" />

            <div>
              <h3 className="font-semibold text-primary mb-6">
                Education and Employment
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-8">
                <DetailItem
                  label="Level of Education"
                  value={user.education.level}
                />
                <DetailItem
                  label="Employment Status"
                  value={user.education.employmentStatus}
                />
                <DetailItem
                  label="Monthly Income"
                  value={user.education.monthlyIncome}
                />
              </div>
            </div>

            <hr className="border-border" />

            <div>
              <h3 className="font-semibold text-primary mb-6">Socials</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-8">
                <DetailItem label="Twitter" value={user.socials.twitter} />
                <DetailItem label="Facebook" value={user.socials.facebook} />
                <DetailItem label="Instagram" value={user.socials.instagram} />
              </div>
            </div>

            <hr className="border-border" />
          </div>
        </section>
      </Mysidebar>
    </div>
  );
};

export default UsersDetails;
