import { StyleSheet } from 'react-native';
import { SymColors } from '../../assets/constants';
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    containerInfo: {
      flexDirection:'row',
      alignItems: 'center',
      paddingTop: 15,
  },container: {
      flex: 1,
      alignItems: 'center',
      paddingTop: 15,
  },
  dropDown: {
  top: '25%',
  marginLeft: '11.7%',
  marginRight: '11.7%',
  },    
  cards: {
    // here's how to change where the cards are displayed
    flexGrow: 1,
    top: 240,
    marginBottom: 255,
  },
  touchable: {
    color: '#ffffff',
    backgroundColor: '#002f86',
    marginTop: 10,
    width: 300,
    paddingLeft: 10,
  },
  buttonInfo: {
    color: '#ffffff',
    width: '90%',
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 15,
  },
  buttonTitle: {
    paddingTop: 5,
    color: '#ffffff',
    paddingLeft: 10,
    width: '85%',
    fontWeight: 'bold',
    fontSize: 15,
  },

  greeting:{
      paddingTop: 10,
      color: SymColors.black
  }
})