export interface link {
  id: number;
  name: string;
  url: string;
}

const rawLinks = [
  { name: "Payment Options", url: "#" },
  { name: "Returns", url: "#" },
  { name: "Privacy Policies", url: "#" },
];

export const helpLinks: link[] = rawLinks.map((link, index) => ({
  id: index + 1,
  ...link,
}));
