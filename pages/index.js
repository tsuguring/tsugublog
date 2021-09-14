import siteMetadata from "../data/siteMetadata";
import homeNavLinks from "../data/NavLinks";
import Logo from "../public/images/logo.svg";
import Link from "../components/Link";
import ThemeSwitch from "../components/ThemeSwich";
import SocialIcon from "../components/SocialIcon";
import Card from "../components/Card";
import { PageSEO } from "../components/SEO";
import { client } from "../libs/client";

export default function Home({ blog, products }) {
  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
      />
      <div className="h-full">
        <div className="flex justify-center items-center absolute sm:w-1/2 w-full h-full sm:left-0 bg-gray-100 dark:bg-gray-800">
          <div>
            <div className="flex px-2 py-2">
              <div className="mr-1">
                <Logo />
              </div>
              <div className="h-7 text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 md:block">
                {siteMetadata.headerTitle}
              </div>
              <div className="pt-1">
                <ThemeSwitch />
              </div>
            </div>
            <div className="flex py-2">
              {homeNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="px-2 font-xs md:font-xl text-gray-900 hover:text-gray-400 md:p-2 dark:text-gray-100"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <div className="flex py-2 px-2 space-x-6">
              <SocialIcon
                kind="mail"
                href={`mailto:${siteMetadata.email}`}
                size={30}
              />
              <SocialIcon kind="github" href={siteMetadata.github} size={30} />
              <SocialIcon
                kind="twitter"
                href={siteMetadata.twitter}
                size={30}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden sm:block sm:absolute sm:w-1/2 sm:h-full sm:overflow-y-scroll sm:right-0">
        <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-5 gap-5 xl:m-5 lg:m-14 md:m-10 m-5">
          {blog.map((blog) => (
            <div key={blog.id}>
              <Card content={blog} pagename="blog" />
            </div>
          ))}
          {products.map((products) => (
            <div key={products.id}>
              <Card content={products} pagename="products" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const data_blog = await client.get({ endpoint: "blog" });
  const data_products = await client.get({ endpoint: "products" });

  return {
    props: {
      blog: data_blog.contents,
      products: data_products.contents,
    },
  };
};
