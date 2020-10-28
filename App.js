import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { WelcomeScreen, LoginScreen, HomeScreen, RegistrationScreen } from './src/screens'
import { AppLoading } from 'expo';
import { useFonts, Roboto_100Thin, Roboto_300Light, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import {decode, encode} from 'base-64'
import { firebase } from './src/firebase/config'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator();

export default function App() {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)


  if (loading) {	
      setLoading(false)
  }

  useEffect(() => {
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            // setLoading(false)
            setUser(userData)
          })
          .catch((error) => {
            setLoading(false)
          });
      } else {
        setLoading(false)
      }
    });
  }, []);

  const [fontsLoaded] = useFonts({
	RobotoT: Roboto_100Thin,
	RobotoL: Roboto_300Light,
	RobotoR: Roboto_400Regular,
	RobotoM: Roboto_500Medium,
	RobotoB: Roboto_700Bold,
	Inter_400Regular,
	Inter_500Medium,
	Inter_600SemiBold,
	Inter_700Bold,
  });

  if (!fontsLoaded) {
	return <AppLoading />;
  }

  return (
    <NavigationContainer
	screenOptions={{
		headerShown: false
	  }}
	>
      <Stack.Navigator>
        { user ? (
          <Stack.Screen name="Home">
            {props => <HomeScreen {...props} extraData={user} />}
          </Stack.Screen>
        ) : (
          <>
		  	<Stack.Screen options={{headerTransparent: true, headerTitle: false, headerBackTitle: false}} name="Welcome" component={WelcomeScreen} />
            <Stack.Screen options={{headerTransparent: true, headerTitle: false, headerBackTitle: false}} name="Registration" component={RegistrationScreen} />
            <Stack.Screen options={{headerTransparent: true, headerTitle: false, headerBackTitle: false}} name="Login" component={LoginScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}