"use client";

import Nav from "./components/Nav.tsx";
import Mysidebar from "./components/Mysidebar.tsx";
import { MoveLeft } from "lucide-react";
import profile from "./assets/profile.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import toast, { Toaster } from "react-hot-toast";

const DetailSection = ({
  title,
  details,
}: {
  title?: string;
  details: { label: string; value: string }[];
}) => (
  <div className="py-8 border-b border-border last:border-b-0">
    <h2 className="text-primary font-semibold text-[16px] mb-6">
      {title ? title : ""}
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-8 gap-x-4">
      {details.map((item, idx) => (
        <div key={idx} className="flex flex-col gap-2">
          <span className="text-[12px] text-primary opacity-70 uppercase font-normal">
            {item.label}
          </span>
          <span className="text-[14px] text-primary font-medium wrap-break-word">
            {item.value}
          </span>
        </div>
      ))}
    </div>
  </div>
);
function Users() {
  // Re-structured data for easier mapping
  const UserInfo1 = [
    {
      title: "Personal Information",
      details: [
        { label: "FULL NAME", value: "Elite DEV" },
        { label: "PHONE NUMBER", value: "07060780922" },
        { label: "EMAIL ADDRESS", value: "elitedeveloper@gmail.com" },
        { label: "BVN", value: "09167686804" },
        { label: "GENDER", value: "Male" },
        { label: "MARITAL STATUS", value: "Single" },
        { label: "CHILDREN", value: "None" },
        { label: "TYPE OF RESIDENCE", value: "Private Apartment" },
      ],
    },
  ];

  const UserInfo2 = [
    {
      title: "Education and Employment",
      details: [
        { label: "LEVEL OF EDUCATION", value: "B.Sc" },
        { label: "EMPLOYMENT STATUS", value: "Employed" },
        { label: "SECTOR OF EMPLOYMENT", value: "FinTech" },
        { label: "DURATION OF EMPLOYMENT", value: "2 years" },
        { label: "OFFICE EMAIL", value: "elitedeveloper@lendsqr.com" },
        { label: "MONTHLY INCOME", value: "₦200,000.00 - ₦400,000.00" },
        { label: "LOAN REPAYMENT", value: "40,000" },
      ],
    },
  ];

  const UserInfo3 = [
    {
      title: "Socials",
      details: [
        { label: "TWITTER", value: "@elite_developer" },
        { label: "FACEBOOK", value: "Elite DEV" },
        { label: "INSTAGRAM", value: "@elite_developer" },
      ],
    },
  ];

  const UserInfo4 = [
    {
      title: "Guarantor",
      details: [
        { label: "FULL NAME", value: "Debby Ogana" },
        { label: "PHONE NUMBER", value: "07060780922" },
        { label: "EMAIL ADDRESS", value: "debby@gmail.com" },
        { label: "RELATIONSHIP", value: "Sister" },
      ],
    },
    {
      details: [
        { label: "FULL NAME", value: "Debby Ogana" },
        { label: "PHONE NUMBER", value: "07060780922" },
        { label: "EMAIL ADDRESS", value: "debby@gmail.com" },
        { label: "RELATIONSHIP", value: "Sister" },
      ],
    },
  ];

  // Reusable Component for Sections to keep code clean

  return (
    <div className="bg-background min-h-screen">
      <Toaster position="top-center" reverseOrder={false} />
      <Nav />
      <Mysidebar>
        <section className="container mx-auto p-6">
          <header>
            <h2 className="flex items-center text-[14px] gap-2 text-primary font-normal cursor-pointer hover:underline">
              <MoveLeft size={16} /> Back to Users
            </h2>
          </header>

          <div className="flex items-center justify-between mt-8">
            <h2 className="text-2xl font-semibold text-primary">
              User Details
            </h2>
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

          {/* User Profile Header Card */}
          <div className="bg-background p-6 rounded-sm w-full mt-6 shadow-sm border border-border relative">
            <div className="flex flex-wrap items-center gap-8 mb-10">
              <div className="flex items-center gap-4 pr-8 border-r border-gray-200">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={profile} />
                  <AvatarFallback>GE</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-primary font-bold text-2xl">Elite DEV</h2>
                  <p className="text-[14px] text-primary">@elite_developer</p>
                </div>
              </div>

              <div className="flex flex-col gap-1 px-8 border-r border-gray-200">
                <h3 className="text-primary text-[14px] font-medium">
                  User's Tier
                </h3>
                <span className="flex items-center gap-1 text-[14px]">
                  <i className="fa-solid fa-star text-yellow-500"></i>
                  <i className="fa-regular fa-star text-yellow-500"></i>
                  <i className="fa-regular fa-star text-yellow-500"></i>
                </span>
              </div>

              <div className="flex flex-col gap-1 px-8">
                <h3 className="text-primary font-bold text-2xl">
                  ₦1,803,064.81
                </h3>
                <p className="text-[12px] text-primary font-normal">
                  9167686804/Opay
                </p>
              </div>
            </div>

            <div className="w-full">
              <ul className="flex items-center justify-between max-w-4xl text-[14px] md:text-[16px]">
                <li className="text-primary font-medium pb-2 border-b-2 border-primary cursor-pointer px-4">
                  General Details
                </li>
                <li className="text-primary opacity-70 pb-2 border-b-2 border-transparent hover:text-primary cursor-pointer px-4 transition-all">
                  Documents
                </li>
                <li className="text-primary opacity-70 pb-2 border-b-2 border-transparent hover:text-primary cursor-pointer px-4 transition-all">
                  Bank Details
                </li>
                <li className="text-primary opacity-70 pb-2 border-b-2 border-transparent hover:text-primary cursor-pointer px-4 transition-all">
                  Loans
                </li>
                <li className="text-primary opacity-70 pb-2 border-b-2 border-transparent hover:text-primary cursor-pointer px-4 transition-all">
                  Savings
                </li>
                <li className="text-primary opacity-70 pb-2 border-b-2 border-transparent hover:text-primary cursor-pointer px-4 transition-all">
                  App and System
                </li>
              </ul>
            </div>
          </div>

          {/* General Details Content Card */}
          <div className="bg-background p-8 rounded-sm w-full mt-6 shadow-sm border border-border">
            <DetailSection
              title={UserInfo1[0].title}
              details={UserInfo1[0].details}
            />
            <DetailSection
              title={UserInfo2[0].title}
              details={UserInfo2[0].details}
            />
            <DetailSection
              title={UserInfo3[0].title}
              details={UserInfo3[0].details}
            />
            <DetailSection
              title={UserInfo4[0].title}
              details={UserInfo4[0].details}
            />
            <DetailSection
              title={UserInfo4[1].title}
              details={UserInfo4[1].details}
            />
          </div>
        </section>
      </Mysidebar>
    </div>
  );
}

export default Users;
