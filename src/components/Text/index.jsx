import React from "react";

const sizes = {
  xs: "text-[13px] font-medium leading-4",
  lg: "text-[22px] font-normal leading-[31px]",
  s: "text-sm font-normal",
  md: "text-base font-normal leading-5",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-black-900 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
