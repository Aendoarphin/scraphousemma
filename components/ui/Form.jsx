const Form = () => {
  return (
    <div className="flex flex-col gap-4">
      <label htmlFor="email">Email</label>
      <input className="border-b bg-white dark:bg-black" type="email" name="email" id="email" />
      <label htmlFor="password">Password</label>
      <input className="border-b bg-white dark:bg-black" type="password" name="password" id="password" />
    </div>
  )
}

export default Form;