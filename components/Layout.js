import siteMetadata from "../data/siteMetadata";
import headerNavLinks from "../data/NavLinks";
import Link from "./Link";
import SectionContainer from "./SectionContainer";
import Footer from "./Footer";
import Logo from "../public/images/logo.svg";
import MobileNav from "../components/MobileNav";
import ThemeSwich from "../components/ThemeSwich";

const Layout = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex flex-col justify-between h-screen">
        <header className="flex items-center justify-between py-12">
          <div>
            <Link href="/" aria-label="TsuguBlog">
              <div className="flex items-center justify-between">
                <div className="mr-1">
                  <Logo />
                </div>
                {typeof siteMetadata.headerTitle === "string" ? (
                  <div className="h-7 text-xl sm:text-xl font-semibold text-gray-900 dark:text-gray-100 sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-medium text-gray-900 hover:text-gray-400 sm:p-4 dark:text-gray-100"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwich />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  );
};

export default Layout;
