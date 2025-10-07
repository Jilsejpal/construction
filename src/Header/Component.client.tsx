"use client";
import { useHeaderTheme } from "@/providers/HeaderTheme";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import type { Header } from "@/payload-types";
import { HeaderNav } from "./Nav";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageMedia } from "@/components/Media/ImageMedia";
import { CMSLink } from "@/components/Link";

interface HeaderClientProps {
  data: Header;
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null);
  // const [isOpen, setIsOpen] = useState(false);
  const { headerTheme, setHeaderTheme } = useHeaderTheme();
  const pathname = usePathname();

  useEffect(() => {
    setHeaderTheme(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme]);

  return (
    // <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-gradient-to-b from-white to-transparent">
    <header className="z-50 py-4">
      <div className="container mx-auto px-4 flex items-center justify-center md:justify-between">
        <ImageMedia resource={data.logo} imgClassName="w-24 aspect-auto" />

        <HeaderNav data={data} />

        {data.links &&
          data.links.map((item) => {
            return (
              <CMSLink
                key={item.id}
                {...item.link}
                className="bg-primary hover:bg-primary text-card hover:scale-105 transition"
              />
            );
          })}

        {/* <div className="flex items-center gap-2">
          <Button variant="secondary" className="lg:flex hidden">
            <Phone className="w-4 h-4" />
            <div className="flex flex-col items-start text-left">
              <span className="text-xs font-normal opacity-90">
                CONTACTEZ-NOUS
              </span>
              <span className="text-sm font-bold">819-918-5452</span>
            </div>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <HeaderNav data={data} />
            </SheetContent>
          </Sheet>
        </div> */}
      </div>
    </header>
  );
};
