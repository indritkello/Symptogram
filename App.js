import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { WelcomeScreen, LoginScreen, HomeScreen, RegistrationScreen } from './src/screens'
import { AppLoading } from 'expo';
import { useFonts, Roboto_100Thin, Roboto_300Light, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import {decode, encode} from 'base-64'
import { firebase } from './src/firebase/config'
import SimpleLineIcons from 'react-native-vector-icons/MaterialIcons';
import { BottomNavigation, ThemeProvider } from 'react-native-material-ui';
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator();

export default function App() {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
       
            setLoading(false)
            setUser(user)
          
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
      
      { user ?
		<BottomNavigation>
          <BottomNavigation.Action
            key="home"
            iconSet="SimpleLineIcons"
            icon={<SimpleLineIcons name="home" size={25} color="red" />}
            label="Home"
            onPress={() => this.changeReset('Home')}
          />

          <BottomNavigation.Action
            key="list"
            icon={<SimpleLineIcons name="list" size={25} />}
            label="Symptoms"
            onPress={() => this.changeReset('List')}
          />
		<BottomNavigation.Action
            key="logout"
            icon={<SimpleLineIcons name="trending-flat" size={25} />}
            label="Logout"
            onPress={() =>  this.changeReset('Login')}
          />
        </BottomNavigation> :<></>
        }
    </NavigationContainer>
  );
}