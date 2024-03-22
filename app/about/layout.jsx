import Image from "next/image"

const AboutLayout = ({children}) => {
  return (
    <div className="overflow-visible
		flex flex-col h-screen md:px-20 lg:px-80">
      {children}
    </div>
  )
}

export default AboutLayout
