import Panel from "@/components/Panel";

const Dashboard = () => {
    return (
      <>
        <div className="border border-main pt-24 p-8 h-screen flex flex-col gap-4">
            <Panel buttonLabel={"News"}/>
            <Panel buttonLabel={"Rankings"}/>
            <Panel buttonLabel={"Event"}/>
        </div>
      </>
    )
  }
  
  export default Dashboard;