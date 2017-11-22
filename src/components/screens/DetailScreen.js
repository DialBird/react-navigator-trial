import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class DetailsScreen extends React.Component {
  static navigationOptions = { title: 'Details' };

  render() {
    const { navigate, state } = this.props.navigation;
    const { user } = state.params;
    return (
      <View style={styles.container}>
        <Text>Details Screen</Text>
        <Text>{user}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default DetailsScreen;
