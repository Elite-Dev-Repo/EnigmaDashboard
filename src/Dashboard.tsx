import Nav from "./components/Nav.tsx";
import Mysidebar from "./components/Mysidebar.tsx";
import UserTable from "./components/UserTable.tsx";

function Dashboard() {
  const stats = [
    {
      name: "Today Check-in",
      amt: "4,018",
      color: "text-[#DF18FF]",
      bg: "bg-[rgba(224,24,255,0.1)]",
      icon: <i className="fa-solid fa-users"></i>,
    },
    {
      name: "Active Users",
      amt: "762",
      color: "text-[#5718FF]",
      bg: "bg-[rgba(87,24,255,0.1)]",
      icon: <i className="fa-solid fa-user-group"></i>,
    },
    {
      name: "Total Revenue Generated",
      amt: "$21,080,670",
      color: "text-[#F55F44]",
      bg: "bg-[rgba(245,95,68,0.1)]",
      icon: <i className="fa-brands fa-hive"></i>,
    },
    {
      name: "Total Guests",
      amt: "320,040",
      color: "text-[#FF3366]",
      bg: "bg-[rgba(255,51,102,0.1)]",
      icon: <i className="fa-solid fa-coins"></i>,
    },
  ];

  return (
    <div className="bg-foreground min-h-screen">
      <Nav />
      <Mysidebar>
        <section className="p-4 md:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.name}
                className={`bg-background p-6 rounded-sm shadow-sm border border-border flex flex-col gap-3`}
              >
                <div
                  className={`w-10 h-10 rounded-sm flex items-center justify-center ${stat.bg} ${stat.color}`}
                >
                  {stat.icon}
                </div>
                <h3 className="text-xs font-semibold uppercase text-primary opacity-70">
                  {stat.name}
                </h3>
                <p className="text-2xl font-semibold text-primary">
                  {stat.amt}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 overflow-x-auto">
            <UserTable />
          </div>
        </section>
      </Mysidebar>
    </div>
  );
}

export default Dashboard;
