import Image from "next/image";

const kindsrc = {
  mail: "/images/mail.svg",
  github: "/images/github.svg",
  twitter: "/images/twitter.svg",
};

const SocialIcon = ({ kind, href, size }) => {
  if (!href) return null;

  const src = kindsrc[kind];

  return (
    <a target="_blank" rel="noopener noreferrer" href={href}>
      <span className="sr-only">{kind}</span>
      <Image
        src={src}
        alt={kind}
        height={size}
        width={size}
        className="fill-current text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
      />
    </a>
  );
};

export default SocialIcon;
