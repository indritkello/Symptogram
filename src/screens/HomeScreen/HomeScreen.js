import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, Button, TouchableOpacity, View, StyleSheet, ScrollView } from 'react-native'
import styles from './styles';
import { firebase } from '../../firebase/config'
import { SearchBar } from 'react-native-elements';
import SimpleLineIcons from 'react-native-vector-icons/MaterialIcons';
import { BottomNavigation, ThemeProvider } from 'react-native-material-ui';
import { SymColors } from '../../assets/constants';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen(props) {

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
        <LinearGradient style={styles.container} colors={[SymColors.secondaryLighter, SymColors.secondary]}> 
                {/* <Text style={styles.greeting}>
                {"Hello "}                
                {fullname}
                </Text> */}
				{/* <Text>Clinical decision support tool that keeps track of user symptoms and saves time for family doctors</Text> */}
                <TextInput
                    style={styles.symptomsButton}
                    placeholder='Search symptoms...'
                    placeholderTextColor={SymColors.black}
                    onChangeText={(text) => setSymptomText(text)}
                    value={symptomText}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
				{/* <Button
					title={fullname}
					style={styles.symptomsButton}
					onPress={() => alert('Simple Button pressed')}
                /> */}
                {/* <TouchableOpacity style={styles.button} onPress={onAddButtonPress}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity> */}
            
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