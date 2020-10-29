import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, Button, TouchableOpacity, View, StyleSheet, ScrollView } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'
import { SearchBar } from 'react-native-elements';
import { SymColors } from '../../assets/constants';
import { LinearGradient } from 'expo-linear-gradient';

export default function AddSymptomScreen(props) {

    const userID = props.extraData.id
    const fullname = props.extraData.fullName
    const [symptomText, setSymptomText] = useState('')
    const [entities, setEntities] = useState([])
    const symptomsRef = firebase.firestore().collection('symptoms')

    useEffect(() => {
        symptomsRef
            .where("patientId", "==", userID)
            .orderBy('timestamp', 'desc')
            .onSnapshot(
                querySnapshot => {
                    const newEntities = []
                    querySnapshot.forEach(doc => {
                        const entity = doc.data()
                        alert(1)
                        newEntities.push(entity)
                    });
                    setEntities(newEntities)
                },
                error => {
                    console.log(error)
                }
            )
    }, [])

    const onAddButtonPress = () => {
        if (symptomText && symptomText.length > 0) {
            const timestamp = firebase.firestore.FieldValue.serverTimestamp();
            const data = {
                name: symptomText,
                patientId: userID,
                timestamp: timestamp
            };
            alert(data)
            symptomsRef
                .add(data)
                .then(_doc => {
                    setSymptomText('')
                    Keyboard.dismiss()
                })
                .catch((error) => {
                    alert(error)
                });
        }
    }

    return (
        <LinearGradient style={styles.container} colors={[SymColors.secondaryLighter, SymColors.secondary]}>
        <></>
        </LinearGradient>
    )
}