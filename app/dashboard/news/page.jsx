import CardNews from "@/components/ui/HeaderItem";

const News = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-main col-span-2">label</div>
        <div className="bg-main col-span-1 row-span-12">top story</div>
        <div className="bg-main row-span-6">top story 2</div>
        <div className="bg-main row-span-6">top story 3</div>
        <CardNews/>
      </div>
    </>
  );
};

export default News;
