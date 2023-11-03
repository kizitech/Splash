import { Link } from "react-router-dom";
import NavBarDark from "/src/components/NavBarDark";
import blog from "/src/assets/images/blog/image 9.png";
import { BlogArticle } from "/src/components/items/Blog";

function Blog() {
  return (
    <>
      <NavBarDark />

      <main className="blog">
        <div className="blog__main-article">
          <section className="blog__main-article-section">
            <div className="blog__main-article-image">
              <img src={blog} alt="splash model" />
            </div>
            <div className="blog__main-article-content">
              <h2 className="blog__main-article-content-title">
                Find Your Personal Style
              </h2>
              <p className="blog__main-article-content-text">
                Keeping up with the latest fashion trends isn’t the key to
                looking great. It’s staying true to your personal style.
              </p>
              <p className="blog__main-article-content-text">
                Personal style is all about playing with fashion to discover
                which clothes make you feel your best. Start with bold
                accessories and pops of color and then work on mixing and
                matching prints and textures.
              </p>
              <Link
                to="https://www.linkedin.com/ohanikizito"
                className="blog__main-article-content-link"
              >
                <button
                  type="button"
                  className="blog__main-article-content-button"
                >
                  Read full article
                </button>
              </Link>
            </div>
          </section>

          <section className="blog__trending-articles">
            <div className="blog__trending-articles-header">
              <h2 className="blog__trending-articles-title">
                Trending articles
              </h2>
            </div>
            <div className="blog__trending-articles-list">
              {BlogArticle.map((article) => (
                <article
                  key={article.Link}
                  className="blog__trending-articles-post"
                >
                  <img
                    src={article.image}
                    alt={article.alt}
                    className="blog__trending-articles-image"
                  />
                  <div className="blog__trending-articles-content">
                    <p className="blog__trending-articles-date">
                      {article.date}
                    </p>
                    <h3 className="blog__trending-articles-topic">
                      {article.title}
                    </h3>
                    <p className="blog__trending-articles-description">
                      {article.description}
                      <Link
                        to={article.Link}
                        className="blog__trending-articles-link"
                      >
                        Read more
                      </Link>
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Blog;
