import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import { HomeScreen, DetailsScreen, ProfileScreen, ConfigScreen } from './index';

const Drawer = DrawerNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
  Config: { screen: ConfigScreen },
  Details: { screen: DetailsScreen }
});

export default Drawer;
