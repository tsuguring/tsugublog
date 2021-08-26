import siteMetadata from "../data/siteMetadata";
import homeNavLinks from "../data/NavLinks";
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
      <div className="md:flex h-screen">
        <div className="flex justify-center items-center md:w-1/2 md:h-screen w-full h-full">
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
        <div className="hidden md:block md:w-1/2 md:h-screen sw-full h-1/2 border-2 bg-white dark:bg-gray-800 dark:border-gray-700"></div>
      </div>
    </>
  );
}
