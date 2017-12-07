import React, { Component } from 'react';
import QuestionCard from '../../components/QuestionCard';
import { styles } from './styles'
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class Quiz extends Component {

    constructor(props) {
        super(props)
        this.state = {
            progress: 0,
            correctCount: 0,
            cards: props.cards,
            deck: props.deck,
        }
    }

    onPressCorrect = () => {
        const progress = this.state.progress + 1
        const correctCount = this.state.correctCount + 1

        this.setState({
            progress,
            correctCount
        })
    }

  onPressIncorrect = () => {
      const progress = this.state.progress + 1

      this.setState({
          progress
      })
  }

  render() {
      const { progress, deck, cards, correctCount } = this.state;
      const total = cards.length;
      if (total === 0) return <View><Text>Empty Deck</Text></View>;

      const isComplete = progress === total;
      const card = isComplete ? {} : cards[progress];

      return (
          <View style={styles.container}>
              <QuestionCard card={ card }
                            progress={ progress + 1 }
                            total={ total }
                            onPressCorrect={ this.onPressCorrect }
                            onPressIncorrect={ this.onPressIncorrect } />
          </View>
      )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addCardToDeck: (card, deck) => dispatch(addCardToDeck(card, deck)),
})

const mapStateToProps = (state, { navigation }) => {
  let { id } = navigation.state.params.deck;
  const deck = state.deck.refById[id];
  const cards = deck.cards.map(cid => state.card.refById[cid]);
  return { deck, cards };
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
