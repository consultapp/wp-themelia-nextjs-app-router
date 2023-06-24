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
        className={`menu-toggle hamburger hamburger--spin main-menu-btn font-secondary is-${
          isOpen ? "" : "not-"
        }active ${styles.buttonHamburger}`}
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
      {
        <ul
          id="menu-primary-items"
          className={`menu-primary-items menu-items sm sm-simple  ${
            isOpen ? "menu-is-active" : ""
          }`}
        >
          <li className="menu-item menu-item-type-post_type menu-item-object-page">
            <Link href="/">Статьи</Link>
          </li>
          <li className="menu-item menu-item-type-post_type menu-item-object-page">
            <Link href="/page/projects-react-next/">React/Next</Link>
          </li>
          <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
            <Link href="/category/stati/wordpress/">WordPress</Link>
          </li>
          <li className="menu-item menu-item-type-custom menu-item-object-custom">
            <a href="mailto:info@consultapp.ru">info@consultapp.ru</a>
          </li>
        </ul>
      }
    </nav>
  );
}
