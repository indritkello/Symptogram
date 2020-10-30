import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, Button, TouchableOpacity, View, StyleSheet, ScrollView } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'
import { SearchBar } from 'react-native-elements';
import { SymColors } from '../../assets/constants';
import { LinearGradient } from 'expo-linear-gradient';

export default function DoctorProfileScreen({navigation}) {

    const [symptomText, setSymptomText] = useState('')
    const [entities, setEntities] = useState([])
    const usersRef = firebase.firestore().collection('users')
    const openPatientResult = (id)=>{
        navigation.navigate('PatientIntelligentReport', {id});
    }

    useEffect(() => {
        usersRef
            .onSnapshot(
                querySnapshot => {
                    const newEntities = []
                    querySnapshot.forEach(doc => {
                        const entity = doc.data()
                        newEntities.push(entity)
                    });
                    setEntities(newEntities)
                },
                error => {
                    console.log(error)
                }
            )
    }, [])

    const renderEntity = ({item, index}) => {
        return (
            <View style={styles.entityContainer}>
                <Text style={styles.entityText} onPress={()=>openPatientResult(item.id)}>
                    {item.fullName} 
                </Text>
            </View>
        )
    }



    return (
        <LinearGradient style={styles.container} colors={[SymColors.secondaryLighter, SymColors.secondary]}> 
                <Text style={styles.greeting}>History</Text> 

            { entities && (
                <View style={styles.listContainer}>
                    <FlatList
                        data={entities}
                        renderItem={renderEntity}
                        keyExtractor={(item) => item.name}
                        removeClippedSubviews={true}
                    />
                </View>
            )}           
        </LinearGradient>
    )
}