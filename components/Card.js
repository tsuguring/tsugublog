import Image from "next/image";
import Link from "./Link";
import Moment from "react-moment";

const Card = ({ content, pagename }) => (
  <Link
    href={`/${pagename}/${content.id}`}
    aria-label={`Link to ${content.title}`}
  >
    <div className="h-full overflow-hidden border-2 border-gray-200 rounded-xl border-opacity-60 transition duration-500 ease-in-out transform hover:-translate-y-2 hover:-translate-x-2 hover:shadow-xl dark:border-gray-700">
      <Image
        alt={content.title}
        src={content.image.url}
        className="object-cover object-center lg:h-48 md:h-36"
        width={720}
        height={360}
      />
      <div className="p-3">
        <h2 className="mb-3 text-xl font-semibold leading-8">
          {content.title}
        </h2>
        <p className="mb-3 text-sm text-gray-500 max-w-none dark:text-gray-400">
          {content.description}
        </p>
        <Moment
          format="YYYY/MM/DD"
          className="text-sm text-gray-500 max-w-none dark:text-gray-400"
        >
          {content.createdAt}
        </Moment>
      </div>
    </div>
  </Link>
);

export default Card;
