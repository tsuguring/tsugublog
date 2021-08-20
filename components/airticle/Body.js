import { Heading } from "./Heading";
import { Text } from "./Text";
import Image from "next/dist/client/image";
import { Link } from "./Link";
import { SmallHeading } from "./SmallHeading";

export const Body = ({ body }) => (
  <main>
    {body.map((item, i) =>
      item.fieldId === "heading" ? (
        <Heading key={i} heading={item.heading} />
      ) : item.fieldId === "smallheading" ? (
        <SmallHeading key={i} smallheading={item.smallheading} />
      ) : item.fieldId === "text" ? (
        <Text key={i} text={item.text} />
      ) : item.fieldId === "image" ? (
        <figure className="-mx-6 sm:-mx-10 md:-mx-19 lg:-mx-36 xl:-mx-56 flex flex-col justify-center items-center border-2 rounded-lg border-gray-200 dark:border-gray-700">
          <Image
            src={item.image.url}
            alt="image"
            className="object-cover object-center rounded-lg"
            width={1212}
            height={582}
          />
        </figure>
      ) : item.fieldId === "link" ? (
        <Link key={i} link={item.link} />
      ) : null
    )}
  </main>
);
