"use client";
import React, { FC, ReactNode, useEffect, useState } from "react";
import scss from "./LayoutSite.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { usePathname } from "next/navigation";

interface LayoutProps {
  children: ReactNode;
}

const LayoutSite: FC<LayoutProps> = ({ children }) => {
  const [isAuthPage, setIsAuthpage] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    switch (pathname) {
      case "/sign-in":
      case "/sign-up":
        setIsAuthpage(true);
        break;
      default:
        setIsAuthpage(false);
        break;
    }
  }, [pathname]);

  return (
    <div className={scss.LayoutSite}>
      {!isAuthPage && <Header />}
      <main>{children}</main>
      {!isAuthPage && <Footer />}
    </div>
  );
};

export default LayoutSite;
