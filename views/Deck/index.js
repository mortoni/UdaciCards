import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Container from '../../components/Container';
import { styles } from './styles'

import DeckDetails from '../../components/DeckDetails';


const Deck = (props) => {

    const { deck } = props.navigation.state.params

    function addCard() {
        props.navigation.navigate('NewCard', { deck });
    }

    function startQuiz() {

    }

    return(
        <Container>
            <View style={styles.card}>
                <DeckDetails { ...deck }/>
            </View>

            <View style={styles.buttons}>
                <TouchableOpacity style={styles.buttonAddCard}
                                  onPress={addCard}>
                    <Text style={styles.submitBtnTextQuiz}>Add Card</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonStartQuiz}
                                  onPress={startQuiz}>
                    <Text style={styles.submitBtnTextAdd}>Start Quiz</Text>
                </TouchableOpacity>
            </View>
        </Container>
    )
}

export default Deck
