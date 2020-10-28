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
		backgroundColor: SymColors.secondaryLighter
    },
    title: {
    },
    logo: {
        flex: 1,
        height: 120,
        width: 90,
        alignSelf: "center",
        margin: 30
	},
	h1: {
		textAlign: 'center',
		fontSize: 42,
		fontWeight: 'normal',
		fontFamily:'RobotoB'
	},
	credentials: {
		fontSize: 16,
		textAlign: 'center',
		marginTop: 20,
		marginBottom: 20,
		paddingLeft: 125,
		paddingRight: 125,
		fontFamily:'RobotoR'
	},
    input: {
        height: 70,
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: SymColors.white,
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
		fontSize: 18,
		textTransform: "uppercase",
		fontFamily:'RobotoB'
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
		color: SymColors.black,
		fontFamily:'RobotoR'
    },
    footerLink: {
        color: SymColors.red,
        fontWeight: "bold",
		fontSize: 16,
		fontFamily:'RobotoB'
    }
})