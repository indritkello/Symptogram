import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppLoading } from 'expo';
import { useFonts, Roboto_100Thin, Roboto_300Light, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import {decode, encode} from 'base-64'
import SimpleLineIcons from 'react-native-vector-icons/MaterialIcons';
import { BottomNavigation, ThemeProvider } from 'react-native-material-ui';

export default function BottomScreen({navigation}) {
  const onSearchPress = () => {
    navigation.navigate('Search')
  }
  const onLogoutPress = () => {
    navigation.navigate('Login')
  }
	return (
		 <BottomNavigation>
          <BottomNavigation.Action
            key="home"
            iconSet="SimpleLineIcons"
            icon={<SimpleLineIcons name="face" size={25} color="red" />}
            label="You"
          />
          <BottomNavigation.Action
            key="search"
            iconSet="SimpleLineIcons"
            icon={<SimpleLineIcons name="search" size={25} color="red" />}
            label="Search"
            onPress={onSearchPress}
          />

          <BottomNavigation.Action
            key="list"
            icon={<SimpleLineIcons name="list" size={25} />}
            label="Symptoms"
          />
		      <BottomNavigation.Action
            key="logout"
            icon={<SimpleLineIcons name="trending-flat" size={25} />}
            label="Logout"
            onPress={onLogoutPress}
            />
        </BottomNavigation>
  )
}
