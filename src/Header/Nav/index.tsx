"use client";
import React from "react";
import type { Header as HeaderType } from "@/payload-types";
import { CMSLink } from "@/components/Link";

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || [];

  return (
    <nav className="hidden md:flex items-center gap-8">
      {navItems.map(({ link }, i) => {
        return (
          <CMSLink
            key={i}
            {...link}
            appearance="link"
            className="font-medium text-xl hover:scale-110 transition hover:no-underline"
          />
        );
      })}
    </nav>
  );
};
