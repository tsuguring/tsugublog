import Layout from "../components/Layout";
import SocialIcon from "../components/SocialIcon";
import siteMetadata from "../data/siteMetadata";
import PageTitle from "../components/PageTitle";
import { PageSEO } from "../components/SEO";

export default function Profile() {
  return (
    <Layout>
      <PageSEO
        title={`プロフィール - ${siteMetadata.title}`}
        description={siteMetadata.description}
      />
      <div>
        <div className="pt-6 space-y-2 md:space-y-5">
          <PageTitle>{siteMetadata.author}</PageTitle>
          <p className="text-gray-500 dark:text-gray-400">
            {siteMetadata.belongs}
          </p>
          <div className="flex mb-3 space-x-4">
            <SocialIcon
              kind="mail"
              href={`mailto:${siteMetadata.email}`}
              size={30}
            />
            <SocialIcon kind="github" href={siteMetadata.github} size={30} />
            <SocialIcon kind="twitter" href={siteMetadata.twitter} size={30} />
          </div>
        </div>
        <div className="pt-10 pb-8 text-gray-900 dark:text-gray-100 max-w-none xl:col-span-2">
          <div className="flex flex-col border-2 border-gray-500 rounded border-opacity-60">
            <h2 className="px-4 pt-6 pb-1 text-xl font-bold tracking-normal text-gray-900 dark:text-gray-100 md:text-2xl">
              自己紹介
            </h2>
            <p className="px-4 pt-6 pb-1 text-lg font-semibold leading-8 tracking-normal text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-9 md:text-xl md:leading-10">
              所属
            </p>
            <p className="px-4 text-lg leading-8 tracking-normal text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-9 md:text-xl md:leading-10">
              関西学院大学理工学部情報科学科大崎研究室、on株式会社（エンジニアインターンシップ生）
            </p>
            <p className="px-4 pt-6 pb-1 text-lg font-semibold leading-8 tracking-normal text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-9 md:text-xl md:leading-10">
              好きなこと
            </p>
            <p className="px-4 text-lg leading-8 tracking-normal text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-9 md:text-xl md:leading-10">
              プログラミング、ものづくり、麻雀、スポーツ観戦
            </p>
            <p className="px-4 pt-6 pb-1 text-lg font-semibold leading-8 tracking-normal text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-9 md:text-xl md:leading-10">
              嫌いなこと
            </p>
            <p className="px-4 text-lg leading-8 tracking-normal text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-9 md:text-xl md:leading-10">
              ネガティブ思考、きのこ、前例が少ないエラー、英語(公式ドキュメント、論文などを読むことがしんどい→training中)
            </p>
            <p className="px-4 pt-6 pb-1 text-lg font-semibold leading-8 tracking-normal text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-9 md:text-xl md:leading-10">
              経歴
            </p>
            <p className="px-4 py-3 text-lg leading-8 tracking-normal text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-9 md:text-xl md:leading-10">
              2000年：広島県呉市で誕生（広島での記憶はほどんどない）
            </p>
            <p className="px-4 py-3 text-lg leading-8 tracking-normal text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-9 md:text-xl md:leading-10">
              2004年：兵庫県西宮市に引っ越し
            </p>
            <p className="px-4 py-3 text-lg leading-8 tracking-normal text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-9 md:text-xl md:leading-10">
              2013年：中学生になる。テニス、ゲーム、ものづくりに没頭
            </p>
            <p className="px-4 py-3 text-lg leading-8 tracking-normal text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-9 md:text-xl md:leading-10">
              2016年：高校生になる。テニスに高校生活を捧げる。
            </p>
            <p className="px-4 py-3 text-lg leading-8 tracking-normal text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-9 md:text-xl md:leading-10">
              2019年：大学生になる。プログラミングに初めて触れる。プログラミングでプロダクトを作りたいと思う。
            </p>
            <p className="px-4 py-3 text-lg leading-8 tracking-normal text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-9 md:text-xl md:leading-10">
              2021年：プログラミングで初めてプロダクト(TsuguBlog)を作成。
            </p>
            <p className="px-4 py-3 text-lg leading-8 tracking-normal text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-9 md:text-xl md:leading-10">
              2022年：2つ目のプロダクトiosアプリmanasubを作成、リリース(収益: 500円)。on株式会社にインターン生としてjoin。大学では大崎研究室にjoin
            </p>
            <p className="px-4 py-3 text-lg leading-8 tracking-normal text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-9 md:text-xl md:leading-10">
              2027年：数億人が使用するサービスを開発、運営。多くの人々を幸せにする。
            </p>
            <p className="px-4 pt-6 pb-1 text-lg font-semibold leading-8 tracking-normal text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-9 md:text-xl md:leading-10">
              目標
            </p>
            <p className="px-4 text-lg leading-8 tracking-normal text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-9 md:text-xl md:leading-10">
              大規模なアプリケーションの開発に携わり、多くの人々の幸せを支えたい。
            </p>
            <p className="px-4 pt-6 pb-1 text-lg font-semibold leading-8 tracking-normal text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-9 md:text-xl md:leading-10">
              概要
            </p>
            <p className="px-4 pb-4 text-lg leading-8 tracking-normal text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-9 md:text-xl md:leading-10">
            このWebサイトでは「開発したプロダクト」、「情報を共有するブログ」を掲載します。
            </p>
          </div>
          <div className="mt-16 flex flex-col border-2 border-gray-500 rounded border-opacity-60">
            <h2 className="px-4 py-4 text-xl font-bold tracking-normal text-gray-900 dark:text-gray-100 md:text-2xl">
               スキルセット
            </h2>
            <div className="px-2 py-4 flex flex-wrap">
              <div className="text-xs text-gray-100 dark:text-gray-900 text-center bg-gray-900 dark:bg-gray-100 px-4 py-2 m-2 rounded-md">
                HTML/CSS
              </div>
              <div className="text-xs text-gray-100 dark:text-gray-900 text-center bg-gray-900 dark:bg-gray-100 px-4 py-2 m-2 rounded-md">
                JavaScript
              </div>
              <div className="text-xs text-gray-100 dark:text-gray-900 text-center bg-gray-900 dark:bg-gray-100 px-4 py-2 m-2 rounded-md">
                TypeScript
              </div>
              <div className="text-xs text-gray-100 dark:text-gray-900 text-center bg-gray-900 dark:bg-gray-100 px-4 py-2 m-2 rounded-md">
                C
              </div>
              <div className="text-xs text-gray-100 dark:text-gray-900 text-center bg-gray-900 dark:bg-gray-100 px-4 py-2 m-2 rounded-md">
                C++
              </div>
              <div className="text-xs text-gray-100 dark:text-gray-900 text-center bg-gray-900 dark:bg-gray-100 px-4 py-2 m-2 rounded-md">
                Node.js
              </div>
              <div className="text-xs text-gray-100 dark:text-gray-900 text-center bg-gray-900 dark:bg-gray-100 px-4 py-2 m-2 rounded-md">
                React
              </div>
              <div className="text-xs text-gray-100 dark:text-gray-900 text-center bg-gray-900 dark:bg-gray-100 px-4 py-2 m-2 rounded-md">
                React Native
              </div>
              <div className="text-xs text-gray-100 dark:text-gray-900 text-center bg-gray-900 dark:bg-gray-100 px-4 py-2 m-2 rounded-md">
                Next.js
              </div>
              <div className="text-xs text-gray-100 dark:text-gray-900 text-center bg-gray-900 dark:bg-gray-100 px-4 py-2 m-2 rounded-md">
                Svelte
              </div>
              <div className="text-xs text-gray-100 dark:text-gray-900 text-center bg-gray-900 dark:bg-gray-100 px-4 py-2 m-2 rounded-md">
                Nest.js
              </div>
              <div className="text-xs text-gray-100 dark:text-gray-900 text-center bg-gray-900 dark:bg-gray-100 px-4 py-2 m-2 rounded-md">
                Ruby on Rails
              </div>
              <div className="text-xs text-gray-100 dark:text-gray-900 text-center bg-gray-900 dark:bg-gray-100 px-4 py-2 m-2 rounded-md">
                TailwindCSS
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
