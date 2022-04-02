import React, { FC, ReactElement } from "react";
import Head from "next/head";
import classNames from "classnames";

type Props = {
  className?: string;
  children?: React.ReactNode;
  renderRightSection?: () => JSX.Element;
};

const BasicLayout: FC<Props> = ({ children, className }): ReactElement => {
  return (
    <>
      <Head>
        <title>ches4117</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <main className="flex bg-white">{children}</main>
    </>
  );
};

export default BasicLayout;
