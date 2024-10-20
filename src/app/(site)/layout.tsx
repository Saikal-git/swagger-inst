import LayoutSite from "@/components/layout/LayoutSite";
import React, { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <LayoutSite>{children}</LayoutSite>
    </div>
  );
};

export default layout;
