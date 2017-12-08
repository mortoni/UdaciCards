import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Content, Button, Item, Input, Label, Form} from 'native-base';
import { addDeck } from '../../actions';
import { styles } from './styles'
import { NavigationActions } from 'react-navigation';


class NewDeck extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
    }

    createDeck = () => {
        const { title } = this.state;
        const deck = { title };
        this.props.addDeck(deck);
        const navAction = NavigationActions.reset({
            index: 1,
            actions: [
                NavigationActions.navigate({ routeName: 'Home', action: NavigationActions.navigate({ 'routeName': 'Decks' }) }),
                NavigationActions.navigate({ routeName: 'Deck', params: { deck: { id: 'latest' } }}),
            ]
        });
        this.props.navigation.dispatch(navAction);
    }

    render() {
        const { title } = this.state
        return(
            <View style={ styles.container }>
                <Form style={ styles.form }>
                    <Item floatingLabel>
                        <Label >What is the title of your new deck ?</Label>
                        <Input onChangeText={ title => this.setState({ title }) }/>
                    </Item>

                    <View style={styles.buttons}>
                        <TouchableOpacity style={styles.buttonCreate}
                                          onPress={this.createDeck}
                                          disabled={title === ''}>
                            <Text style={styles.textCreate}>Add New Deck</Text>
                        </TouchableOpacity>
                    </View>
                </Form>
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
  addDeck: (deck) => dispatch(addDeck(deck)),
})

export default connect(null, mapDispatchToProps)(NewDeck);
