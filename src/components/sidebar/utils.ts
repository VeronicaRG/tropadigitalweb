import { Icon }  from '@/assets/svgs'

export type IconName = Icon;

export const MENU_ITEMS = {
  'DASHBOARD': { name: 'Dashboard', path: '/dashboard', icon:'dashboard' as IconName},
  'EVENTOS': { name: 'Eventos', path: '/events', icon:'events'  as IconName},
  'EQUIPES': { name: 'Equipes', path: '/teams', icon:'teams'   as IconName},
  'INCRICOES': { name: 'Inscrições', path: '/inscriptions', icon:'inscriptions' as IconName},        
} 