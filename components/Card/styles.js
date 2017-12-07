import { cerulean, oxfordBlue, white, blueBayoux } from '../../utils/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    question: {
        marginTop: 10,
        marginBottom: 5,
        fontSize: 22,
        color: oxfordBlue,
        textAlign: 'center',
        fontWeight: '900',
    },
    answer: {
        marginTop: 10,
        marginBottom: 5,
        fontSize: 22,
        color: blueBayoux,
        textAlign: 'center',
    },
    btnShowAnswer: {
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
    textShowAnswer: {
        color: white,
        fontSize: 22,
        textAlign: 'center',
    }
})
