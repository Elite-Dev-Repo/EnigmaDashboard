import Nav from "./components/Nav.tsx";
import Mysidebar from "./components/Mysidebar.tsx";
import { ChartAreaGradient } from "./components/ChartAreaGradient.tsx";
import { ChartBarMultiple } from "./components/ChartBarMultiple.tsx";
import { ChartAreaInteractive } from "./components/ChartAreaInteractive.tsx";

const Analytics = () => {
  return (
    <section className="bg-foreground min-h-screen">
      <Nav />
      <Mysidebar>
        <div className="p-4 md:p-8 flex flex-col gap-6">
          {/* Charts stack on mobile, side-by-side on large screens */}
          <div className="flex flex-col lg:flex-row gap-6 w-full">
            <ChartAreaGradient />
            <ChartBarMultiple />
          </div>
          <div className="w-full">
            <ChartAreaInteractive />
          </div>
        </div>
      </Mysidebar>
    </section>
  );
};

export default Analytics;
