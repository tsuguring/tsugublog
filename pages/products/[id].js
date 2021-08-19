import Layout from "../../components/Layout";
import { client } from "../../libs/client";
import ContentLayout from "../../components/airticle/Layout";

export default function ProductsId({ products }) {
  return (
    <Layout>
      <ContentLayout content={products} pagename="products" />
    </Layout>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "products" });

  const paths = data.contents.map((content) => `/products/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "products", contentId: id });

  return {
    props: {
      products: data,
    },
  };
};
