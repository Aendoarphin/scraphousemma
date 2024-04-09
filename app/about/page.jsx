import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="text-sm h-screen flex flex-wrap justify-center gap-6 bgabout1">
        <div className="px-10 size-full flex flex-col justify-center gap-16 backdrop-filter backdrop-blur-md backdrop-grayscale">
          <div className="flex flex-col gap-4 mx-10 lg:mx-40 xl:mx-96">
            <h1 className="font-heading text-4xl">About</h1>
            <p>
              ScrapHouse is your ultimate destination for all things MMA,
              delivering comprehensive information right at your fingertips. Our
              platform seamlessly consolidates content from various reputable
              MMA sources, offering you unparalleled convenience and
              sophistication. Experience the world of MMA like never before,
              where accessing a wealth of resources is effortless and stylish.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
