export const filterItems = {
	dashboard: {
		all: "all",
		article: "article",
		fighter: "fighter",
		event: "event",
	},
	schedule: {
		all: "all",
		ufc: "ufc",
		pfl: "pfl",
		one: "one",
	},
	scheduleYear: {
		2023: "2023",
		2024: "2024",
	},
	eventState: {
		upcoming: "upcoming",
		past: "past",
		all: "all",
	},
};

export const months = {
	1: "Jan",
	2: "Feb",
	3: "Mar",
	4: "Apr",
	5: "May",
	6: "Jun",
	7: "Jul",
	8: "Aug",
	9: "Sep",
	10: "Oct",
	11: "Nov",
	12: "Dec",
};

export const savedItems = {
	items: [
		{
			type: "article",
			name: "Jones vs. Miocic Set For April 2024",
			added: "2024-03-17T08:00:00", // Example time: 08:00:00 (8:00 AM)
		},
		{
			type: "fighter",
			name: "Islam Makhachev",
			image:
				"https://www.mmafacts.com/wp-content/uploads/2021/03/islam_makhachev.png",
			added: "2024-03-17T12:30:00", // Example time: 12:30:00 (12:30 PM)
		},
		{
			type: "event",
			name: "UFC 300",
			location: "T-Mobile Arena in Las Vegas, NV",
			added: "2024-03-17T15:45:00", // Example time: 15:45:00 (3:45 PM)
		},
		{
			type: "event",
			name: "UFC 299",
			location: "Kaseya Center in Miami, FL",
			added: "2024-03-17T18:20:00", // Example time: 18:20:00 (6:20 PM)
		},
		{
			type: "event",
			name: "ONE Friday Fights 55",
			location: "Lumpinee Boxing Stadium in Bangkok, Thailand",
			added: "2024-03-17T21:00:00", // Example time: 21:00:00 (9:00 PM)
		},
	],
};
