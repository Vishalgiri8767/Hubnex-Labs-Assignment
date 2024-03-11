import React from "react";

const sizes = {
  xl: "text-[90px] font-bold leading-[90px]",
  s: "text-lg font-bold",
  md: "text-[26px] font-bold leading-[34px]",
  xs: "text-sm font-bold",
  lg: "text-[54px] font-bold leading-[71px]",
};

const Heading = ({ children, className = "", size = "lg", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-transparent font-dmsans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
