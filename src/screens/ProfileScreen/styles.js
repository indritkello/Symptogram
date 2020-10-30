import { StyleSheet } from 'react-native';
import { SymColors } from '../../assets/constants';
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
	
    container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
        height: windowHeight,
		backgroundColor: SymColors.secondaryLighter
    },
    title: {
    },
    logo: {
        flex: 1,
        height: 120,
        width: 90,
        alignSelf: "center",
        margin: 0
	},
	welcomeImage: {
        flex: 1,
        height: 120,
        width: 90,
        alignSelf: "center",
		marginTop: 75,
		marginBottom: 75,

	},
	h1: {
		textAlign: 'center',
		fontSize: 32,
		fontWeight: 'normal',
		fontFamily:'RobotoB'
	},
	slogan: {
		fontSize: 18,
		textAlign: 'center',
		borderRadius:15,
		overflow:"hidden",
		marginTop: 5,
		marginBottom: 5,
		marginLeft: 20,
		marginRight: 20,
		padding: 15,
		fontFamily:'RobotoR',
		backgroundColor:SymColors.white,
		width: windowWidth-40
	},
    input: {
        height: 70,
        borderRadius: 20,
        overflow: 'hidden',
		backgroundColor: SymColors.white,
		fontSize: 16,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 45,
        marginRight: 45,
		paddingLeft: 16,
		color:SymColors.black
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
    buttonTitle: {
        color: SymColors.white,
		fontSize: 20,
		textTransform: "uppercase",
		fontFamily:'RobotoB'
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 40
    },
    footerText: {
        fontSize: 18,
		color: SymColors.black,
		fontFamily:'RobotoR'
    },
    footerLink: {
        color: SymColors.red,
        fontWeight: "bold",
		fontSize: 18,
		fontFamily:'RobotoB',
		textDecorationLine: 'underline'
    }
})