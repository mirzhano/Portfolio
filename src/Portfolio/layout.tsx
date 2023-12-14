import "./globals.css";
import React, { ReactNode } from "react";





type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <div lang="en">
            <div
                className={` scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
            >
                {children}
            </div>
        </div>
    );
}
