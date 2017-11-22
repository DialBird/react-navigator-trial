import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'ホーム',
      tabBarLabel: 'ホーム',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          name={'ios-home'}
          size={26}
          style={{ color: tintColor }}
        />
      ),
      headerRight: (
        <Button
          title='Detail'
          onPress={() => navigation.navigate('Details', { user: 'kei' })}
        />
      ),
      headerLeft: (
        <Icon
          name={'ios-menu'}
          size={30}
          style={{padding: 20, color: '#007AFF'}}
          onPress={()=>navigation.navigate('DrawerToggle')}
        />
      ),
      drawerLabel: 'Home',
      drawerIcon: ({ tintColor }) => (
        <Icon
          name={'ios-home'}
          size={20}
          style={{ color: tintColor }}
        />
      )
    }
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Button
          onPress={() => navigate('Details', { user: 'keisuke' })}
          title="Go to details"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default HomeScreen;
