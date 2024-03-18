import Button from "./Button";

const AccountForm = (props) => {
  const inputStyle = "bg-opacity-0 bg-white transition-all ease-in duration-default border-b border-black dark:border-white p-2 outline-none"
  return (
    <div className="flex flex-col gap-4 p-20 m-40 bg-light-grey dark:bg-dark-grey rounded-md">
      <h1 className="text-center font-heading">Sign In or Sign Up</h1>
      <input className={inputStyle} placeholder="Email Address" type="email" name="email" id="email"/>
      <input className={inputStyle} placeholder="Password" type="password" name="password" id="password"/>
      <div className="py-4"><Button text= {"Continue"}/></div>
    </div>
  )
}

export default AccountForm;