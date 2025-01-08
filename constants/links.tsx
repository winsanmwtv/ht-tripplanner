export interface NavLink {
  href: string;
  text: string;
  newtab?: boolean;
}

export interface NavLink {
  href: string;
  newtab?: boolean;
  text: string;
  pages?: { href: string; newtab?: boolean; text: string }[]; // Optional array of pages
}

export const nav_links: NavLink[] = [
  {
    href: "/ktbkonno.png",
    text: "Route Map Download",
    pages: [
    ],
  }
];