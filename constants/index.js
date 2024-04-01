export const dashboardHomePanels = [
	{
		id: "news",
		title: "News",
		description: "Stay updated with the latest news and headlines.",
		route: "dashboard/news",
	},
	{
		id: "rankings",
		title: "Rankings",
		description: "Check out the latest rankings.",
		route: "dashboard/rankings",
	},
	{
		id: "schedule",
		title: "Schedule",
		description: "View upcoming events.",
		route: "dashboard/schedule",
	},
];

export const sampleNewsData = [
	{
		articleId: 1,
		name: "Topuria KOs Volkanovski to win the FW title",
		publishedDate: "3 days ago",
		source: "UFC",
		image: "/images/thumbnail1.jpg",
	},
	{
		articleId: 2,
		name: "Pereira vs Hill announced to be main event of UFC 300",
		publishedDate: "2 days ago",
		source: "MMA Junkie",
		image: "/images/thumbnail2.jpg",
	},
	{
		articleId: 3,
		name: "O'Malley targets Topuria to be his next fight",
		publishedDate: "1 hour ago",
		source: "ONE FC",
		image: "/images/thumbnail3.jpg",
	},
	{
		articleId: 4,
		name: "Jones to fight Namajunas in 2024 in spite of torn pectorial",
		publishedDate: "Yesterday",
		source: "Sherdog",
		image: "/images/thumbnail4.jpg",
	},
	{
		articleId: 5,
		name: "Royval defeats Moreno",
		publishedDate: "2 days ago",
		source: "MMA Frenzy",
		image: "/images/thumbnail5.jpg",
	},
	{
		articleId: 6,
		name: "Rodtang to train with 10th Planet Jiu-Jitsu",
		publishedDate: "1 hour ago",
		source: "ONE FC",
		image: "/images/thumbnail6.jpg",
	},
	{
		articleId: 7,
		name: "GSP Returns: Georges St-Pierre Confirms Comeback Fight Against Khabib Nurmagomedov",
		publishedDate: "1 hour ago",
		source: "MMA News Weekly",
		image: "/images/thumbnail7.jpg",
	},
	{
		articleId: 8,
		name: "Amanda Nunes Retires from MMA, Cites Desire to Pursue Boxing Career",
		publishedDate: "55 minutes ago",
		source: "Combat Sports Gazette",
		image: "/images/thumbnail8.jpg",
	},
	{
		articleId: 9,
		name: "Nate Diaz Announces Return to Octagon, Targets Showdown with Conor McGregor",
		publishedDate: "50 minutes ago",
		source: "Fighter's Realm",
		image: "/images/thumbnail9.jpg",
	},
	{
		articleId: 10,
		name: "UFC 301 Officially Announced: McGregor vs. Ferguson Set as Main Event",
		publishedDate: "30 minutes ago",
		source: "ESPN MMA",
		image: "/images/thumbnail10.jpg",
	},
	{
		articleId: 11,
		name: "Bellator Signs Rising Prospect to Multi-Fight Deal",
		publishedDate: "1 day ago",
		source: "Bellator MMA",
		image: "/images/thumbnail11.jpg",
	},
	{
		articleId: 12,
		name: "Rousey Makes Surprise Appearance at WWE WrestleMania",
		publishedDate: "5 hours ago",
		source: "WWE",
		image: "/images/thumbnail12.jpg",
	},
	{
		articleId: 13,
		name: "Fury vs. Joshua Mega-Fight Confirmed for Summer 2024",
		publishedDate: "Yesterday",
		source: "Boxing Insider",
		image: "/images/thumbnail13.jpg",
	},
	{
		articleId: 14,
		name: "McGregor Launches New Clothing Line in Collaboration with Gucci",
		publishedDate: "2 hours ago",
		source: "Fashion Insider",
		image: "/images/thumbnail14.jpg",
	},
	{
		articleId: 15,
		name: "Holm vs. Cyborg Rematch Set for UFC 302",
		publishedDate: "3 hours ago",
		source: "MMA Weekly",
		image: "/images/thumbnail15.jpg",
	},
	{
		articleId: 16,
		name: "UFC Announces Plans for Expansion into Africa",
		publishedDate: "4 hours ago",
		source: "UFC Africa",
		image: "/images/thumbnail16.jpg",
	},
	{
		articleId: 17,
		name: "Miocic vs. Jones Confirmed for Heavyweight Championship",
		publishedDate: "Yesterday",
		source: "UFC News Hub",
		image: "/images/thumbnail17.jpg",
	},
	{
		articleId: 18,
		name: "Prime Drink Comes Out with UFC 300 Flavor",
		publishedDate: "1 hour ago",
		source: "MMA Fighting",
		image: "/images/thumbnail18.jpg",
	},
];

