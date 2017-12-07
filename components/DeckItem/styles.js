import { cerulean, oxfordBlue, white } from '../../utils/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: oxfordBlue,
    },
    txtTitle: {
        marginTop: 10,
        marginBottom: 5,
        fontSize: 22,
        color: white,
        textAlign: 'center',
    },
    txtCount: {
        marginTop: 5,
        marginBottom: 10,
        fontSize: 13,
        color: cerulean,
        fontWeight: '900',
        textAlign: 'center',
    }
})
