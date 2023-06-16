import Author from "@/components/Author/Author";
import styles from "./style.module.css";
import Link from "next/link";
import { trimLinkReadNext } from "@/utils/functions";

export default function PostShort({ post }) {
  if (!post) return <div>Error???</div>;

  const { id, excerpt, slug, title, date } = post;
  const excerptRendered = trimLinkReadNext(excerpt?.rendered || "");
  const titleRendered = title?.rendered;

  return (
    <div
      id={id}
      className={`entry author-consultapp post type-post status-publish format-standard has-post-thumbnail category-stati ${styles.line}`}
      itemScope="itemScope"
      itemType="http://schema.org/BlogPosting"
      itemProp="blogPost"
      key={id}
    >
      <Author date={date} />
      <header className="entry-header">
        <h2 className="entry-title font-headlines" itemProp="headline">
          <Link
            href={`/post/${slug}`}
            rel="bookmark"
            itemProp="url"
            // dangerouslySetInnerHTML={{ __html: titleRendered }}
          >
            LINK
          </Link>
        </h2>
      </header>
      <div className="entry-summary" itemProp="description">
        {/* <p dangerouslySetInnerHTML={{ __html: excerptRendered }} /> */}
        <Link href={`/post/${slug}`} className="entry-more-link">
          <span>Читать далее</span>
          {/* <span className="screen-reader-text">{titleRendered}</span> */}
        </Link>
      </div>
    </div>
  );
}