export const filterItems = {
	dashboard: {
		all: "all",
		article: "article",
		fighter: "fighter",
		event: "event",
	}
};

export const divisions = {
	"ufc": {
		"men": {
			"flyweight": "125 lbs (56.7 kg)",
			"bantamweight": "135 lbs (61.2 kg)",
			"featherweight": "145 lbs (65.8 kg)",
			"lightweight": "155 lbs (70.3 kg)",
			"welterweight": "170 lbs (77.1 kg)",
			"middleweight": "185 lbs (83.9 kg)",
			"light heavyweight": "205 lbs (93.0 kg)",
			"heavyweight": "265 lbs (120.2 kg)"
		},
		"women": {
			"strawweight": "115 lbs (52.2 kg)",
			"flyweight": "125 lbs (56.7 kg)",
			"bantamweight": "135 lbs (61.2 kg)",
			"featherweight": "145 lbs (65.8 kg)"
		}
	},
	"onefc": {
		"men": {
			"strawweight": "115 lbs (52.2 kg)",
			"flyweight": "125 lbs (56.7 kg)",
			"bantamweight": "135 lbs (61.2 kg)",
			"featherweight": "145 lbs (65.8 kg)",
			"lightweight": "155 lbs (70.3 kg)",
			"welterweight": "170 lbs (77.1 kg)",
			"middleweight": "185 lbs (83.9 kg)",
			"light heavyweight": "205 lbs (93.0 kg)",
			"heavyweight": "Unlimited"
		},
		"women": {
			"atomweight": "105 lbs (47.6 kg)",
			"strawweight": "115 lbs (52.2 kg)",
			"flyweight": "125 lbs (56.7 kg)",
			"bantamweight": "135 lbs (61.2 kg)",
			"featherweight": "145 lbs (65.8 kg)",
			"lightweight": "155 lbs (70.3 kg)",
			"welterweight": "170 lbs (77.1 kg)",
			"middleweight": "185 lbs (83.9 kg)",
			"light heavyweight": "205 lbs (93.0 kg)",
			"heavyweight": "Unlimited"
		}
	},
	"bellator": {
		"men": {
			"bantamweight": "135 lbs (61.2 kg)",
			"featherweight": "145 lbs (65.8 kg)",
			"lightweight": "155 lbs (70.3 kg)",
			"welterweight": "170 lbs (77.1 kg)",
			"middleweight": "185 lbs (83.9 kg)",
			"light heavyweight": "205 lbs (93.0 kg)",
			"heavyweight": "Unlimited"
		},
		"women": {
			"flyweight": "125 lbs (56.7 kg)",
			"featherweight": "145 lbs (65.8 kg)",
			"lightweight": "155 lbs (70.3 kg)",
			"welterweight": "170 lbs (77.1 kg)",
			"middleweight": "185 lbs (83.9 kg)",
			"light heavyweight": "205 lbs (93.0 kg)",
			"heavyweight": "Unlimited"
		}
	},
	"pfl": {
		"men": {
			"featherweight": "145 lbs (65.8 kg)",
			"lightweight": "155 lbs (70.3 kg)",
			"welterweight": "170 lbs (77.1 kg)",
			"middleweight": "185 lbs (83.9 kg)",
			"light heavyweight": "205 lbs (93.0 kg)",
			"heavyweight": "Unlimited"
		},
		"women": {
			"lightweight": "155 lbs (70.3 kg)",
			"welterweight": "170 lbs (77.1 kg)"
		}
	},
};

