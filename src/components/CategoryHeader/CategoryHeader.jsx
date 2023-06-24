import React from "react";

export default function CategoryHeader({ title, description }) {
  return (
    <header
      className="archive-header"
      itemScope="itemscope"
      itemType="http://schema.org/WebPageElement"
    >
      <h1 className="archive-title font-headlines" itemProp="headline">
        {title}
      </h1>
      <div className="archive-description" itemProp="text">
        <p>{description}</p>
      </div>
    </header>
  );
}
