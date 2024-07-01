import Link from "next/link";
import Image from "next/image";
import { faGear, faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DashboardOptions = () => {
	return (
		<div className="defaultTransition shadow-inner-soft h-full rounded-md bg-light-grey dark:bg-dark-grey">
			<div className="flex flex-row text-sm w-full text-center">
				<button className="w-full text-nowrap hover:bg-black hover:text-white hover:dark:bg-white hover:rounded-l-md hover:dark:text-black p-4 defaultTransition text-xl">
					<FontAwesomeIcon icon={faGear} />
					<p className="text-base">Settings</p>
				</button>
				<button className="w-full text-nowrap hover:bg-black hover:text-white hover:dark:bg-white hover:rounded-r-md hover:dark:text-black p-4 defaultTransition text-xl">
					<Link href={"/api/auth/logout"}>
						<FontAwesomeIcon icon={faDoorOpen} />
						<p className="text-base">Logout</p>
					</Link>
				</button>
			</div>
		</div>
	);
};

export default DashboardOptions;
