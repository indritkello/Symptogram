import { StyleSheet } from 'react-native';
import { SymColors } from '../../assets/constants';
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
  flex: 1,
	alignItems: 'center',
	backgroundColor: SymColors.white
  },
  greeting:{
  paddingTop: 10,
  color: SymColors.black
  },
  formContainer: {
        flexDirection: 'row',
        height: windowHeight,
        marginTop: 40,
        marginBottom: 20,
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 30,
        paddingRight: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
	symptomsButton: {
		height: 70,
		width: windowWidth-45,
        borderRadius: 20,
        overflow: 'hidden',
		backgroundColor: SymColors.white,
		fontSize: 16,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 45,
        marginRight: 45,
		padding: 20,
		color:SymColors.black
    },
    buttonTitle: {
        color: SymColors.white,
		fontSize: 20,
		textTransform: "uppercase",
		fontFamily:'RobotoB'
    },
    button: {
        backgroundColor: SymColors.primary,
        marginLeft: 65,
        marginRight: 65,
        marginTop: 20,
        height: 50,
		    borderRadius: 20,
		    width: windowWidth-130,
        alignItems: "center",
		    justifyContent: 'center',
		    shadowColor: SymColors.primary,
		    shadowOffset: { width: 0, height: 1 },
		    shadowOpacity: 0.5,
		    shadowRadius: 6, 
		    elevation: 5
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    },
    listContainer: {
        marginTop: 20,
        padding: 20,
    },
    entityContainer: {
        marginTop: 16,
        borderBottomColor: '#cccccc',
        borderBottomWidth: 1,
        paddingBottom: 16
    },
    entityText: {
        fontSize: 20,
        color: '#333333'
    },container: {
    flexGrow: 1,
  },
  barContainer: {
    top: '30%',
    backgroundColor: 'white',
    borderRadius: 12,
    width: 300,
    top: 225,
    marginLeft: '11.7%',
    marginRight: '11.7%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 1,
    padding: 2,
  },
  input: {
    color: 'black',
    fontSize: 13,
  },
  searchContainer: {
    backgroundColor: 'white',
  },
  dropDown: {
    top: '35%',
    marginLeft: '11.7%',
    marginRight: '11.7%',
  },
  cards: {
    // here's how to change where the cards are displayed
    flexGrow: 1,
    top: 70,
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
    width: '85%',
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 15,
  },
  textStyle: {
    paddingLeft: 14,
    paddingRight: 14,
    paddingBottom: 19,
    paddingTop: 19,
    fontSize: 13,
  },

  generalbox: {
    width: '82%',
    marginTop: 13,
    marginLeft: 34,
    marginRight: 34,
    borderLeftWidth: 5,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 1,
  },

  cardBox1: { // Most urgent
    borderLeftColor: '#FC0F1B',
  },
  cardBox2: {
    borderLeftColor: '#FDBF2E',
  },
  cardBox3: {
    borderLeftColor: '#1EB1ED',

  },
});
