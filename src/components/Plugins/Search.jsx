import Link from "next/link";
import { LOADING_STATUS } from "@/constants";
import LoadingWheel from "@/components/LoadingWheel/LoadingWheel";
import styles from "./style.module.css";

export default function SearchPlugin({ result, search, handleSearchChange }) {
  const { loadingStatus, data } = result;
  return (
    <section id="search-2" className="widget widget_search">
      <form role="search" className="search-form" action="/">
        <label className="font-secondary label-search">
          <span className="screen-reader-text">Поиск:</span>
          <input
            type="search"
            className="search-field font-primary"
            placeholder="Поиск…"
            value={search}
            onChange={handleSearchChange}
          />
        </label>
        {data.length > 0 && loadingStatus === LOADING_STATUS.fulfilled && (
          <ul className={styles.search}>
            {data.map((item) => {
              return (
                <li key={item.url} className={styles.searchLi}>
                  <Link href={item.url}>{item.title}</Link>
                </li>
              );
            })}
          </ul>
        )}
        {data.length === 0 && loadingStatus === LOADING_STATUS.fulfilled && (
          <div className={styles.search}>No results</div>
        )}
        {loadingStatus === LOADING_STATUS.pending && (
          <div className={styles.search}>
            <LoadingWheel />
          </div>
        )}
        {loadingStatus === LOADING_STATUS.rejected && (
          <div className={styles.search}>Loading error.</div>
        )}
      </form>
    </section>
  );
}
