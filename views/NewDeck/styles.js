import { cerulean, white, blueBayoux, eggBlue } from '../../utils/colors';
import { StyleSheet } from 'react-native';

export const styles = {
    container: {
        flex: 1,
        margin: 10
    },
    textTitle: {
        color: blueBayoux,
        fontSize: 22,
        textAlign: 'center',
        marginTop: 25
    },
    form: {
        justifyContent: 'center',
        flex: 1
    },
    textBtn: {
        fontSize: 20,
        color: 'white',
    },
    buttons: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    buttonCreate: {
        backgroundColor: white,
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        height: 45,
        borderRadius: 2,
        borderColor: cerulean,
        borderWidth: 2,
        borderRadius: 10,
        marginLeft: 35,
        marginRight: 35,
        alignItems: 'center',
    },
    textCreate: {
        color: blueBayoux,
        fontSize: 22,
        textAlign: 'center',
    },
}
