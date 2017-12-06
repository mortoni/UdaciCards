import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import { styles } from './styles'

import DeckItem from '../../components/DeckItem';
import Container from '../../components/Container';


const Decks = (props) => {
    onSelectDeck = (deck) => {
        props.navigation.navigate('Deck', { deck });
    }

    const { decks } = props;

    return(
        <Container>
            <FlatList
                style={styles.list}
                data={decks}
                keyExtractor={({id}) => id}
                renderItem={({item: deck}) =>
                    <TouchableOpacity
                        style={styles.deck}
                        onPress={() => this.onSelectDeck(deck)}>

                        <DeckItem {...deck} />

                    </TouchableOpacity>
                }
            />
        </Container>
    )
}

const mapStateToProps = (state) => {
    const { list, refById } = state.deck;
    const decks = list.map(id => refById[id]);
    return {
        decks,
    }
}

export default connect(mapStateToProps)(Decks);
