import { cerulean, white, blueBayoux, eggBlue } from '../../utils/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: eggBlue,
    },
    card: {
        flex: 2,
        justifyContent: 'center',
    },
    buttons: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 25,
    },
    buttonStartQuiz: {
        backgroundColor: blueBayoux,
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
    buttonAddCard: {
        marginBottom: 10,
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
    submitBtnTextAdd: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
    },
    submitBtnTextQuiz: {
        color: blueBayoux,
        fontSize: 22,
        textAlign: 'center',
    },



})
