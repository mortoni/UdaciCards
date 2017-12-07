import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { styles } from './styles'

const DeckDetails = (props) => {
    const { title, cards, style } = props;

    return (
        <View style={[styles.container, style]}>
            <Text style={styles.txtTitle}>{ title }</Text>
            <Text style={styles.txtCount}>{ cards.length } cards</Text>
        </View>
    )
}

DeckDetails.propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired,
    style: PropTypes.any,
}

export default DeckDetails
