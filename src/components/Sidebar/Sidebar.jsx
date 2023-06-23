"use client";
import SearchContainer from "@/client/Search/Search";
import AboutPlugin from "@/components/Plugins/About";
import CategoriesPlugin from "../Plugins/Categories";

export default function Sidebar() {
  return (
    <aside
      className="sidebar sidebar-primary grid-30 tablet-grid-33"
      role="complementary"
      id="sidebar-primary"
      aria-label="Primary Sidebar"
      itemScope="itemscope"
      itemType="http://schema.org/WPSideBar"
    >
      <h3
        id="sidebar-primary-title"
        className="screen-reader-text font-headlines"
      >
        Sidebar
      </h3>
      <SearchContainer />
      <AboutPlugin />
      <CategoriesPlugin />
      <div className="sidebar-inner"></div>
    </aside>
  );
}
