"use client"
import { useEffect, useState } from 'react';
import { decodeUrl } from '@/scripts/util';
import Image from 'next/image';
import DOMPurify from 'dompurify';

const useSanitizedHtml = (htmlContent) => {
  const [sanitizedHtml, setSanitizedHtml] = useState('');

  useEffect(() => {
    const sanitized = DOMPurify.sanitize(htmlContent);
    setSanitizedHtml(sanitized);
  }, [htmlContent]);

  return sanitizedHtml;
};

const Article = ({ params }) => {
  const name = decodeUrl(params.slug[1]);
  const publishedDate = decodeUrl(params.slug[2]);
  const source = decodeUrl(params.slug[3]);
  const media = '/' + params.slug[4] + '/' + params.slug[5];
  const loremIpsum = `
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum eros et turpis efficitur, in consequat nulla ultrices. Quisque ac lectus nec mi tincidunt tincidunt. Phasellus auctor justo eu lacus molestie, non convallis dui faucibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed auctor auctor nisl, in ullamcorper quam pharetra nec. Nam a fermentum metus. Donec nec tortor vestibulum, laoreet libero vel, aliquet ipsum. Suspendisse et luctus justo. Sed fermentum, risus eget vehicula aliquet, justo sem tincidunt nulla, in elementum dui enim vel mauris. Curabitur id quam nec nisl varius feugiat.</p><br>
  <p>Integer vitae pharetra nisi. Proin vel bibendum tortor. Curabitur et nisl vel est varius commodo. Proin pretium auctor nulla, id consectetur tortor eleifend et. Curabitur condimentum arcu ut dictum vehicula. Sed aliquam mi vel tempor fermentum. Pellentesque a consectetur purus. Quisque vestibulum consequat arcu a tempus. Nulla facilisi. Sed sit amet quam vel metus dictum varius. Sed nec lectus eget dui tincidunt sodales a quis odio. In hac habitasse platea dictumst. Nam ut est aliquet, cursus turpis et, tincidunt eros. Donec nec tortor nec lorem tempus bibendum et nec lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras eu lorem ut ligula ullamcorper consectetur. Donec a ligula convallis, vehicula diam ac, fermentum quam.</p><br>
  <p>Quisque sed justo ut metus placerat posuere. Integer suscipit justo vitae tortor pellentesque, id hendrerit eros commodo. Mauris et dolor sed metus congue elementum. Mauris elementum nisi sit amet est blandit tincidunt. Vestibulum condimentum mauris sed tellus dictum, sit amet dapibus nunc mattis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed sollicitudin purus vel erat faucibus, sed posuere quam vestibulum. Fusce ac dolor eget felis mollis facilisis in eget purus. In hac habitasse platea dictumst. In in mauris quis eros posuere ultricies. Sed sollicitudin erat a ligula tristique auctor. Curabitur nec nisl id ex tempus dapibus. In eget odio ut nulla fermentum lacinia. Integer vel malesuada nisi. Sed tristique lorem ut sapien tincidunt, a malesuada sapien volutpat.</p>
`;


  // Call the custom hook to sanitize the HTML content
  const sanitizedHtml = useSanitizedHtml(loremIpsum);

  return (
    <>
      <div id="article" className="flex flex-col gap-2">
        <div className="flex flex-row text-sm opacity-50">
          {publishedDate} | {source}
        </div>
        <h1 className="font-heading text-4xl whitespace-normal overflow-hidden break-words dark:text-white">
          {name}
        </h1>
        <div className='flex justify-center'>
          <Image src={media} alt="article media" width={500} height={500}/>
        </div>
        {/* Render sanitized HTML */}
        <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
      </div>
    </>
  );
};

export default Article;
