import { NavItem } from "../../full/sidebar/nav-item/nav-item";

export const navItems: NavItem[] = [
  {
    navCap: 'Home'
  },
  {
    displayName: 'Accueil',
    iconName: 'solar:home-outline',
    route: '/front/home'
  },
  {
    displayName: 'Nos services',
    iconName: 'solar:notebook-bold'
  },
  {
    navCap: 'Vous',
    divider: true
  },
  {
    displayName: 'Vos véhicules',
    iconName: 'solar:wheel-bold-duotone',
    route: '/front/voitures'
  },
  {
    displayName: 'Vos rendez-vous',
    iconName: 'solar:clipboard-list-linear',
    route: '/front/rdv'
  }
];