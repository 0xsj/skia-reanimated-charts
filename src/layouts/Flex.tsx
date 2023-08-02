import React from "react";

type FlexProps = {
  children: React.ReactNode;
  c: boolean;
};

export const Flex: React.FC<FlexProps> = (props) => {
  const { c, children } = props;

  const wrapperStyle = {
    display: "flex",
    color: c ? "blue" : "red",
    justifyContent: c ? "center" : undefined,
    alignItems: c ? "center" : undefined,
  };
  return <div style={wrapperStyle}>{children}</div>;
};
