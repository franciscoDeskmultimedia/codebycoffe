"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
  return (
    <>
      <NavigationMenu className=" container w-full justify-between ">
        <Link href="/" className=" font-gvibes text-2xl mr-2 pt">
          {" "}
          Garabat
        </Link>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Tipo</NavigationMenuTrigger>
            <NavigationMenuContent className=" columns-2  gap-4">
              <div className="image_text">JUST TEXT FOR NOW</div>
              <div className="links">
                <NavigationMenuLink href="/pintura">Pintura</NavigationMenuLink>
                <NavigationMenuLink href="/escultura">
                  Escultura
                </NavigationMenuLink>
                <NavigationMenuLink href="/fotografia">
                  Fotografia
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

export default Navigation;
