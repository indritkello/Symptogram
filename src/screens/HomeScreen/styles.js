import { StyleSheet } from 'react-native';
import { SymColors } from '../../assets/constants';
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
	containerInfo: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingTop: 15,
	},
	container: {
		flex: 1,
		alignItems: 'center',
		paddingTop: 15,
	},
	logo: {
		top: '20%',
	},
	dropDown: {
		top: '35%',
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
		backgroundColor: SymColors.white,
		borderRadius: 10,
		marginTop: 10,
		width: 300,
		paddingLeft: 10,
		paddingTop: 10,
		paddingBottom: 10
	},
	buttonInfo: {
		color: SymColors.black,
		width: '90%',
		paddingLeft: 10,
		paddingTop: 10,
		paddingBottom: 15,
	},
	buttonTitle: {
		color: SymColors.black,
		paddingLeft: 10,
		width: '85%',
		fontWeight: 'bold',
		fontSize: 20,
	},

	greeting: {
		paddingTop: 10,
		color: SymColors.black
	}
})