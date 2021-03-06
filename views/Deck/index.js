import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Container from '../../components/Container';
import { styles } from './styles'
import { connect } from 'react-redux';
import DeckDetails from '../../components/DeckDetails';
import NewQuestion from '../NewQuestion';
import Quiz from '../Quiz';

const Deck = (props) => {
    const { deck } = props

    function addCard() {
        props.navigation.navigate('NewQuestion', { deck });
    }

    function startQuiz() {
        props.navigation.navigate('Quiz', { deck });
    }

    return(
        <Container>
            <View style={styles.card}>
                <DeckDetails { ...deck }/>
            </View>

            <View style={styles.buttons}>
                <TouchableOpacity style={styles.buttonAddCard}
                                  onPress={addCard}>
                    <Text style={styles.submitBtnTextQuiz}>Add Question</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonStartQuiz}
                                  disabled={deck.cards.length === 0}
                                  onPress={startQuiz}>
                    <Text style={styles.submitBtnTextAdd}>Start Quiz</Text>
                </TouchableOpacity>
            </View>
        </Container>
    )
}

const mapStateToProps = (state, { navigation }) => {
    let { id } = navigation.state.params.deck;
    if (id === 'latest') id = state.deck.lastId;
    const deck = state.deck.refById[id];
    return { deck };
}

export default connect(mapStateToProps)(Deck);
