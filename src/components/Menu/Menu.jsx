import Link from "next/link";
import styles from "./style.module.scss";

export default function Menu({ isOpen, toggleButton }) {
  return (
    <nav
      className="menu menu-primary font-secondary"
      role="navigation"
      id="menu-primary"
      itemScope="itemScope"
      itemType="http://schema.org/SiteNavigationElement"
    >
      <button
        id="menu-toggle"
        className={`menu-toggle hamburger hamburger--spin main-menu-btn is-not-active font-secondary ${styles.buttonHamburger}`}
        type="button"
        onClick={() => {
          toggleButton(isOpen);
        }}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
        <span className="screen-reader-text">Menu</span>
      </button>
      {isOpen && (
        <ul id="menu-primary-items" className="menu-items sm sm-simple">
          <li className="menu-item menu-item-type-post_type menu-item-object-page">
            <Link href="/page/projects-react-next/">React/Next</Link>
          </li>
          <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
            <Link href="/post/simple-bot-for-telegram-php/">Telegram Bots</Link>
          </li>
          <li className="menu-item menu-item-type-post_type menu-item-object-post">
            <Link href="/post/%d1%85%d0%be%d1%81%d1%82%d0%b8%d0%bd%d0%b3/">
              Хостинг
            </Link>
          </li>
          <li className="menu-item menu-item-type-custom menu-item-object-custom">
            <a href="mailto:info@consultapp.ru">info@consultapp.ru</a>
          </li>
        </ul>
      )}
    </nav>
  );
}
