import React from "react";
import { Img, Text, Heading } from "./..";

export default function DesktopOne({
  image = "images/img_icons_black_900_24x24.svg",
  integration = "Integration ecosystem",
  body = (
    <>
      Track your progress and motivate
      <br />
      your efforts everyday.
    </>
  ),
  getforfree = "Learn more",
  ...props
}) {
  return (
    <div {...props}>
      <Img src={image} alt="image" className="h-[24px] w-[24px] ml-px md:ml-0" />
      <Heading size="s" as="h1" className="mt-[11px] ml-px md:ml-0 !text-black-900 tracking-[-0.56px]">
        {integration}
      </Heading>
      <div className="flex flex-col items-start justify-start w-full mt-[7px] gap-2.5">
        <Text size="md" as="p" className="ml-px md:ml-0 tracking-[-0.16px] !leading-[23px]">
          {body}
        </Text>
        <div className="flex flex-row justify-start gap-1">
          <a href="#">
            <Text size="md" as="p" className="tracking-[-0.16px]">
              {getforfree}
            </Text>
          </a>
          <Img src="images/img_icons_black_900.svg" alt="learn_more_one" className="h-[20px] w-[20px]" />
        </div>
      </div>
    </div>
  );
}
