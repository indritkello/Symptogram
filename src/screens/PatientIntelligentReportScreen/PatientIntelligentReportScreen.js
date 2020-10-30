import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, Button, TouchableOpacity, View, StyleSheet, ScrollView } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'
import { SearchBar } from 'react-native-elements';
import { SymColors } from '../../assets/constants';
import { LinearGradient } from 'expo-linear-gradient';

export default function PatientIntelligentReportScreen({route}) {

    const{id} = route.params
    const [entities, setEntities] = useState([])
    const [results, setResults] = useState([])
    const symptomsRef = firebase.firestore().collection('symptoms')
    const jsonData = require('../../../assets/knowledge/diseases.json');


    useEffect(() => {
        symptomsRef
            .where("patientId", "==", id)
            .orderBy('timestamp', 'desc')
            .onSnapshot(
                querySnapshot => {
                    const newEntities = []
                    querySnapshot.forEach(doc => {
                        const entity = doc.data()
                        newEntities.push(entity)
                    });
                    setEntities(newEntities)
                    getIntelligentResult()
                },
                error => {
                    console.log(error)
                }
            )
    }, [])

    const renderSymptom = ({item, index}) => {
        return (
            <View style={styles.entityContainer}>
                <Text style={styles.entityText} onPress={()=>{alert(new Date(item.timestamp.seconds * 1000).toLocaleDateString("en-US"))}}>
                    {item.code} {item.name}  {"\n"} {new Date(item.timestamp.seconds * 1000).toLocaleTimeString("en-US")}
                </Text>
            </View>
        )
    }

    const renderResult = ({item, index}) => {
        return (
            <View style={styles.entityContainer}>
                <Text style={styles.entityText} >
                    {item}
                </Text>
            </View>
        )
    }

    const getIntelligentResult = ()=>{
        const resultsX=[];
        
        entities.map(symptom=>{
            const _diseases = jsonData.diseases
            .map(disease => {
            const _symptoms = disease.Symptoms.filter(x => (x && x.toLowerCase().includes(symptom.code.toLowerCase())));
            if(_symptoms.length>0){
            resultsX.push(disease);
            }
                
            });
            });
        const stringResults = [];
        resultsX.filter(result=>{
            if(result.Correlation>100)
            stringResults.push(result.Name + "-> Strength = "+ result.Correlation);
        });
        setResults(stringResults);
    }


    const onHomePressed = ()=>{
    navigation.navigate('Home');
    }

    return (
        <LinearGradient style={styles.container} colors={[SymColors.secondaryLighter, SymColors.secondary]}> 
                <Text style={styles.greeting}>Report</Text> 

            { entities && (
                <View style={styles.listContainer}>
                    <FlatList
                        data={entities}
                        renderItem={renderSymptom}
                        keyExtractor={(item) => item.name}
                        removeClippedSubviews={true}
                    />
                <Text style={styles.greeting}>Our results</Text>
                <FlatList
                        data={results}
                        renderItem={renderResult}
                        keyExtractor={(item) => item.Name}
                        removeClippedSubviews={true}
                    />
                </View>
            )}           
        </LinearGradient>
    )
}