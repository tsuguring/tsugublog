import siteMetadata from "../data/siteMetadata";
import headerNavLinks from "../data/NavLinks";
import Logo from "../public/images/logo.svg";
import Link from "../components/Link";
import ThemeSwitch from "../components/ThemeSwich";
import SocialIcon from "../components/SocialIcon";
import { PageSEO } from "../components/SEO";

export default function Home() {
  return (
    <>
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
      />
      <div className="sm:flex h-screen">
        <div className="flex justify-center items-center sm:w-1/2 sm:h-screen w-full h-full">
          <div className="flex-col">
            <div className="flex px-2 py-2">
              <div className="mr-1">
                <Logo />
              </div>
              <div className="h-7 text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100 sm:block">
                {siteMetadata.headerTitle}
              </div>
              <div className="pt-1">
                <ThemeSwitch />
              </div>
            </div>
            <div className="flex py-2">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 hover:text-gray-400 sm:p-2 dark:text-gray-100"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <div className="flex py-2 px-2 space-x-4">
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
        <div className="hidden sm:block sm:w-1/2 sm:h-screen sw-full h-1/2 border-2 bg-white dark:bg-gray-800 dark:border-gray-700"></div>
      </div>
    </>
  );
}
