import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Constants } from 'expo';

class RecentChatsScreen extends React.Component {
  static navigationOptions = {
    title: 'Recent',
  }
  render() {
    return <Text>List of recent chats</Text>;
  }
}

class AllContactsScreen extends React.Component {
  static navigationOptions = {
    title: 'All Contacts',
  }
  render() {
    return (
      <View style={styles.container}>
      <Text style={{ width: 200, backgroundColor: 'yellow', height: 20 }}>
        List of all conhtacts
      </Text>
      </View>
    );
  }
}
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  }
  render() {
    return (
      <View style={styles.container}>
      <Text style={{ width: 200, backgroundColor: 'yellow', height: 20 }}>
        Home
      </Text>
      </View>
    );
  }
}

const MainScreenNavigator = StackNavigator(
  {
    Home: {screen: HomeScreen},
    Recent: { screen: RecentChatsScreen },
    All: { screen: AllContactsScreen },
  }
);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MainScreenNavigator style={{ width: Dimensions.get('window').width }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
     paddingTop: Constants.statusBarHeight,
  },
});
