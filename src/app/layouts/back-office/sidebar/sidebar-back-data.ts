import { NavItem } from "../../full/sidebar/nav-item/nav-item";

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
    divider: true
  },
  {
    displayName: 'Services',
    iconName: 'solar:bookmark-square-minimalistic-line-duotone',
    route: '/back/service/liste'
  },
  {
    displayName: 'Prestations',
    iconName: 'solar:bookmark-square-minimalistic-line-duotone',
    route: '/back/prestation/liste'
  },
  {
    navCap: 'Paramétrages',
    divider: true
  },
  {
    displayName: 'Marque de voiture',
    iconName: 'solar:archive-minimalistic-line-duotone',
    route: '/back/marque',
  },
  {
    displayName: 'Modèle de voiture',
    iconName: 'solar:archive-minimalistic-line-duotone',
    route: '/back/marque/modele',
  },
  {
    displayName: 'Ajout de service',
    iconName: 'solar:archive-minimalistic-line-duotone',
    route: '/back/service'
  },
  {
    displayName: 'Ajout de prestation',
    iconName: 'solar:archive-minimalistic-line-duotone',
    route: '/back/prestation'
  },
  {
    displayName: 'Prestation par marque',
    iconName: 'solar:archive-minimalistic-line-duotone',
    route: '/back/prestation/prestationMarque'
  },
  {
    displayName: 'Ajout de pièce',
    iconName: 'solar:archive-minimalistic-line-duotone',
    route: '/back/piece'
  },
  {
    navCap: 'Gestion de stocks',
    divider: true
  },
  {
    displayName: 'Etat de stocks',
    iconName: 'solar:checklist-minimalistic-broken',
    route: ''
  },
  {
    displayName: 'Demande(s) de pièces',
    iconName: '',
    route: ''
  },
  {
    displayName: 'Retour(s) de pièces',
    iconName: '',
    route: ''
  },
  {
    displayName: 'Perte(s) de pièces',
    iconName: '',
    route: ''
  },
  {
    navCap: 'Employés',
    divider: true
  },
  {
    displayName: 'Liste des employés',
    iconName: 'solar:users-group-rounded-bold'
  }
];