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
            <h2 className="px-4 py-4 text-xl font-bold tracking-normal text-gray-900 dark:text-gray-100 md:text-2xl">
              自己紹介
            </h2>
            <p className="px-4 py-4 text-lg leading-8 tracking-normal text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-9 md:text-xl md:leading-10">
              情報分野学科の大学生です。
            </p>
            <p className="px-4 py-4 text-lg leading-8 tracking-normal text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-9 md:text-xl md:leading-10">
              Webサイト、ネイティブアプリなどの様々なプロダクトを開発しています。このブログの開発で使用した技術はJavaScript、Next.js、TailwindCSS、microCMSです。
            </p>
            <p className="px-4 py-4 text-lg leading-8 tracking-normal text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-9 md:text-xl md:leading-10">
              このWebサイトでは「開発したプロダクト」、「情報を共有するブログ」を掲載します。
            </p>
          </div>
          <div className="mt-16 flex flex-col border-2 border-gray-500 rounded border-opacity-60">
            <h2 className="px-4 py-4 text-xl font-bold tracking-normal text-gray-900 dark:text-gray-100 md:text-2xl">
              プログラミング技術
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
