import Link from "next/link";

const Button = (props) => {
  return (
    <Link href={"/dashboard"}>
      <div className="dark:bg-white dark:text-black text-white bg-black rounded-lg mx-auto w-max p-2 px-4 hover:dark:bg-main hover:dark:text-white hover:bg-main active:scale-95 defaultTransition ">
        <h1 className="font-semibold text-nowrap cursor-pointer">{props.text}</h1>
      </div>
    </Link>
  );
};

export default Button;
