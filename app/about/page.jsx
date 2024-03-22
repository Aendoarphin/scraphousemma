import Image from "next/image";

const About = () => {
  return (
    <>
      <Image
        src={"/images/crowd.png"}
        width={500}
        height={500}
        alt="background image 1"
        className="blur-sm absolute size-[115%] object-center object-cover grayscale -z-10 opacity-5"
      />
      <div className="text-sm h-screen p-8 flex flex-wrap justify-center gap-6">
        <div className="px-8 size-full flex flex-col justify-center gap-16">
          <div className="flex flex-col gap-8">
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
