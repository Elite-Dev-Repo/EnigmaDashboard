import Nav from "./components/Nav.tsx";
import Mysidebar from "./components/Mysidebar.tsx";
import { ChartAreaGradient } from "./components/ChartAreaGradient.tsx";
import { ChartBarMultiple } from "./components/ChartBarMultiple.tsx";
import { ChartAreaInteractive } from "./components/ChartAreaInteractive.tsx";

const Analytics = () => {
  return (
    <section className="bg-foreground">
      <Nav></Nav>
      <Mysidebar>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 p-5 mx-auto w-full max-md:flex-col max-md:gap-2 max-md:p-0 ">
            <ChartAreaGradient />
            <ChartBarMultiple />
          </div>
          <div className="p-5 mx-auto w-full max-md:p-0">
            <ChartAreaInteractive />
          </div>
        </div>
      </Mysidebar>
    </section>
  );
};

export default Analytics;
