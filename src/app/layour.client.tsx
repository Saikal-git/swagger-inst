"use client";
import ReduxProvider from "@/providers/ReduxProvider";
import { FC, ReactNode } from "react";

interface ILayoutProps {
  children: ReactNode;
}

const LayoutClient: FC<ILayoutProps> = ({ children }) => {
  return <ReduxProvider>{children}</ReduxProvider>;
};

export default LayoutClient;