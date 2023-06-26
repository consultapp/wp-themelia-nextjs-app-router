import LoadingWheel from "@/components/LoadingWheel/LoadingWheel";
import Link from "next/link";

function displayCategolyLevel(cats) {
  return cats.map((item) => {
    isTopLevel = item.parent === 0;
    return (
      <li className="cat-item" key={item.id}>
        <Link href={item.link}>{item.name}</Link>
        {item.childs && displayCategolyLevel(item.childs)}
      </li>
    );
  });
}

export default function CategoriesPlugin({ categories, isLoading }) {
  if (isLoading) {
    return <LoadingWheel />;
  }

  return (
    <section id="categories-2" className="widget widget_categories">
      <h3 className="widget-title font-headlines">
        <span className="wrap">Рубрики</span>
      </h3>
      <ul>
        <li className="cat-item cat-item-37">
          <a href="/category/%d0%bd%d0%be%d0%b2%d0%be%d1%81%d1%82%d0%b8/">
            Новости
          </a>
        </li>
        <li className="cat-item cat-item-6">
          <a href="/category/stati/">Статьи</a>
          <ul className="children">
            <li className="cat-item cat-item-27">
              <a href="/category/stati/1%d1%81/">1С</a>
            </li>
            <li className="cat-item cat-item-38">
              <a href="/category/stati/apple/">Apple</a>
            </li>
            <li className="cat-item cat-item-39">
              <a href="/category/stati/bitrix/">Bitrix</a>
            </li>
            <li className="cat-item cat-item-33">
              <a href="/category/stati/macos/">MacOS</a>
            </li>
            <li className="cat-item cat-item-46">
              <a href="/category/stati/next-js/">Next.js</a>
            </li>
            <li className="cat-item cat-item-51">
              <a href="/category/stati/nginx/">Nginx</a>
            </li>
            <li className="cat-item cat-item-43">
              <a href="/category/stati/react-js/">React JS</a>
            </li>
            <li className="cat-item cat-item-12">
              <a href="/category/stati/seo/">SEO</a>
            </li>
            <li className="cat-item cat-item-40">
              <a href="/category/stati/telegram/">Telegram</a>
              <ul className="children">
                <li className="cat-item cat-item-42">
                  <a href="/category/stati/telegram/telegram-bots/">
                    Telegram Bots
                  </a>
                </li>
              </ul>
            </li>
            <li className="cat-item cat-item-23">
              <a href="/category/stati/wordpress/">Wordpress</a>
              <ul className="children">
                <li className="cat-item cat-item-41">
                  <a href="/category/stati/wordpress/%d0%bf%d0%bb%d0%b0%d0%b3%d0%b8%d0%bd%d1%8b-wp/">
                    Плагины WP
                  </a>
                </li>
              </ul>
            </li>
            <li className="cat-item cat-item-14">
              <a href="/category/stati/%d0%b8%d0%bd%d0%b2%d0%b5%d1%81%d1%82%d0%b8%d1%86%d0%b8%d0%b8/">
                Инвестиции
              </a>
            </li>
            <li className="cat-item cat-item-34">
              <a href="/category/stati/%d0%bf%d0%be%d0%bb%d0%b5%d0%b7%d0%bd%d1%8b%d0%b5-%d0%bf%d1%80%d0%be%d0%b3%d1%80%d0%b0%d0%bc%d0%bc%d1%8b/">
                Полезные программы
              </a>
            </li>
            <li className="cat-item cat-item-13">
              <a href="/category/stati/%d1%80%d0%b0%d0%b7%d0%bd%d0%be%d0%b5/">
                Разное
              </a>
            </li>
          </ul>
        </li>
        <li className="cat-item cat-item-44">
          <a href="/category/%d1%8f%d1%85%d1%82%d0%b8%d0%bd%d0%b3/">Яхтинг</a>
          <ul className="children">
            <li className="cat-item cat-item-45">
              <a href="/category/%d1%8f%d1%85%d1%82%d0%b8%d0%bd%d0%b3/%d0%be%d0%b1%d1%83%d1%87%d0%b5%d0%bd%d0%b8%d0%b5/">
                Обучение
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}
