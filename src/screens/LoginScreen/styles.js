import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../assets/constants';
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.secondaryLighter
    },
    title: {
    },
    // logo: {
    //     flex: 1,
    //     height: 120,
    //     width: 90,
    //     alignSelf: "center",
    //     margin: 30
	// },
	h1: {
		textAlign: 'center',
		fontSize: 42,
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
        backgroundColor: Colors.white,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16
    },
    button: {
        backgroundColor: Colors.primary,
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
        color: Colors.white,
		fontSize: 24,
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
        color: Colors.black
    },
    footerLink: {
        color: Colors.red,
        fontWeight: "bold",
        fontSize: 16
    }
})