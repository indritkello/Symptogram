import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, Button, TouchableOpacity, View, StyleSheet, ScrollView } from 'react-native'
import styles from './styles';
import { SearchBar } from 'react-native-elements';
import { SymColors } from '../../assets/constants';
import { LinearGradient } from 'expo-linear-gradient';
import { firebase } from '../../firebase/config'

export default function SearchScreen(props) {

    const jsonData = require('../../../assets/knowledge/symptoms.json');
    const [symptomText, setSymptomText] = useState('')
    const [entities, setEntities] = useState([])
    const [search, setSearch] = useState('')
    const [searching, setSearching] = useState('')
    const [cards, setCards] = useState('')
    const [symptomSelected, setSymptomSelected] = useState('')
    const [symptomKey, setSymptomKey] = useState('')
    const [symptomName, setSymptomName] = useState('')
    const [description, setDescription] = useState('')

    const symptomsRef = firebase.firestore().collection('symptoms')
    const onSymptomSelect = (symptom)=>{
        setSearching(false);
        setSearch(symptom.substr(symptom.toString().indexOf("_")+1));
        setSymptomKey(symptom.substr(0, symptom.toString().indexOf("_")));
        setSymptomName(symptom.substr(symptom.toString().indexOf("_")+1));
        setSymptomSelected(true);
    }
    const saveSymptomDetails = ()=>{
        const timestamp = firebase.firestore.FieldValue.serverTimestamp();
            const data = {
                code: symptomKey,
                name: symptomName,
                patientId: props.extraData.id,
                description: description,
                timestamp: timestamp
            };
            if(!data.description || data.name){
                 alert('Please check your data!'); return;
            }
            symptomsRef
                .add(data)
                .then(_doc => {
                    alert("We saved your symptom! You can review your symptoms in the history window!")
                    setSymptomSelected(false);
                    setSearching(true);
                    setDescription('');
                    setSymptomName('');
                    setSymptomKey('');
                })
                .catch((error) => {
                    alert(error)
                });
    }
    const updateSearch = (text) => {
        setSymptomName('');
        setSearching(true);
        setSearch(text);
        if (text.length > 0) {

            // filter out symptoms without the umls characters, changing both names to lowercase
            const symptoms = jsonData.symptoms
            .filter(symptom => symptom.toLowerCase().includes(text.toLowerCase()));

            const uniqueSymptomSearch = []
            symptoms.map(symptom=>{
             if(uniqueSymptomSearch.indexOf(symptom.substr(0, symptom.toString().indexOf("_")))===-1)
                uniqueSymptomSearch.push(symptom)   
            })

            setCards(uniqueSymptomSearch);
        }
    }

    const updateDescription = (text) => {
        setDescription(text);
    }



    const handleSearchCancel = () => {
      setSearching(true);
    }

    const handleSearchClear = () => {
      setSearching(true);
    }

    return (
        <LinearGradient style={styles.container} colors={[SymColors.secondaryLighter, SymColors.secondary]}> 

             <SearchBar
                placeholder="Search symptoms"
                onChangeText={updateSearch}
                value = {search}
                inputStyle={styles.symptomsButton}
				lightTheme
				containerStyle={styles.searchBackground}
                autoCorrect={false}
                inputContainerStyle={styles.searchContainer}
                onCancel={handleSearchCancel}
                onClear={handleSearchClear}
            />
            
            {searching
            ? 
            (
              <ScrollView showsVerticalScrollIndicator style={styles.cards}>
                {cards.map(symptom => 
            (
                <View style={[styles.generalbox, styles.cardBox1]}>
                <Text style={styles.textStyle} onPress={()=>onSymptomSelect(symptom)}>
                    {symptom.substr(symptom.toString().indexOf("_")+1)}
                </Text>
                </View>
            ))}
              </ScrollView>
            )
            : 
            (
                symptomSelected?(                    
                    <>
                    <TextInput
                    multiline={true}
                    numberOfLines={10}
                    style={{ height:200, backgroundColor:'white', paddingTop: 40, paddingLeft: 40}}
                    onChangeText={updateDescription}
                    value={description}
                    placeholder="Please describe your feeling"/>
                    <TouchableOpacity
                    style={styles.button}
                    onPress={saveSymptomDetails}>
                    <Text style={styles.buttonTitle}>Add Symptom</Text>
                    </TouchableOpacity>
                    </>
                ):
                (<></>)
            )                    
            }          
        </LinearGradient>
    )
}