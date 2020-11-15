import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { firebase } from '../../firebase/config'
import styles from './styles';
import { SymColors } from '../../assets/constants';
import { LinearGradient } from 'expo-linear-gradient';
import WelcomeImg from '../../../assets/images/welcomeImg';
import SymptogramLogo from '../../../assets/images/logo';


export default function VerifyDoctorScreen({navigation}) {

    const allowedHerId = '435266';
    const allowedCode = '002233';
    const[herId, setHerId] = useState('')
    const[code, setCode] = useState('')
    const onFooterLinkPress = () => {
        navigation.navigate('Login')
	}
	const onHerIdChange = (text)=>{
        setHerId(text);
    }
	const onCodeChange = (text)=>{
        setCode(text);
    }
	const onGetStarted = () => {
        if((code!=allowedCode) || (herId!=allowedHerId))
        {
            alert("Please check your credentials!");
            return;
        }
        navigation.navigate('DoctorProfile')
    }
    
	
    return (
        <LinearGradient style={styles.container} colors={[SymColors.secondaryLighter, SymColors.secondary]}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
				<SymptogramLogo style={styles.logo} />
                <TextInput
                    style={styles.input}             
                    placeholder="Write your identification number "
                    onChangeText = {(text) => onHerIdChange(text)}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    placeholder="Write your unique code"
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    onChangeText = {(text) => onCodeChange(text)}
                    style={styles.input}                    
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onGetStarted()}>
                    <Text style={styles.buttonTitle}>Verify</Text>
                </TouchableOpacity>
            </KeyboardAwareScrollView>
        </LinearGradient>
    )
}