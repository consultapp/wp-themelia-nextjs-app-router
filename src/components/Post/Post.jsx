import Loading from "../Loading/Loading";
import Author from "../Author/Author";
import Link from "next/link";

export default function Post({ post }) {
  if (!post) return <div>Post Error???</div>;

  const { id, content, slug, title, date } = post;

  return (
    <article
      id={id}
      className="entry author-consultapp post type-post status-publish format-standard has-post-thumbnail category-telegram category-telegram-bots category-stati"
      itemScope="itemScope"
      itemType="http://schema.org/BlogPosting"
      itemProp="blogPost"
    >
      <header className="entry-header">
        {/* <Author date={date} /> */}
        <h1 className="entry-title font-headlines" itemProp="headline">
          <Link
            href={`/post/${slug}`}
            rel="bookmark"
            itemProp="url"
            // dangerouslySetInnerHTML={{ __html: title }}
          >
            LINK
          </Link>
        </h1>
      </header>
      <div className="entry-summary" itemProp="description">
        {/* <div dangerouslySetInnerHTML={{ __html: content }}></div> */}
      </div>
    </article>
  );
}
