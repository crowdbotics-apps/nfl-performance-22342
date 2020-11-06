import { createStackNavigator } from "react-navigation-stack";


import  Trainings1Container  from './trainings1/trainings1.container';
import { Trainings2Container } from './trainings2/trainings2.container';

import Home from ".";

export default Dashboard1BlueprintNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Trainings1: { screen: Trainings1Container },
    Trainings2: { screen: Trainings2Container },
  },
  {
    initialRouteName: "Home"
  }
);
