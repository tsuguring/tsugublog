import Link from "./Link";
import siteMetadata from "../data/siteMetadata";
import SocialIcon from "./SocialIcon";

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center mt-8 sm:mt-14">
        <div className="flex mb-3 space-x-4">
          <SocialIcon
            kind="mail"
            href={`mailto:${siteMetadata.email}`}
            size={30}
          />
          <SocialIcon kind="github" href={siteMetadata.github} size={30} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={30} />
        </div>
        <div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
      </div>
    </footer>
  );
}
