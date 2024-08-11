"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import DOMPurify from "dompurify";

const useSanitizedHtml = (htmlContent) => {
	const [sanitizedHtml, setSanitizedHtml] = useState("");

	useEffect(() => {
		const sanitized = DOMPurify.sanitize(htmlContent);
		setSanitizedHtml(sanitized);
	}, [htmlContent]);

	return sanitizedHtml;
};

const Article = ({ searchParams }) => {
	const title = searchParams.title;
	const publishedAt = searchParams.publishedAt;
	const source = searchParams.source;
	const media = searchParams.urlToImage;
	const index = searchParams.content.indexOf('[');
	const articleContent = index !== -1 ? searchParams.content.slice(0, index) : searchParams.content;

	const sanitizedHtml = useSanitizedHtml(articleContent);

	return (
		<div id="article" className="flex flex-col gap-4">
			<div>
				<div className="flex flex-row text-sm opacity-50">
					{publishedAt} | {source}
				</div>
				<h1 className="font-heading text-4xl whitespace-normal overflow-visible break-words dark:text-white">
					{title}
				</h1>
			</div>
			<div className="flex justify-center rounded-md overflow-hidden">
				<Image
					src={media}
					alt="article media"
					width={1000}
					height={1000}
					className="size-full"
				/>
			</div>
			<article dangerouslySetInnerHTML={{ __html: sanitizedHtml }}></article>
			<Link href={searchParams.url} target="_blank" rel="noopener noreferrer" className="hover:underline w-min text-nowrap">Read The Full Story</Link>
		</div>
	);
};

export default Article;
