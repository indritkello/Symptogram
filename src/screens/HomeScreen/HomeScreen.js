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
import DropButton from './drop-down';

export default function HomeScreen(props){

    const userID = props.extraData.id
    const fullname = props.extraData.fullName
const faq = [
        {
          heading: 'About Symptogram',
          info: 'Symptogram is a mobile app that keeps track of your symptoms and allows your family doctor to monitor your condition, catches disease symptoms in time, and improves the quality of his recommendations.'
               ,
          open: false,
        }
      ];

      const dropDowns = faq.map((q, index) => (
        <DropButton
          key={index}
          heading={q.heading}
          info={q.info}
          open={false}
          style={styles}
          iconcolor="#FFFFFF"
          iconsize={20}
        />
      ));
      
    return (
        <LinearGradient style={styles.container} colors={[SymColors.secondaryLighter, SymColors.secondary]}> 
                <Text style={styles.greeting}>
                {"Hello "}                
                {fullname}
                </Text>      

                <ScrollView style={styles.dropDown}>
                {/* <Title heading="" /> */}
                {dropDowns}
              </ScrollView>          
        </LinearGradient>
    )
}

	