import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View,StyleSheet, ScrollView } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'
import { SearchBar } from 'react-native-elements';
import SimpleLineIcons from 'react-native-vector-icons/MaterialIcons';
import { BottomNavigation, ThemeProvider } from 'react-native-material-ui';

export default function HomeScreen(props) {

    const userID = props.extraData.id
    const fullname = "Test"
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

    const renderEntity = ({item, index}) => {
        return (
            <View style={styles.entityContainer}>
                <Text style={styles.entityText}>
                    {item.name}
                </Text>
            </View>
        )
    }


    const onHomePressed = ()=>{
    navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.greeting} >
                {"Hello "}                
                {"\n"}
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder='Search symptoms...'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setSymptomText(text)}
                    value={symptomText}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity style={styles.button} onPress={onAddButtonPress}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
            </View>
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
        </View>
    )
}