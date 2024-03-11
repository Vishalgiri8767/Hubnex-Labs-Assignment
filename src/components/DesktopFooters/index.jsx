import React from "react";
import { Text, Heading, Img } from "./..";

export default function DesktopFooters({
  image = "images/img_cube_helix_1.png",
  h2 = "Integration ecosystem",
  description = (
    <>
      Enhance your productivity by connecting <br />
      with your favorite tools, keeping all your
      <br /> essentials in one place.
    </>
  ),
  ...props
}) {
  return (
    <div {...props}>
      <Img src={image} alt="image" className="w-full md:h-auto object-cover max-w-[329px]" />
      <div className="flex flex-col items-center justify-start w-full pt-[15px] gap-2.5 px-[15px] md:px-5 max-w-[385px]">
        <Heading size="md" as="h1" className="tracking-[-1.04px] text-center bg-gradient bg-clip-text">
          {h2}
        </Heading>
        <Text size="md" as="p" className="w-[98%] !text-gray-900 tracking-[-0.16px] text-center !leading-[23px]">
          {description}
        </Text>
      </div>
    </div>
  );
}
