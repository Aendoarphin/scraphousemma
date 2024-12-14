"use client";
import { useState } from "react";

const ToggleSwitch = ({ isOn, handleToggle }) => {
	return (
		<div
			className={`toggle-switch ${isOn ? "on" : "off"}`}
			onClick={handleToggle}
		>
			<div className="slider"></div>
		</div>
	);
};

const UserSettings = () => {
	const [enabled, setEnabled] = useState(false);
	const [isOnEvents, setIsOnEvents] = useState(false);
	const [isOnFighters, setIsOnFighters] = useState(false);

	const handleToggleEvents = () => {
		setIsOnEvents(!isOnEvents);
	};

	const handleToggleFighters = () => {
		setIsOnFighters(!isOnFighters);
	};

	return (
		<div id="user-settings" className="flex flex-col gap-4">
			<h1 className="font-heading text-xl">Settings</h1>
			<div className="border dark:border-white dark:border-opacity-25 border-black border-opacity-25 p-4 rounded-md flex flex-col gap-2">
				<div className="flex flex-row justify-between items-center">
					<h1 className="font-heading text-xl">Notifications</h1>
				</div>
				<div className={`flex flex-col gap-2`}>
					<div className="flex gap-[.5px] flex-col">
						<div className="flex flex-row justify-between items-center">
							<p className="font-heading">Events</p>
							<ToggleSwitch
								isOn={isOnEvents}
								handleToggle={handleToggleEvents}
							/>
						</div>
						<p className="pt-2">Get notified one hour before an event starts.</p>
					</div>
					<hr className="dark:text-white text-black opacity-25" />
					<div className="flex gap-[.5px] flex-col">
						<div className="flex flex-row justify-between items-center">
							<p className="font-heading">Fighters</p>
							<ToggleSwitch
								isOn={isOnFighters}
								handleToggle={handleToggleFighters}
							/>
						</div>
						<p className="pt-2">
							Receive updates about favorited fighters. This includes news
							articles, ranking updates, and upcoming events.
						</p>
					</div>
				</div>
			</div>
			<div id="settings-confirm" className="flex flex-row gap-4 justify-end">
				<button className="defaultTransition flex bg-light-grey dark:bg-dark-grey text-black dark:text-white w-min p-2 px-4 rounded-lg brightness-50">
					Cancel
				</button>
				<button className="defaultTransition flex bg-main text-black dark:text-white w-min p-2 px-4 rounded-lg brightness-50 ">
					Save
				</button>
			</div>
		</div>
	);
};

export default UserSettings;
