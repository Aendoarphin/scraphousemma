"use client";

const ButtonGroup = (props) => {
	return (
		<>
			<button
				className={`active:scale-95 defaultTransition text-nowrap border ${
					props.option === "Delete Account" ? "border-main text-main" : ""
				} p-2 rounded-md`}
				key={props.key}
			>
				{props.option}
			</button>
		</>
	);
};

export default ButtonGroup;
