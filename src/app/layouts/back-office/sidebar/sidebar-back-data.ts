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
    route: '/back/piece/stocks/etat'
  },
  {
    displayName: 'Demande(s) de pièces',
    iconName: 'solar:folder-2-outline',
    route: '/back/piece/demandes'
  },
  {
    displayName: 'Retour(s) de pièces',
    iconName: 'solar:folder-2-outline',
    route: '/back/piece/retours'
  },
  {
    displayName: 'Perte(s) de pièces',
    iconName: 'solar:folder-2-outline',
    route: '/back/piece/pertes'
  },
  {
    navCap: 'Employés',
    divider: true
  },
  {
    displayName: 'Liste des employés',
    iconName: 'solar:users-group-rounded-bold'
  },
  {
    displayName: 'Profil',
    iconName: 'solar:lock-keyhole-minimalistic-line-duotone',
    route: '/authentication',
    children: [
      {
        displayName: 'Ajout de profil',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/back/profil/formProfil',
      },
      {
        displayName: 'Liste de profil',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/back/profil',
      }
    ],
  },

  {
    displayName: 'Poste',
    iconName: 'solar:lock-keyhole-minimalistic-line-duotone',
    route: '/authentication',
    children: [
      {
        displayName: 'Ajout de Poste',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/back/poste/formPoste',
      },
      {
        displayName: 'Liste de Poste',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/back/poste',
      }
    ],
  },

  {
    displayName: "Poste de l'employé ",
    iconName: 'solar:lock-keyhole-minimalistic-line-duotone',
    route: '/authentication',
    children: [
      {
        displayName: 'Modification de poste',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/back/formProfil',
      },
      {
        displayName: 'Liste de profil',
         subItemIcon: true,
        iconName: 'solar:round-alt-arrow-right-line-duotone',
        route: '/authentication/login',
      }
    ],
  },
];