import Image from "next/dist/client/image";
import PageTitle from "../PageTitle";
import Moment from "react-moment";
import { Body } from "./Body";
import Link from "../Link";

export default function ContentLayout({ content, pagename }) {
  return (
    <div className="max-w-xl px-2 pt-10 mx-auto md:px-6 md:max-w-2xl xl:max-w-3xl xl:px-0">
      <header>
        <div>
          <div className="flex justify-center">
            <Moment
              format="YYYY/MM/DD"
              className="text-medium sm:text-lg font-semibold py-2 md:py-6 sm:py-4 text-gray-900 dark:text-gray-100 max-w-none"
            >
              {content.updatedAt}
            </Moment>
          </div>
          <PageTitle>{content.title}</PageTitle>
          <div className="text-medium sm:text-lg tracking-wide font-semibold py-2 md:py-6 sm:py-4 text-gray-500 dark:text-gray-400">
            {content.description}
          </div>
          <div>
            <Image
              alt={content.title}
              src={content.image.url}
              className="object-cover object-center lg:h-48 md:h-36"
              width={1200}
              height={600}
            />
          </div>
        </div>
      </header>
      <article>
        <Body body={content.body} />
      </article>
      <footer>
        <div className="flex justify-center py-5 sm:pt-10 sm:pb-4">
          <Link href={`/${pagename}`} aria-label={`他の${pagename}も見る`}>
            <button className="inline px-4 py-2 text-normal font-medium leading-5 text-gray-100 hover:text-gray-900 dark:text-gray-900 dark:hover:text-gray-100 transition-colors duration-150 bg-gray-900 dark:bg-gray-100 border-2 rounded-lg shadow focus:outline-none hover:bg-gray-100 dark:hover:bg-gray-900">
              Other {pagename}
            </button>
          </Link>
        </div>
      </footer>
    </div>
  );
}
