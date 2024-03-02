const Article = ({params}) => {
	
	const publishedDate = params.slug[2];
	const source = params.slug[3];
	const name = params.slug[1];
	
	return (
		<>
			<div id="article text-wrap">
				<div className="flex flex-row text-sm">{params.slug[2]} | {params.slug[3]}</div>
				<h1 className="font-heading text-6xl whitespace-normal overflow-hidden break-words text-main">{name}</h1>
				<div>article body</div>
			</div>
		</>
	)
};

export default Article;
