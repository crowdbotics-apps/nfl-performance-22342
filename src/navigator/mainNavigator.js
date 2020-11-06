import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Messaging21168456Navigator from '../features/Messaging21168456/navigator';
import BlankScreen18168451Navigator from '../features/BlankScreen18168451/navigator';
import ArticleList168447Navigator from '../features/ArticleList168447/navigator';
import Maps168434Navigator from '../features/Maps168434/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Messaging21168456: { screen: Messaging21168456Navigator },
BlankScreen18168451: { screen: BlankScreen18168451Navigator },
ArticleList168447: { screen: ArticleList168447Navigator },
Maps168434: { screen: Maps168434Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
