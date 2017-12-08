import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles'

class Card extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showAnswer: false
        }
    }

    componentWillReceiveProps() {
        this.setState({ showAnswer: false })
    }

    static propTypes = {
        question: PropTypes.string.isRequired,
        answer: PropTypes.string.isRequired,
    }

    render() {
        const { question, answer } = this.props
        const { showAnswer } = this.state

        return (
            <View>
                <Text style={styles.question}>{ question }</Text>
                { !showAnswer

                    ? <TouchableOpacity style={ styles.btnShowAnswer }
                                      onPress={() => this.setState({ showAnswer: true })}>
                        <Text style={styles.textShowAnswer}>Show Answer</Text>
                    </TouchableOpacity>

                    : <Text style={styles.answer}>{ answer }</Text>
                }

            </View>
        )
    }
}

export default Card
