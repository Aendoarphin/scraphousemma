import CardNews from "@/components/CardNews";
import Panel from "@/components/Panel";
import CardRankings from "@/components/CardRankings";

const Dashboard = () => {
    return (
      <>
        <div className="overflow-hidden border border-[green] pt-24 p-8 h-screen flex flex-col gap-2 sm:p-20 sm:pt-24">
            <CardNews/>
            <CardRankings/>
        </div>
      </>
    )
  }
  // Arranging the dashboard
  export default Dashboard;