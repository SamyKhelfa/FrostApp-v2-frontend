import React, { FC } from "react";
import "./DefaultLayout.css";
import { ConfigProvider, theme } from "antd";
import fr_FR from "antd/es/locale/fr_FR";
import { useScreenDimensions } from "@application/hooks";

const { defaultAlgorithm, darkAlgorithm } = theme;

interface IDefaultHeaderProps {
  children: React.ReactNode;
}

export const DefaultLayout: FC<IDefaultHeaderProps> = () => {
  const { isMobile } = useScreenDimensions();

  console.log(isMobile);

  return (
    <ConfigProvider
      locale={fr_FR}
      theme={{
        algorithm: true ? darkAlgorithm : defaultAlgorithm,
      }}
    ></ConfigProvider>
  );
};
