export const Link = ({ key, link }) => (
  <a
    href={`${link}`}
    rel="noreferrer"
    target="_blank"
    className="text-medium py-1 sm:text-lg sm:py-2 font-medium tracking-wide leading-loose text-blue-700 hover:text-blue-400"
  >
    {link}
  </a>
);
