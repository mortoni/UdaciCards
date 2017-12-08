import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles'
import Container from '../../components/Container'

const Report = ({score, reset, goBack}) => {
    return(
        <Container>
            <View style={ styles.result }>
                <Text style={ styles.text }>Well done!</Text>
                <Text style={ styles.text }>Your score is: { score } %</Text>
            </View>

            <View style={ styles.buttons }>
                <TouchableOpacity style={ styles.button } onPress={ reset }>
                    <Text style={ styles.btnText }>Retake Quiz</Text>
                </TouchableOpacity>

                <TouchableOpacity style={ styles.button } onPress={ goBack }>
                    <Text style={ styles.btnText }>Back to the deck</Text>
                </TouchableOpacity>
            </View>
        </Container>
    )
}

export default Report
