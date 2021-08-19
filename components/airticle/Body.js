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
        <Image
          src={item.image.url}
          alt="image"
          className="object-cover object-center lg:h-48 md:h-36"
          width={1200}
          height={600}
        />
      ) : item.fieldId === "link" ? (
        <Link key={i} link={item.link} />
      ) : null
    )}
  </main>
);
