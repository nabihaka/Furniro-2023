export interface link {
  id: number;
  name: string;
  url: string;
}

const rawLinks = [
  { name: "Home", url: "/home" },
  { name: "Shop", url: "/home/shop" },
  { name: "About", url: "/home/about" },
  { name: "Contact", url: "/home/contact" },
];

export const navbarLinks: link[] = rawLinks.map((link, index) => ({
  id: index + 1,
  ...link,
}));
