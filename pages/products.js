import Card from "../components/Card";
import Layout from "../components/Layout";
import { client } from "../libs/client";
import { PageSEO } from "../components/SEO";
import siteMetadata from "../data/siteMetadata";

export default function Products({ products }) {
  return (
    <Layout>
      <PageSEO
        title={`プロダクト - ${siteMetadata.title}`}
        description={siteMetadata.description}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-10">
        {products.map((products) => (
          <div key={products.id}>
            <Card content={products} pagename="products" />
          </div>
        ))}
      </div>
    </Layout>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "products" });

  return {
    props: {
      products: data.contents,
    },
  };
};
