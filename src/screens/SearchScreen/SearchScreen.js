import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, Button, TouchableOpacity, View, StyleSheet, ScrollView } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'
import { SearchBar } from 'react-native-elements';
import { SymColors } from '../../assets/constants';
import { LinearGradient } from 'expo-linear-gradient';
import Card from './card';

export default function SearchScreen(props) {

    const jsonData = require('../../../assets/knowledge/symptoms.json');
    const userID = props.extraData.id
    const fullname = props.extraData.fullName
    const [symptomText, setSymptomText] = useState('')
    const [entities, setEntities] = useState([])
    const [search, setSearch] = useState('')
    const [searching, setSearching] = useState('')
    const [cards, setCards] = useState('')

    const updateSearch = (text) => {
        setSearching(true);
        setSearch(text);
        if (text.length > 0) {
            if (searching == false && search != '') {
                searching = true;
            }

            // filter out symptoms without the umls characters, changing both names to lowercase
            const symptoms = jsonData.symptoms
            .filter(symptom => symptom.toLowerCase().includes(text.toLowerCase()));

            const uniqueSymptomSearch = []
            symptoms.map(symptom=>{
             if(uniqueSymptomSearch.indexOf(symptom)===-1)
             uniqueSymptomSearch.push(symptom)   
            })

            setCards(uniqueSymptomSearch.map(symptom => 
            (
                <Card
                    key={symptom.substr(0, symptom.toString().indexOf("_"))}
                    text={symptom.substr(symptom.toString().indexOf("_")+1)}
                />
            )
            ));
        }
    }



    const handleSearchCancel = () => {
      setSearching(false)
    }

    const handleSearchClear = () => {
      setSearching(false)
    }

    return (
        <LinearGradient style={styles.container} colors={[SymColors.secondaryLighter, SymColors.secondary]}> 

             <SearchBar
                placeholder="Search symptoms"
                onChangeText={updateSearch}
                value = {search}
                inputStyle={styles.symptomsButton}
                lightTheme
                autoCorrect={false}
                inputContainerStyle={styles.searchContainer}
                onCancel={handleSearchCancel}
                onClear={handleSearchClear}
            />
            
            {searching
            ? 
            (
              <ScrollView showsVerticalScrollIndicator style={styles.cards}>
                {cards}
              </ScrollView>
            )
            : 
            (
              <></>
            )                    }          
        </LinearGradient>
    )
}