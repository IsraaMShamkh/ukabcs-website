import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const news = await getCollection('news');
  const sortedNews = news.sort((a, b) => new Date(b.data.datePublished).getTime() - new Date(a.data.datePublished).getTime());

  const itemsXml = sortedNews
    .map(
      (item) => `
    <item>
      <title><![CDATA[${item.data.title}]]></title>
      <link>https://www.ukabcs.co.uk/news/${item.slug}</link>
      <guid>https://www.ukabcs.co.uk/news/${item.slug}</guid>
      <description><![CDATA[${item.data.description}]]></description>
      <pubDate>${new Date(item.data.datePublished).toUTCString()}</pubDate>
      <author>info@ukabcs.co.uk (${item.data.author})</author>
    </item>`
    )
    .join('\n');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>UKABCS News &amp; Grant Announcements</title>
    <link>https://www.ukabcs.co.uk</link>
    <description>Official RSS feed of the UK Association for Biotechnology &amp; Computational Science</description>
    <language>en-gb</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://www.ukabcs.co.uk/rss.xml" rel="self" type="application/rss+xml"/>
    ${itemsXml}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
