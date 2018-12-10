import React from 'react';
import Styled from 'styled-components';
import { connect } from 'react-redux';

import { addMessage, markReceived, markSeen } from '../actions/messages';
import { phoneConnect, phoneDisconnect } from '../actions/connected';
import MessageList from './message-list';
import Sender from './sender';


class Smartphone extends React.Component {

  static messageExists(messages, message) {
    for(let i=0;i<messages.length;i++) {
      if (messages[i].id === message.id) return true;
    }
    return false;
  }

  constructor(props) {
    super(props);
    this.seenMessages = [];
    this.reportNewReceived([]);
  }

  componentDidUpdate(lastProps) {
    if (lastProps.messages !== this.props.messages) {
      this.reportNewReceived(lastProps.messages);
    }
  }

  reportNewReceived(lastMessages) {
    const { messages, dispatch, name } = this.props;

    messages.forEach((m) => {
      if (!Smartphone.messageExists(lastMessages, m) && m.from !== name) {
        markReceived(dispatch, m.id, name);
      }
    });
  }

  goOnline() {
    const { messages, dispatch, name } = this.props;

    messages.forEach((m) => {
      if (!Smartphone.messageExists(this.seenMessages, m) && m.from !== name) {
        markSeen(dispatch, m.id, name);
      }
    });
    this.seenMessages = messages;
    clearTimeout(this.idle);
    phoneConnect(dispatch, name);
    this.idle = setTimeout(() => {
      phoneDisconnect(dispatch, name);
    }, 10000);
  }

  get isConnected() {
    const { connected, name } = this.props;

    return connected[name];
  }

  render() {
    const { messages, dispatch, name } = this.props;
    const submit = (message) => {
      addMessage(dispatch, message, name)
    };

    return (<RecWrap onClick={() => this.goOnline() }>
      <RecHead connected={ this.isConnected }>{ name }</RecHead>
      <MessageList me={ name } list={ messages } />
      <Sender submit={ submit }/>
    </RecWrap>);
  }
}

const RecHead = Styled.div`
  background: ${ ({ connected }) => connected ? '#0a0' : '#8d8' };
  cursor: pointer;
  border-radius: 10px 10px 0 0;
  margin: 0;
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
`;

const RecWrap = Styled.div`
  position: relative;
  text-align: center;
  margin: 10px;
  background: #eee;
  border-radius: 15px;
  border:5px solid black;
`;

const mapStateToProps = (state) => {
  const { messages, connected } = state;

  return {
    messages,
    connected
  };
};

export default connect(mapStateToProps)(Smartphone);