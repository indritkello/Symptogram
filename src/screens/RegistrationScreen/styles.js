import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { SymColors } from '../../assets/constants';
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        flex: 1,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center',
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
		fontSize: 28,
		fontWeight: 'normal'
	},
	credentials: {
		textAlign: 'center',
		marginTop: 20,
		marginBottom: 20,
		paddingLeft: 125,
		paddingRight: 125,
	},
    input: {
        height: 70,
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: SymColors.white,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    button: {
        backgroundColor: SymColors.primary,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 20,
        height: 70,
		borderRadius: 20,
		width: windowWidth-100,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: SymColors.white,
		fontSize: 18,
		textTransform: "uppercase",
        fontWeight: "bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: SymColors.black
    },
    footerLink: {
        color: SymColors.red,
        fontWeight: "bold",
        fontSize: 16
    }
})