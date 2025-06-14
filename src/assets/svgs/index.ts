
import teams from './teams';
import events from './events';
import logout from './logout';
import profile from './profile';
import openEye from './openEye';
import leftArrow from './leftArrow';
import closedEye from './closedEye';
import dashboard from './dashboard';
import inscriptions from './inscriptions';

export const icons = {
    teams,
    events,
    logout,
    profile,
    openEye,
    closedEye,
    leftArrow,
    dashboard,
    inscriptions,
} as const;

export type Icon = keyof typeof icons;