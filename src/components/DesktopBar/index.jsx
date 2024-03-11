import React from "react";
import { Img, Text } from "./..";

export default function DesktopBar({
  thispageis = "This page is included in a free SaaS Website Kit.",
  viewthe = "View the complete Kit",
  ...props
}) {
  return (
    <div {...props}>
      <div className="flex flex-row sm:flex-col justify-start w-[42%] mt-0.5 gap-[11px] px-[3px] sm:gap-5">
        <Text as="p" className="mt-px sm:mt-0 !text-white-A700_99 !font-dmsans">
          {thispageis}
        </Text>
        <div className="flex flex-row justify-start items-center w-[34%] sm:w-full gap-1">
          <Text as="p" className="!text-white-A700 !font-dmsans">
            {viewthe}
          </Text>
          <Img src="images/img_icons.svg" alt="icons_one" className="h-[16px] w-[16px]" />
        </div>
      </div>
    </div>
  );
}
