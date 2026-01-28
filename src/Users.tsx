"use client";

import Nav from "./components/Nav.tsx";
import Mysidebar from "./components/Mysidebar.tsx";
import { MoveLeft } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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
  const username = "Elite DEV";

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
        { label: "LEVEL OF EDUCATION", value: "B.A" },
        { label: "EMPLOYMENT STATUS", value: "Employed" },
        { label: "SECTOR OF EMPLOYMENT", value: "Web Development" },
        { label: "DURATION OF EMPLOYMENT", value: "2 years" },
        { label: "OFFICE EMAIL", value: "oyenekant0miwa@@gmail.com" },
        { label: "MONTHLY INCOME", value: "₦500,000.00 - ₦1,000,000.00" },
        { label: "LOAN REPAYMENT", value: "₦0.00" },
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
          <div className="bg-background p-6 rounded-sm shadow-sm border border-border mb-6">
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
              <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-5 lg:border-r lg:pr-8 border-gray-200 w-full lg:w-auto">
                <Avatar className="w-20 h-20 md:w-14 md:h-14">
                  {/* <AvatarImage src={profile} /> */}
                  <AvatarFallback className="text-primary text-2xl bg-foreground">
                    {username[0]}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-xl font-bold capitalize text-primary">
                    {username}
                  </h2>
                </div>
              </div>

              <div className="lg:border-r px-8 border-gray-200 text-center w-full lg:w-auto">
                <p className="text-sm text-primary font-medium">User's Role</p>
                <div className="flex justify-center gap-1 mt-2 text-yellow-500">
                  <p>Admin</p>
                </div>
              </div>
            </div>
          </div>
          ---
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
