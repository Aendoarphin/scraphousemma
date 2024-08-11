import Link from "next/link";
import { faGear, faDoorOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DashboardOptions = () => {
	return (
		<div className="defaultTransition shadow-inner-soft h-full rounded-md bg-light-grey dark:bg-dark-grey">
			<div className="flex flex-row text-sm w-full text-center">
				<Link href={"/dashboard/user-settings"} className="w-full text-nowrap hover:bg-black hover:text-white hover:dark:bg-white rounded-l-md hover:dark:text-black p-4 defaultTransition text-xl">
					<button>
						<FontAwesomeIcon icon={faGear} />
						<p className="text-base">Settings</p>
					</button>
				</Link>
				<Link href={"/api/auth/logout"} className="w-full text-nowrap hover:bg-black hover:text-white hover:dark:bg-white rounded-r-md hover:dark:text-black p-4 defaultTransition text-xl">
					<button >
						<FontAwesomeIcon icon={faDoorOpen} />
						<p className="text-base">Logout</p>
					</button>
				</Link>
			</div>
		</div>
	);
};

export default DashboardOptions;
