"user client";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { userAccountOptions } from "@/constants";

const User = () => {
	return (
		<>
			<div className=" shadow-inner-soft flex flex-col bg-light-grey dark:bg-dark-grey rounded-md p-8 w-full">
				<FontAwesomeIcon scale={500} icon={faUserCircle} className="text-8xl" />
				<div className="font-heading text-center p-4">UserFirstName</div>
				<div className="flex flex-col md:flex-row gap-4 text-sm w-min mx-auto text-center">
					{Object.entries(userAccountOptions).map(([key, option]) => (
						<button
							className={`ease-in transition-colors text-nowrap border ${
								option === "Delete Account" ? "border-main text-main" : ""
							} p-2 rounded-md`}
							key={key}
						>
							{option}
						</button>
					))}
				</div>
			</div>
		</>
	);
};

export default User;
