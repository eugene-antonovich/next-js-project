import React from "react";
import Link from "next/link";

const BlogSidebar = () => {
  return (
    <>
      <div className="widget-area">
        <div className="widget widget_search">
          <form className="search-form">
            <label>
              <input
                type="search"
                className="search-field"
                placeholder="Search..."
              />
            </label>
            <button type="submit">
              <i className="ri-search-2-line"></i>
            </button>
          </form>
        </div>

        <div className="widget widget_posts_thumb">
          <h3 className="widget-title">Popular Posts</h3>

          <article className="item">
            <Link href="/blog/details" className="thumb">
              <span
                className="fullimage cover"
                role="img"
                style={{ backgroundImage: `url(/images/blog/blog4.jpg)` }}
              ></span>
            </Link>
            <div className="info">
              <h4 className="title usmall">
                <Link href="/blog/details">
                  Being The Best-Selling Smart Phone This Year
                </Link>
              </h4>
              <span className="date">
                <i className="ri-calendar-2-fill"></i> Jan 15, 2023
              </span>
            </div>
          </article>

          <article className="item">
            <Link href="/blog/details" className="thumb">
              <span
                className="fullimage cover"
                role="img"
                style={{ backgroundImage: `url(/images/blog/blog5.jpg)` }}
              ></span>
            </Link>
            <div className="info">
              <h4 className="title usmall">
                <Link href="/blog/details">
                  Love Songs Helped Me Through Heartbreak
                </Link>
              </h4>
              <span className="date">
                <i className="ri-calendar-2-fill"></i> Jan 14, 2023
              </span>
            </div>
          </article>

          <article className="item">
            <Link href="/blog/details" className="thumb">
              <span
                className="fullimage cover"
                role="img"
                style={{ backgroundImage: `url(/images/blog/blog6.jpg)` }}
              ></span>
            </Link>
            <div className="info">
              <h4 className="title usmall">
                <Link href="/blog/details">
                  Two Fashion Designers Busy With 2023 Winter Fashion
                </Link>
              </h4>
              <span className="date">
                <i className="ri-calendar-2-fill"></i> Jan 13, 2023
              </span>
            </div>
          </article>

          <article className="item">
            <Link href="/blog/details" className="thumb">
              <span
                className="fullimage cover"
                role="img"
                style={{ backgroundImage: `url(/images/blog/blog7.jpg)` }}
              ></span>
            </Link>
            <div className="info">
              <h4 className="title usmall">
                <Link href="/blog/details">
                  Working in the Office is a Tradition For Women
                </Link>
              </h4>
              <span className="date">
                <i className="ri-calendar-2-fill"></i> Jan 12, 2023
              </span>
            </div>
          </article>
        </div>

        <div className="widget widget_categories">
          <h3 className="widget-title">Categories</h3>

          <ul>
            <li>
              <Link href="/blog/with-right-sidebar">
                Business <span className="post-count">(2)</span>
              </Link>
            </li>
            <li>
              <Link href="/blog/with-right-sidebar">
                Privacy <span className="post-count">(5)</span>
              </Link>
            </li>
            <li>
              <Link href="/blog/with-right-sidebar">
                Technology <span className="post-count">(6)</span>
              </Link>
            </li>
            <li>
              <Link href="/blog/with-right-sidebar">
                Tips <span className="post-count">(2)</span>
              </Link>
            </li>
            <li>
              <Link href="/blog/with-right-sidebar">
                Log in <span className="post-count">(1)</span>
              </Link>
            </li>
            <li>
              <Link href="/blog/with-right-sidebar">
                Uncategorized <span className="post-count">(1)</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="widget widget_tag_cloud">
          <h3 className="widget-title">Tags</h3>

          <div className="tagcloud">
            <Link href="/blog/with-right-sidebar">Advertisment</Link>

            <Link href="/blog/with-right-sidebar">Business</Link>

            <Link href="/blog/with-right-sidebar">Life</Link>

            <Link href="/blog/with-right-sidebar">Lifestyle</Link>

            <Link href="/blog/with-right-sidebar">Fashion</Link>

            <Link href="/blog/with-right-sidebar">Ads</Link>

            <Link href="/blog/with-right-sidebar">Inspiration</Link>

            <Link href="/blog/with-right-sidebar">Blog</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSidebar;
