const SettingsItem = ({label, inputType}) => {
	return <div className="flex flex-row justify-between"><div>{label}</div><input className="bg-dark-grey rounded-md px-2" type={inputType}/></div>
};

export default SettingsItem;
