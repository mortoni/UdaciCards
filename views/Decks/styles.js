import { cerulean, white } from '../../utils/colors';
import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    list: {
        flex: 1,
        backgroundColor: white,
    },
    deck: {
        marginTop: 10,
        marginBottom: 15,
        marginLeft: 15,
        marginRight: 15,
        shadowColor: cerulean,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 3,
        shadowOpacity: 1,
    }
})
