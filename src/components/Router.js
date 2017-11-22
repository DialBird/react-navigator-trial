/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import {
  HomeScreen,
  DetailsScreen,
  ProfileScreen,
  ConfigScreen,
  DrawerDetailScreen
} from './screens';

// 個々のページにヘッダーをつける意味も兼ねて、全てのページをStackNavigatorに入れる
const HomeScreenNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  Details: { screen: DetailsScreen }
}, {
  mode: 'modal'
});
const ProfileScreenNavigator = StackNavigator({
  Profile: { screen: ProfileScreen }
});
const ConfigScreenNavigator = StackNavigator({
  Config: { screen: ConfigScreen }
});
const DrawerDetailNavigator = StackNavigator({
  DrawDetails: { screen: DrawerDetailScreen }
});

// そのうちのいくつかはTabNavigator内で使うため、登録する
const MainScreenNavigator = TabNavigator({
  Home: { screen: HomeScreenNavigator },
  Profile: { screen: ProfileScreenNavigator },
  Config: { screen: ConfigScreenNavigator }
});

// 全体を移動するDrawerは一番上
const Router = DrawerNavigator({
  Main: { screen: MainScreenNavigator },
  DrawDetails: { screen: DrawerDetailNavigator }
});

export default Router;
