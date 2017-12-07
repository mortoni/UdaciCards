import React, { Component } from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import { Item, Input, Form, Label, Toast} from 'native-base';

import { connect } from 'react-redux';
import { styles } from './styles'
import { isNullOrBlank, checkStatus } from '../../utils';
import { addCardToDeck } from '../../actions';

class NewCard extends Component {
    state = {
        question: null,
        answer: null
    }

    onAddCard = () => {
        const { deck } = this.props.navigation.state.params;
        const { question, answer } = this.state;
        if (isNullOrBlank(question) || isNullOrBlank(answer)) {
            return Alert.alert('Invalid Card', 'Question and Answer must not be empty');
        }
        const card = { question, answer };
        this.props.addCardToDeck(card, deck);
        Toast.show({
            text: 'New card created!',
            position: 'top',
            buttonText: 'Okay',
        });
        this.setState({
            question: null,
            answer: null,
        })

    }

    render() {
        const { question, answer } = this.state;
        const { title } = this.props.navigation.state.params.deck;
        const status = {
            question: checkStatus(question),
            answer: checkStatus(answer)
        };
        return(
            <View style={{flex: 1}}>
                <Form style={{flex: 1}}>
                    <Item floatingLabel {...status.question}>
                        <Label>Question</Label>
                        <Input value={question} onChangeText={question => this.setState({ question })}/>
                    </Item>

                    <Item floatingLabel {...status.answer}>
                        <Label>Answer</Label>
                        <Input value={answer} onChangeText={answer => this.setState({ answer })}/>
                    </Item>
                </Form>


                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.buttonAdd}
                                      onPress={this.onAddCard}>
                        <Text style={styles.submitBtnTextAdd}>Add Card</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
  addCardToDeck: (card, deck) => dispatch(addCardToDeck(card, deck)),
})

export default connect(() => ({}), mapDispatchToProps)(NewCard);
