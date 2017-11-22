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
import Icon from 'react-native-vector-icons/Ionicons';

// 個々のページにヘッダーをつける意味も兼ねて、StackNavigatorに入れる
const DrawerDetailNavigator = StackNavigator({
  DrawDetails: { screen: DrawerDetailScreen }
});

// そのうちのいくつかはTabNavigator内で使うため、登録する
const MainScreenNavigator = TabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'ホーム',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name={'ios-home'}
          size={30}
          style={{ color: tintColor }}
        />
      )
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: 'プロファイル',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name={'ios-person'}
          size={30}
          style={{ color: tintColor }}
        />
      )
    }
  },
  Config: {
    screen: ConfigScreen,
    navigationOptions: {
      tabBarLabel: '設定',
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name={'ios-cog'}
          size={30}
          style={{ color: tintColor }}
        />
      )
    }
  }
});

const HomeScreenNavigator = StackNavigator({
  Home: { screen: MainScreenNavigator },
  Details: { screen: DetailsScreen }
});

// 全体を移動するDrawerは一番上
const Router = DrawerNavigator({
  Main: {
    screen: HomeScreenNavigator,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
        <Icon
          name={'ios-home'}
          size={30}
          style={{ color: tintColor }}
        />
      )
    }
  },
  DrawDetails: {
    screen: DrawerDetailNavigator,
    navigationOptions: {
      drawerLabel: 'Drawer詳細',
      drawerIcon: ({ tintColor }) => (
        <Icon
          name={'ios-person'}
          size={30}
          style={{ color: tintColor }}
        />
      )
    }
  }
});

export default Router;
