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
        paddingTop: 20,
		color: SymColors.black,
		fontFamily:'RobotoB',
		fontSize:22,
		textAlign:'center',
		marginTop:10,
		marginBottom:10
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
    button: {
        height: 47,
        borderRadius: 5,
        backgroundColor: '#788eec',
        width: 80,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonText: {
        color: SymColors.white,
        fontSize: 16
    },
    listContainer: {
		// marginTop: 20,
		top: 40,
		// padding: 20,
		margin: 10,
		marginBottom: 20,
		bottom: 20,
    },
    entityContainer: {
		marginTop: 10,
		marginBottom: 10,
		borderRadius: 25,
		backgroundColor: SymColors.white,
        // borderBottomColor: '#cccccc',
        // borderBottomWidth: 1,
        padding: 15
    },
    entityText: {
        fontSize: 20,
		color: SymColors.black,
		fontFamily:'RobotoB',
		padding: 10,
		fontSize: 20
    }
})