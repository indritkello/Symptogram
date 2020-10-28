import React from 'react';
import { BottomNavigation } from 'react-native-material-ui';
import { firebase } from '../firebase/config'

export default class BottomNav extends BottomNavigation {
  constructor(props) {
    super(props);
    this.state = {
      active: '',
    };
  }
  render() {
    const onLogoutPress = () => {
        firebase.auth().signOut();
        navigation.navigate('Login')
    }
    return (
      <BottomNavigation>
        <BottomNavigation.Action
          key="home"
          icon="home"
          label="Home"
          onPress={() => this.setState({ active: 'home' })}
        />

        <BottomNavigation.Action
          key="list"
          icon="list"
          label="List"
          onPress={() => this.setState({ active: 'list' })}
        />

        <BottomNavigation.Action
          key="list"
          icon="list"
          label="List"
          onPress={onLogoutPress}
        />

      </BottomNavigation>
    );
  }
}
