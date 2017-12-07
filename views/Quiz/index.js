import React, { Component } from 'react';
import QuestionCard from '../../components/QuestionCard';
import { styles } from './styles'
import { View, Text } from 'react-native';


class Quiz extends Component {

    constructor(props) {
        super(props)
        this.state = {
            progress: 0,
            correctCount: 0,
            cards: [],
            deck: {}
        }
    }


  componentDidMount(){
      if(this.props.navigation.state.params){
          const { deck } = this.props.navigation.state.params
          this.setState({
              progress: 0,
              correctCount: 0,
              cards: deck.cards,
              deck
          })
      }
  }

  onPressCorrect = () => {
      //TODO
  }

  onPressIncorrect = () => {
      // TODO
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

export default Quiz
