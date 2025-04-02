import { NavItem } from "../../full/sidebar/nav-item/nav-item";

export const navItems: NavItem[] = [
  {
    navCap: 'Pièces',
    divider: true
  },
  {
    displayName: 'Etat de stocks',
    iconName: 'solar:checklist-minimalistic-broken',
    route: '/meca/piece/stocks/etat'
  },
  {
    displayName: 'Sortie de stock',
    iconName: 'solar:document-add-broken',
    route: '/meca/piece/stocks/sortie'
  },
  {
    displayName: 'Demande de pièces',
    iconName: 'solar:folder-favourite-bookmark-bold-duotone',
    route: '/meca/piece/demande',
    children: [
      {
        displayName: 'Envoyer une demande',
        subItemIcon: false,
        iconName: 'solar:document-add-broken',
        route: '/meca/piece/demande/insert'
      },
      {
        displayName: 'Demande(s) de pièces',
        subItemIcon: false,
        iconName: 'solar:bookmark-square-minimalistic-line-duotone',
        route: '/meca/piece/demande/liste'
      }
    ]
  },
  {
    displayName: 'Retour de pièces',
    iconName: 'solar:folder-favourite-bookmark-bold-duotone',
    route: '/meca/piece/retour',
    children: [
      {
        displayName: 'Effectuer un retour',
        subItemIcon: false,
        iconName: 'solar:document-add-broken',
        route: '/meca/piece/retour/insert'
      },
      {
        displayName: 'Retour(s) de pièces',
        subItemIcon: false,
        iconName: 'solar:archive-down-minimlistic-linear',
        route: '/meca/piece/retour/liste'
      }
    ]
  },
  {
    displayName: 'Notification de perte',
    iconName: 'solar:folder-favourite-bookmark-bold-duotone',
    route: '/meca/piece/perte',
    children: [
      {
        displayName: 'Notifier une perte',
        subItemIcon: false,
        iconName: 'solar:notification-lines-remove-outline',
        route: '/meca/piece/perte/insert',
      },
      {
        displayName: 'Notification(s) de perte',
        subItemIcon: false,
        iconName: 'solar:clipboard-remove-broken',
        route: '/meca/piece/perte/liste',
      }
    ]
  },
];