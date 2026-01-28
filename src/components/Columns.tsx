"use client";
import type { ColumnDef } from "@tanstack/react-table";
import { ListFilter } from "lucide-react";
import { ActionCell } from "./ActionCell.tsx";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export type Payment = {
  id: string;
  organization: string;
  username: string;
  email: string;
  phone: string;
  dateJoined: string;
  status: "Active" | "Pending" | "Blacklisted" | "Inactive";
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "organization",
    header: () => (
      <div className="flex items-center gap-2">
        <span className="text-primary font-medium text-[12px] uppercase">
          Organization
        </span>
        <Popover>
          <PopoverTrigger asChild>
            <ListFilter size={14} className="cursor-pointer text-primary" />
          </PopoverTrigger>
          <PopoverContent className="w-[270px] p-5 flex flex-col gap-4 shadow-xl border-border bg-white z-50">
            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-medium text-foreground">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                className="border border-border rounded-md p-2 text-sm text-foreground outline-none h-10"
              />
            </div>

            {/* Date Field */}
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-medium text-foreground">
                Date
              </label>
              <input
                type="date"
                className="border border-border rounded-md p-2 text-sm text-foreground outline-none h-10"
              />
            </div>

            {/* Status Field */}
            <div className="flex flex-col gap-2">
              <label className="text-[14px] font-medium text-foreground">
                Status
              </label>
              <select className="border border-border rounded-md p-2 text-sm text-foreground outline-none bg-transparent h-10">
                <option value="">Select</option>
                <option value="active">Active</option>
                <option value="pending">Pending</option>
                <option value="blacklisted">Blacklisted</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 mt-2">
              <Button
                variant="outline"
                className="flex-1 border-foreground text-primary hover:text-primary hover:bg-background font-semibold"
              >
                Reset
              </Button>
              <Button className="flex-1 bg-primary text-foreground hover:bg-primary/90 font-semibold">
                Filter
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    ),
  },

  {
    accessorKey: "username",
    header: () => (
      <div className="flex items-center gap-2 text-primary font-medium text-[12px] uppercase">
        <span>Username</span>
      </div>
    ),
  },
  {
    accessorKey: "email",
    header: () => (
      <div className="flex items-center gap-2 text-primary font-medium text-[12px] uppercase">
        <span>Email</span>
      </div>
    ),
  },
  {
    accessorKey: "phone",
    header: () => (
      <div className="flex items-center gap-2 text-primary font-medium text-[12px] uppercase">
        <span>Phone Number</span>
      </div>
    ),
  },
  {
    accessorKey: "dateJoined",
    header: () => (
      <div className="flex items-center gap-2 text-primary font-medium text-[12px] uppercase">
        <span>Date Joined</span>
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: () => (
      <div className="flex items-center gap-2 text-primary font-medium text-[12px] uppercase">
        <span>Status</span>
      </div>
    ),
    cell: ActionCell,
  },
];
