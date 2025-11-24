export interface link {
  id: number;
  name: string;
  url: string;
}

const rawLinks = [
  { name: "Home", url: "/home" },
  { name: "Shop", url: "/shop" },
  { name: "About", url: "/about" },
  { name: "Contact", url: "/contact" },
];

export const navbarLinks: link[] = rawLinks.map((link, index) => ({
  id: index + 1,
  ...link,
}));
