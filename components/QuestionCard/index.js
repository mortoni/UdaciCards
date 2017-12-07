import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button } from 'native-base';
import { styles } from './styles'
import Card from '../Card'

const QuestionCard = (props) => {
    const {
        card,
        progress,
        total,
        onPressCorrect,
        onPressIncorrect,
    } = props;

    return (
        <View style={ styles.container }>
            <Text style={ styles.txtProgress }>Card: { progress }/{ total }</Text>
            <View style={ styles.card }>
                <Card {...card}/>
            </View>

            <View style={ styles.buttons }>
                <TouchableOpacity style={ styles.button }
                                  onPress={ onPressCorrect }>
                    <Text style={ styles.btnText }>Incorrect</Text>
                </TouchableOpacity>

                <TouchableOpacity style={ styles.button }
                                  onPress={ onPressCorrect }>
                    <Text style={ styles.btnText }>Correct</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

QuestionCard.propTypes = {
    progress: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    onPressCorrect: PropTypes.func.isRequired,
    onPressIncorrect: PropTypes.func.isRequired,
}

export default QuestionCard
