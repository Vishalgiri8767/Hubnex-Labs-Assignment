import React from "react";
import { Text, Img } from "./..";

export default function DesktopTestimonial({
  asaseasoned = "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
  alexrivera = "Alex Rivera",
  jamietechguruze = "@jamietechguru00",
  ...props
}) {
  return (
    <div {...props}>
      <Text size="md" as="p" className="tracking-[-0.16px] !leading-[23px]">
        {asaseasoned}
      </Text>
      <div className="flex flex-row justify-start w-[78%] md:w-full gap-2">
        <Img src="images/img_ellipse_1.png" alt="circleimage" className="h-[42px] w-[42px] md:h-auto rounded-[50%]" />
        <div className="flex flex-col items-start justify-start w-[74%] gap-0.5">
          <Text size="md" as="p" className="tracking-[-0.32px] text-center !font-medium">
            {alexrivera}
          </Text>
          <Text size="md" as="p" className="tracking-[-0.16px] text-center">
            {jamietechguruze}
          </Text>
        </div>
      </div>
    </div>
  );
}
