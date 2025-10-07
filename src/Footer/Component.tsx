import React from "react";
import type { Footer as FooterType } from "@/payload-types";
import { getCachedGlobal } from "@/utilities/getGlobals";
import { CMSLink } from "@/components/Link";
import { ImageMedia } from "@/components/Media/ImageMedia";

export async function Footer() {
  const footerData: FooterType = await getCachedGlobal("footer", 1)();

  const {
    title,
    location,
    email,
    phone,
    logo,
    navItems = [],
  } = footerData || {};

  return (
    <footer className="w-full border-t border-gray-200 bg-white text-gray-800">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col gap-3 w-full md:w-auto">
            <div className="text-sm space-y-1 border-b border-black pb-2">
              <p className="font-semibold text-xl md:text-2xl">{title}</p>
              <p className="text-lg">{location}</p>
              <p className="text-lg">
                Téléphone :{" "}
                <a href={`tel:${phone}`} className="hover:underline">
                  {phone}
                </a>
              </p>
              <p className="text-lg">
                Courriel :{" "}
                <a href={`mailto:${email}`} className="hover:underline">
                  {email}
                </a>
              </p>
            </div>

            <nav className="flex flex-wrap gap-x-6">
              {navItems &&
                navItems.map(({ link }, i) => (
                  <CMSLink
                    key={i}
                    {...link}
                    className="text-sm uppercase tracking-wide text-secondary hover:text-black"
                  />
                ))}
            </nav>
          </div>

          <div className="flex flex-col items-start md:items-end gap-4 md:text-right">
            <ImageMedia resource={logo} imgClassName="w-36" />

            <p className="text-sm text-black">
              ©Cinq23, 2023 tous droits réservés | création Web TLA Graff
            </p>
            {/* <p className="text-sm text-gray-500">
              Developed and created by{" "}
              <a href="https://thespecialcharacter.com/" className="underline">
                The Special Character
              </a>
            </p> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
