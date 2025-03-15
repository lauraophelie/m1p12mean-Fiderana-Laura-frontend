import { NavItem } from "../../full/sidebar/nav-item/nav-item";

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    navCap: 'Paramétrages',
    divider: true
  },
  {
    displayName: 'Marques de voiture',
    iconName: 'solar:archive-minimalistic-line-duotone',
    route: '/back/marque',
  }
];