import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { firebase } from '../../firebase/config'
import styles from './styles';
import { SymColors } from '../../assets/constants';
import { LinearGradient } from 'expo-linear-gradient';
import WelcomeImg from '../../../assets/images/welcomeImg';
import SymptogramLogo from '../../../assets/images/logo';

export default function WelcomeScreen({navigation}) {

    const onFooterLinkPress = () => {
        navigation.navigate('Login')
	}
	
	const onGetStarted = () => {
        navigation.navigate('Registration')
    }
	
    return (
        <LinearGradient style={styles.container} colors={[SymColors.secondaryLighter, SymColors.secondary]}>
            <KeyboardAwareScrollView keyboardShouldPersistTaps="always">
				<SymptogramLogo style={styles.logo} />
				<Text style={styles.slogan}>Clinical decision support tool that keeps track of user symptoms and saves time for family doctors</Text>
				<WelcomeImg style={styles.welcomeImage} />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => onGetStarted()}>
                    <Text style={styles.buttonTitle}>Get started</Text>
                </TouchableOpacity>
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>Already have an account? <Text onPress={onFooterLinkPress} style={styles.footerLink}>Sign in</Text></Text>
                </View>
            </KeyboardAwareScrollView>
        </LinearGradient>
    )
}