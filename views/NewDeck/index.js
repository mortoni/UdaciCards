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
        this.props.navigation.navigate('Home');
    }

    render() {
        return(
            <View style={ styles.container }>
                <Form style={ styles.form }>
                    <Item floatingLabel>
                        <Label >What is the title of your new deck ?</Label>
                        <Input onChangeText={ title => this.setState({ title }) }/>
                    </Item>
                </Form>

                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.buttonCreate}
                                      onPress={this.createDeck}>
                        <Text style={styles.textCreate}>Add New Deck</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
  addDeck: (deck) => dispatch(addDeck(deck)),
})

export default connect(() => ({}), mapDispatchToProps)(NewDeck);
