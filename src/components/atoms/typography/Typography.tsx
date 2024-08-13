import React from "react";
import TypographyPropsType from "./type";

const Typography = ({ tag, text, className, children, style, ariaLabel, ariaLabelledBy }: TypographyPropsType) => {
  return React.createElement(
    tag,
    {
      className: className,
      style: style,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
    },
    <>
      {text}
      {children}
    </>
  );
}

export default Typography;
