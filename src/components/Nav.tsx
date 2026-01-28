import logo from "../assets/logo1.png";
import { Bell, ChevronDown, Search, ArrowRight } from "lucide-react";
import profile from "../assets/profile.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BadgeCheckIcon, LogOutIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Nav = () => {
  const username = " Elite DEV";
  return (
    <header className="w-full h-[80px] sticky top-0 z-50 shadow-sm bg-background px-4 md:px-10">
      <nav className="h-full w-full flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="/">
            <img src={logo} alt="logo" className="w-[120px] md:w-[160px]" />
          </a>
        </div>

        {/* Search - Hidden on Mobile */}
        <div className="hidden md:flex items-center gap-2 border border-border rounded-sm w-[40%] max-w-[400px] overflow-hidden bg-foreground">
          <span className="text-primary pl-2 opacity-30">
            <Search size={15} />
          </span>
          <input
            type="search"
            placeholder="Search for anything"
            className="outline-none px-4 py-2 text-md font-light w-full text-primary"
          />
          <button className="bg-foreground border-l cursor-pointer text-white px-5 py-2.5">
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="flex items-center gap-3 md:gap-6">
          <Bell size={20} className="text-primary cursor-pointer" />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center gap-2 cursor-pointer outline-none">
                <Avatar className="h-8 w-8 md:h-10 md:w-10 ">
                  {/* <AvatarImage src={profile} /> */}
                  <AvatarFallback className="text-primary bg-foreground">
                    {username[1]}
                  </AvatarFallback>
                </Avatar>
                <p className="hidden md:flex items-center gap-2 text-primary font-medium">
                  {username} <ChevronDown size={14} />
                </p>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-48 bg-white z-[100] shadow-md"
            >
              <DropdownMenuItem className="cursor-pointer">
                <BadgeCheckIcon className="mr-2 h-4 w-4" />{" "}
                <a href="/users">Account</a>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer text-red-600 focus:text-red-600">
                <LogOutIcon className="mr-2 h-4 w-4" /> Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
