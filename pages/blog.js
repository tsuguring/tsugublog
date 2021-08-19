import Card from "../components/Card";
import Layout from "../components/Layout";
import { client } from "../libs/client";
import { PageSEO } from "../components/SEO";
import siteMetadata from "../data/siteMetadata";

export default function Blog({ blog }) {
  return (
    <>
      <PageSEO
        title={`ブログ - ${siteMetadata.title}`}
        description={siteMetadata.description}
      />
      <Layout>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-10">
          {blog.map((blog) => (
            <div key={blog.id}>
              <Card content={blog} pagename="blog" />
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};
