import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, Button, TouchableOpacity, View, StyleSheet, ScrollView } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'
import { SearchBar } from 'react-native-elements';
import SimpleLineIcons from 'react-native-vector-icons/MaterialIcons';
import { BottomNavigation, ThemeProvider } from 'react-native-material-ui';
import { SymColors } from '../../assets/constants';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationActions } from '@react-navigation/native'

export default function HomeScreen(props){

    const userID = props.extraData.id
    const fullname = props.extraData.fullName

    return (
        <LinearGradient style={styles.container} colors={[SymColors.secondaryLighter, SymColors.secondary]}> 
                <Text style={styles.greeting}>
                {"Hello "}                
                {fullname}
                </Text>                
        </LinearGradient>
    )
}

	