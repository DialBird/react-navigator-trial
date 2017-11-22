import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'プロファイル',
    tabBarLabel: 'プロファイル',
    tabBarIcon: ({ tintColor, focused }) => (
      <Icon
        name={'ios-person'}
        size={26}
        style={{ color: tintColor }}
      />
    ),
    drawerLabel: 'プロファイル',
    drawerIcon: ({ tintColor }) => (
      <Icon
        name={'ios-person'}
        size={20}
        style={{ color: tintColor }}
      />
    )
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile Screen</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});

export default ProfileScreen;
