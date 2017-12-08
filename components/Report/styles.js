import { cerulean, oxfordBlue, white, blueBayoux } from '../../utils/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    result: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: blueBayoux,
        fontSize: 22,
    },
    buttons: {
        justifyContent: 'flex-end',
        flex: 1
    },
    button: {
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
})
