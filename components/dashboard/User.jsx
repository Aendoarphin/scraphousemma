import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const User = () => {
	const { user, error, isLoading } = useUser();

	if (isLoading) return <div>Please wait...</div>
	if (error) return <div>{error.message}</div>;

	return (
		user && <div className="defaultTransition shadow-inner-soft flex flex-col bg-light-grey dark:bg-dark-grey rounded-md p-8 w-full">
		<Image
			alt={user.name}
			src={user.picture}
			width={150}
			height={150}
			quality={100}
			className="mx-auto rounded-full"
		></Image>
		<div className="font-heading text-center p-4">{user.name}</div>
		<div className="flex flex-col md:flex-row gap-4 text-sm w-min mx-auto text-center">
			<button className="text-nowrap border dark:border-white border-black p-2 rounded-md">
				Account Settings
			</button>
			<Link href={"/api/auth/logout"}>
				<button className="text-nowrap border dark:border-white border-black p-2 rounded-md w-full">
					Logout
				</button>
			</Link>
		</div>
	</div>
	);
};

export default User;
