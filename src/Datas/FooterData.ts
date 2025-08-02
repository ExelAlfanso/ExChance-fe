export type FooterData = {
  label: string;
  href: string;
};
export type ContactData = {
  label: string;
  icon: string;
};

export const FooterDatas = [
  { label: "MARKET", href: "/market" },
  { label: "WALLET", href: "/wallet" },
  { label: "LEARN", href: "/learn" },
  { label: "SUPPORT", href: "/support" },
];

export const ContactDatas = [
  { label: "support@exchange.com", icon: "mdi_email-outline.svg" },
  { label: "+221 (12345678)", icon: "ic_outline-phone.svg" },
  { label: "This is not a real product", icon: "ic_baseline-pin-drop.svg" },
];
