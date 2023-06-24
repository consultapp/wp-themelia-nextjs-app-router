import Link from "next/link";
import { trimLinkReadNext } from "@/utils/functions";
import Author from "@/components/Author/Author";
import { notFound } from "next/navigation";

export default function Post({ post }) {
  const { id, content, slug, title, date } = post;
  const contentRendered = trimLinkReadNext(content?.rendered || "");
  const titleRendered = title?.rendered || "";

  return (
    <article
      id={id}
      key={id}
      className="entry author-consultapp post type-post status-publish format-standard has-post-thumbnail category-telegram category-telegram-bots category-stati"
      itemScope="itemScope"
      itemType="http://schema.org/BlogPosting"
      itemProp="blogPost"
    >
      <header className="entry-header">
        <Author date={date} />
        <h1 className="entry-title font-headlines" itemProp="headline">
          <Link
            href={`/post/${slug}`}
            rel="bookmark"
            itemProp="url"
            dangerouslySetInnerHTML={{ __html: titleRendered }}
          />
        </h1>
      </header>
      <div className="entry-summary" itemProp="description">
        <div dangerouslySetInnerHTML={{ __html: contentRendered }} />
      </div>
    </article>
  );
}
