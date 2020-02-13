import {StyleSheet} from 'react-native'

export const deepSquidInk = '#152939'
export const linkUnderlayColor = '#FFF'
export const errorIconColor = '#30d0fe'

const CustomAuthTheme = StyleSheet.create({
    container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-around',
		paddingTop: 20,
		width: '100%',
		backgroundColor: '#000',
  },
  
	section: {
		flex: 1,
		width: '100%',
        padding: 25,
        alignContent: 'center'
	},
	sectionHeader: {
		width: '100%',
		
  },
  
  //Big Sign In to your account text
	sectionHeaderText: {
        color: '#FFAF4F',
        marginTop: 50,
        marginBottom: 20,
        textAlign: 'center',
		fontSize: 20,
		fontWeight: '500',
  },
  
	sectionFooter: {
        width: '100%',
		padding: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 15,
		marginBottom: 20,
  },
  
  //Sign Up and Sign In Links
	sectionFooterLink: {
        fontSize: 14,
        padding: 15,
        backgroundColor: '#695E50',
        borderWidth: 1,
        borderColor: '#695E50',
        marginLeft: 4,
        marginRight: 4,
		color: '#fff',
		// alignItems: 'baseline',
		textAlign: 'center',
	},
	navBar: {
		marginTop: 35,
		padding: 15,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	navButton: {
		marginLeft: 12,
		borderRadius: 4,
	},
	cell: {
		flex: 1,
        width: '50%',
	},
	errorRow: {
		flexDirection: 'row',
        justifyContent: 'center',
        padding: 15,
        backgroundColor: '#ccc',
	},
	errorRowText: {
		marginLeft: 10,
	},
	photo: {
		width: '100%',
	},
	album: {
		width: '100%',
	},
	button: {
        backgroundColor: '#FFAF4F',
        borderRadius: 30,
    
		alignItems: 'center',
		padding: 16,
	},
	buttonDisabled: {
		backgroundColor: '#695E50',
        borderRadius: 30,
    
		alignItems: 'center',
		padding: 16,
	},
	buttonText: {
		color: '#fff',
		fontSize: 14,
		fontWeight: '600',
	},
	formField: {
		marginBottom: 20,
	},
	input: {
		padding: 16,
        // borderWidth: 1,
        borderBottomWidth: 1,
        borderRadius: 0,
        borderColor: '#FFF',
        color: '#000',
        backgroundColor: '#fff',
	},
	inputLabel: {
        marginBottom: 8,
        color: '#FFF',
	},
	phoneContainer: {
		display: 'flex',
		flexDirection: 'row',
        alignItems: 'center',
        
	},
	phoneInput: {
		flex: 2,
		padding: 16,
		borderWidth: 1,
		borderRadius: 3,
        borderColor: '#C4C4C4',
        color: '#fff',
        backgroundColor: '#fff',
	},
	picker: {
		flex: 1,
        height: 44,
        color: '#fff',
        backgroundColor: '#fff'
	},
	pickerItem: {
		height: 44,
	},
});

export {CustomAuthTheme}