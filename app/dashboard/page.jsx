import CardNews from "@/components/CardNews";
import DashboardNav from "@/components/DashboardNav";

const Dashboard = () => {
    return (
      <>
        <div className="overflow-hidden border border-[green] pt-24 p-8 h-screen flex flex-col gap-4 sm:p-20 sm:pt-24">
          <DashboardNav/>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-main col-span-2">label</div>
            <div className="bg-main col-span-1 row-span-12">top story</div>
            <div className="bg-main row-span-6">top story 2</div>
            <div className="bg-main row-span-6">top story 3</div>
            <CardNews/>
          </div>
        </div>
      </>
    )
  }
  // Arranging the dashboard
  export default Dashboard;