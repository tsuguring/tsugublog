export const Link = ({ link }) => (
  <div className="py-1 sm:py-6 break-all">
    <a
      href={`${link}`}
      rel="noreferrer"
      target="_blank"
      className="text-medium sm:text-lg font-medium tracking-wide leading-loose text-blue-700 hover:text-blue-400"
    >
      {link}
    </a>
  </div>
);
