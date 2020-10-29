import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { WelcomeScreen, LoginScreen, HomeScreen, RegistrationScreen, SearchScreen, BottomScreen } from './src/screens'
import { AppLoading } from 'expo';
import { useFonts, Roboto_100Thin, Roboto_300Light, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import {decode, encode} from 'base-64'
import { firebase } from './src/firebase/config'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }


const Tab = createBottomTabNavigator();

function BottomTabs({ route }) {
  const { user } = route.params;
	return (    
		<Tab.Navigator>
    { user ? (
      <>
			<Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search">
      {props=> <SearchScreen  {...props} extraData={user} /> }      
      </Tab.Screen>
      <Tab.Screen name="Logout" component={LoginScreen} />
      </>
      ):(<></>)}
		</Tab.Navigator>
    
	);
}

const Stack = createStackNavigator();

export default function App() {
  
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

    useEffect(() => {
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            setLoading(false)
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
  });

  if (!fontsLoaded) {
	return <AppLoading />;
  }

	return (
		<NavigationContainer>
    { user ? (
			<Stack.Navigator initialRouteName="Tabs">
      	<Stack.Screen name="Tabs" component={BottomTabs} initialParams={{ user:user }}/>
			</Stack.Navigator>):
      (<>
      <Stack.Navigator>
            <Stack.Screen options={{headerTransparent: true, headerTitle: false, headerBackTitle: false}} name="Welcome" component={WelcomeScreen} />
            <Stack.Screen options={{headerTransparent: true, headerTitle: false, headerBackTitle: false}} name="Registration" component={RegistrationScreen} />
            <Stack.Screen options={{headerTransparent: true, headerTitle: false, headerBackTitle: false}} name="Login" component={LoginScreen} />
            <Stack.Screen options={{headerTransparent: true, headerTitle: false, headerBackTitle: false}} name="Search" component={SearchScreen} />            
            </Stack.Navigator>
      </>
      )
      }
		</NavigationContainer>
	);
}
