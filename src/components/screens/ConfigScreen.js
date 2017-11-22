import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class ConfigScreen extends React.Component {
  static navigationOptions = {
    title: '設定',
    tabBarLabel: '設定',
    tabBarIcon: ({ tintColor, focused }) => (
      <Icon
        name={'ios-cog'}
        size={26}
        style={{ color: tintColor }}
      />
    ),
    drawerLabel: '設定',
    drawerIcon: ({ tintColor }) => (
      <Icon
        name={'ios-cog'}
        size={20}
        style={{ color: tintColor }}
      />
    )
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Config Screen</Text>
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

export default ConfigScreen;