export const p4p = {
	men: {
		ufc: [
			{
				fighterName: "Kamaru Usman",
				weightClass: "Welterweight",
				record: "19-1",
				country: "Nigeria",
				countryCode: "NG",
				age: 34,
				image: "https://www.mmafacts.com/wp-content/uploads/2021/03/Kamaru_Usman.png"
			},
			{
				fighterName: "Israel Adesanya",
				weightClass: "Middleweight",
				record: "21-1",
				country: "Nigeria",
				countryCode: "NG",
				age: 32,
				image: "https://www.mmafacts.com/wp-content/uploads/2021/03/israel_adesanya.png"
			},
			{
				fighterName: "Francis Ngannou",
				weightClass: "Heavyweight",
				record: "16-3",
				country: "Cameroon",
				countryCode: "CM",
				age: 35,
				image: "https://www.mmafacts.com/wp-content/uploads/2021/04/francis_ngannou.png"
			},
			{
				fighterName: "Jon Jones",
				weightClass: "Heavyweight",
				record: "27-1",
				country: "United States",
				countryCode: "US",
				age: 35,
				image: "https://www.mmafacts.com/wp-content/uploads/2021/04/jon_jones.png"
			}
		],
		bellator: [
			{
				fighterName: "Douglas Lima",
				weightClass: "Welterweight",
				record: "32-9",
				country: "Brazil",
				countryCode: "BR",
				age: 33,
				image: "https://www.mmafacts.com/wp-content/uploads/2021/03/douglas_lima.png"
			}
		],
		onefc: [
			{
				fighterName: "Aung La Nsang",
				weightClass: "Light Heavyweight",
				record: "27-11",
				country: "Myanmar",
				countryCode: "MM",
				age: 36,
				image: "https://www.mmafacts.com/wp-content/uploads/2021/03/aung_la_nsang.png"
			},
			{
				fighterName: "Eddie Alvarez",
				weightClass: "Lightweight",
				record: "30-8",
				country: "USA",
				countryCode: "US",
				age: 37,
				image: "https://www.mmafacts.com/wp-content/uploads/2022/04/eddie_alvarez.png"
			}
		],
		pfl: [
			{
				fighterName: "Ray Cooper III",
				weightClass: "Welterweight",
				record: "21-7-1",
				country: "USA",
				countryCode: "US",
				age: 28,
				image: "https://www.mmafacts.com/wp-content/uploads/2022/04/ray_cooper.png"
			}
		]
	},
	women: {
		ufc: [
			{
				fighterName: "Amanda Nunes",
				weightClass: "Bantamweight/Featherweight",
				record: "21-4",
				country: "Brazil",
				countryCode: "BR",
				age: 33,
				image: "https://www.mmafacts.com/wp-content/uploads/2021/03/amanda_nunes.png"
			},
			{
				fighterName: "Valentina Shevchenko",
				weightClass: "Flyweight",
				record: "21-3",
				country: "Kyrgyzstan",
				countryCode: "KG",
				age: 33,
				image: "https://www.mmafacts.com/wp-content/uploads/2021/03/valentina_shevchenko.png"
			},
			{
				fighterName: "Rose Namajunas",
				weightClass: "Strawweight",
				record: "22-4",
				country: "United States",
				countryCode: "US",
				age: 30,
				image: "https://www.mmafacts.com/wp-content/uploads/2021/03/rose_namajunas.png"
			},
			{
				fighterName: "Alexa Grasso",
				weightClass: "Bantamweight",
				record: "18-3",
				country: "Mexico",
				countryCode: "MX",
				age: 32,
				image: "https://www.mmafacts.com/wp-content/uploads/2021/03/alexa_grasso.png"
			}
		],
		bellator: [
			{
				fighterName: "Cris Cyborg",
				weightClass: "Featherweight",
				record: "24-2",
				country: "Brazil",
				countryCode: "BR",
				age: 36,
				image: "https://www.mmafacts.com/wp-content/uploads/2021/03/cris_cyborg.png"
			}
		],
		onefc: [
			{
				fighterName: "Angela Lee",
				weightClass: "Atomweight",
				record: "11-2",
				country: "USA",
				countryCode: "US",
				age: 25,
				image: "https://www.mmafacts.com/wp-content/uploads/2021/03/angela_lee.png"
			}
		],
		pfl: [
			{
				fighterName: "Kayla Harrison",
				weightClass: "Lightweight",
				record: "11-0",
				country: "USA",
				countryCode: "US",
				age: 31,
				image: "https://www.mmafacts.com/wp-content/uploads/2021/08/kayla_harrison.png"
			}
		]
	}
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
			image: "https://www.mmafacts.com/wp-content/uploads/2021/03/islam_makhachev.png",
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

export const userAccountOptions = {
	changeEmail: "Change Email",
	changePassword: "Change Password",
	logout: "Logout",
	deleteAccount: "Delete Account",
};

export const users = [
	{
		id: 1,
		username: "user1",
		email: "user1@example.com",
		password: "password123",
		fullName: "John Doe",
		age: 25,
		gender: "male",
		createdAt: "2024-03-12T08:00:00Z",
		updatedAt: "2024-03-12T08:00:00Z",
	},
	{
		id: 2,
		username: "user2",
		email: "user2@example.com",
		password: "password456",
		fullName: "Jane Smith",
		age: 30,
		gender: "female",
		createdAt: "2024-03-12T08:00:00Z",
		updatedAt: "2024-03-12T08:00:00Z",
	},
	{
		id: 3,
		username: "user3",
		email: "user3@example.com",
		password: "password789",
		fullName: "Michael Johnson",
		age: 35,
		gender: "male",
		createdAt: "2024-03-12T08:00:00Z",
		updatedAt: "2024-03-12T08:00:00Z",
	},
	{
		id: 4,
		username: "user4",
		email: "user4@example.com",
		password: "passwordabc",
		fullName: "Emily Brown",
		age: 28,
		gender: "female",
		createdAt: "2024-03-12T08:00:00Z",
		updatedAt: "2024-03-12T08:00:00Z",
	},
];
