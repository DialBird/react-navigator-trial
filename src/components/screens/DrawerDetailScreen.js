import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class DrawerDetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Drawer詳細',
      headerLeft: (
        <Icon
          name={'ios-menu'}
          size={30}
          style={{padding: 10, color: '#007AFF'}}
          onPress={()=>navigation.navigate('DrawerToggle')}
        />
      ),
      drawerLabel: 'Drawer詳細',
      drawerIcon: ({ tintColor }) => (
        <Icon
          name={'ios-person'}
          size={20}
          style={{ color: tintColor }}
        />
      )
    };
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

export default DrawerDetailScreen;
