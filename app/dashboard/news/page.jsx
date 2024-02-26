import NewsItem from "@/components/ui/NewsItem";

const News = () => {
  const sampleNewsData = [
    {
      id: 1,
      name: "Jones to fight Namajunas in 2024 in spite of torn pectorial",
      published: "Yesterday",
      source: "Sherdog",
      image: "/images/NewsPreview.jpg",
    },
    {
      id: 2,
      name: "Royval defeats Moreno",
      published: "2 days ago",
      source: "MMA Frenzy",
      image: "/images/NewsPreview2.jpg",
    },
    {
      id: 3, 
      name: "Rodtang to train with 10th Planet Jiu-Jitsu",
      published: "an hour ago",
      source: "ONE FC",
      image: "/images/NewsPreview3.jpg"
    }
  ];

  return (
    <>
      <div id="top-news" className="grid grid-cols-2 gap-4">
        <div className="bg-main col-span-2">label</div>
        <div className="bg-main col-span-1 row-span-12">top story</div>
        <div className="bg-main row-span-6">top story 2</div>
        <div className="bg-main row-span-6">top story 3</div>
      </div>
      <div id="news-item-list" className="flex flex-col gap-4">
        {/* Rendering News Items */}
        {sampleNewsData.map((item, index) => (
          <NewsItem
            key={index}
            headline={item.name}
            published={item.published}
            source={item.source}
            image={item.image}
          />
        ))}
      </div>
    </>
  );
};

export default News;
