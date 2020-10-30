import React, { useEffect, useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { firebase } from '../../firebase/config'
import styles from './styles';
import { SymColors } from '../../assets/constants';
import { LinearGradient } from 'expo-linear-gradient';
import WelcomeImg from '../../../assets/images/welcomeImg';
import SymptogramLogo from '../../../assets/images/logo';
const HELSE_API_TEST = "https://helsetankenapi.azurewebsites.net/api/v1/patient/371d827c-5d12-4b99-a167-94d81cfa9421"
export default function ProfileScreen(props) {
    const[userInfo, setUserInfo] = useState('')

    useEffect(() => {
        fetch(HELSE_API_TEST, {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);
         setUserInfo(responseJson)
      })
      .catch((error) => {
         console.error(error);
      });
    }, [])
    const onFooterLinkPress = () => {
        navigation.navigate('Login')
	}
	
	const onGetStarted = () => {
        navigation.navigate('Registration')
    }
    return (
        <LinearGradient style={styles.container} colors={[SymColors.secondaryLighter, SymColors.secondary]}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
				<Text style={styles.slogan}>{props.extraData.fullname}</Text>
                <Text style={styles.slogan}>{props.extraData.email}</Text>
                {userInfo?(
                <>
                <Text style={styles.slogan}>{userInfo.birthDate.substr(0,10)}</Text>
                <Text style={styles.slogan}>{userInfo.livingSituation}</Text>
                <Text></Text>
                <Text></Text>
                <Text h1 style={styles.slogan}>{userInfo.generalPractitioner}</Text>
                </>)
                :(<Text style={styles.slogan}>Family doctor not found</Text>)}
				<TouchableOpacity
                    style={styles.button}
                    onPress={() => onGetStarted()}>
                    <Text style={styles.buttonTitle}>Book a consultation</Text>
                </TouchableOpacity>
            </KeyboardAwareScrollView>
        </LinearGradient>
    )
}