import Loading from "../LoadingWheel/LoadingWheel";
import Author from "../Author/Author";
import Link from "next/link";
import { trimLinkReadNext } from "@/utils/functions";

export default function Post({ post }) {
  if (!post && !post.length) return <div>Post Error???</div>;

  const { id, content, slug, title, date } = post[0];
  const contentRendered = trimLinkReadNext(content?.rendered || "");
  const titleRendered = title?.rendered || "";

  return (
    <article
      id={id}
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
