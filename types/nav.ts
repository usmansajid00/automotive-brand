export interface NavLinkItem {
  label: string;
  href: string;
}

export interface SocialLinkItem {
  name: string;
  href: string;
  icon: string;
}

export interface HeaderConfig {
  navLinks: NavLinkItem[];
  socialLinks: SocialLinkItem[];
}
