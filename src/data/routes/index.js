import Landing from '../../pages/Landing';
import About from '../../pages/About';
import Story from '../../pages/About/Story';
import Career from '../../pages/About/Career';
import Work from '../../pages/Work';
import ApplyBoard from '../../pages/Work/ApplyBoard';
import UWBlueprint from '../../pages/Work/UWBlueprint';
import OculysHealthInformatics from '../../pages/Work/OculysHealthInformatics';
import FGFBrands from '../../pages/Work/FGFBrands';
import Serenity from '../../pages/Work/Serenity';
import Huddle from '../../pages/Work/Huddle';
import Authentication from '../../pages/Work/Authentication';
import Weatherly from '../../pages/Work/Weatherly';

const routes = [
  {
    path: '/',
    component: Landing,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/about/story',
    component: Story,
  },
  {
    path: '/about/career',
    component: Career,
  },
  {
    path: '/work',
    component: Work,
  },
  {
    path: '/work/applyboard',
    component: ApplyBoard,
  },
  {
    path: '/work/uwblueprint',
    component: UWBlueprint,
  },
  {
    path: '/work/oculyshealthinformatics',
    component: OculysHealthInformatics,
  },
  {
    path: '/work/fgfbrands',
    component: FGFBrands,
  },
  {
    path: '/work/serenity',
    component: Serenity,
  },
  {
    path: '/work/huddle',
    component: Huddle,
  },
  {
    path: '/work/authentication',
    component: Authentication,
  },
  {
    path: '/work/weatherly',
    component: Weatherly,
  },
];

export default routes;
