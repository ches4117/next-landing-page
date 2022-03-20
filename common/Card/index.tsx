import React, { FC, ReactElement } from "react";
import classNames from "classnames";

type Props = {
  fullWidth?: boolean;
  className?: string;
  children?: React.ReactNode;
  renderRightSection?: () => JSX.Element;
};

const Card: FC<Props> = ({ children, className }): ReactElement => {
  const classString = classNames(
    "lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0",
    className
  );

  return <div className={classString}>{children}</div>;
};

export default Card;
