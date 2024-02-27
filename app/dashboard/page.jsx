// Data
import { DashboardHomePanels } from "@/constants";

const DashboardHome = () => {
  const sections = DashboardHomePanels || []

  const Widget = (label) => {
    return (
      <div className="bg-dark-grey p-4 rounded-md">
        label
      </div>
    )
  }

  return (
    <>
      <div><h1 className="text-xl">[User]&apos;s Dashboard</h1></div>
      <div className={`grid grid-rows-${sections.length} `}>
        <Widget label={sections.filter(item => item.title)}/>
      </div>
    </>
  );
};

export default DashboardHome;
