import React from 'react';
import Styled from 'styled-components';

import Message from './message';

const MessageList = ({ me, list }) => {
  return (
    <StMessageList>
      { list.map((m) => <Message message={ m } mine={ m.from === me } />) }
    </StMessageList>
  )
};

const StMessageList = Styled.ul`

  list-style-type: none;
  margin: 0;
  padding: 10px;
  height: 200px;
  overflow-y: scroll;
`;

export default MessageList;
