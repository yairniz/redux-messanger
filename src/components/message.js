import React from 'react';
import Styled from 'styled-components';

const Message = ({ message, mine }) => {
  if (!message) {
    return(<StyledMessage>No Messages yet</StyledMessage>);
  }

  const seen = message.seen.length;
  const seenBy = seen ? `Seen by: ${ message.seen.join(', ') }, ` : '';
  const received = message.received.length;
  const receivedBy = received ? `Received by: ${ message.received.join(', ') }` : '';

  return (
    <StyledMessage mine={ mine } key={ message.id }>
      <From mine={ mine }>{ message.from }: </From>
      { message.text }
      <DoubleV seen={ seen }>{ received ? 'VV' : 'V' }</DoubleV>
      <Details mine={ mine } seen={ seen } >
        { seenBy }
        { receivedBy }
      </Details>
    </StyledMessage>
  );
};

const StyledMessage = Styled.li`  
  font-size: 12px;
  text-align: ${ ({ mine }) => mine ? 'right' : 'left' };
  background: ${ ({ mine }) => mine ? '#bbe' : '#bee' };
  border: 1px solid #bbb;
  border-radius: 5px;
  padding: 3px 5px;
  margin: 5px 0;
`;
const From = Styled.b`
  display: ${ ({ mine }) => mine ? 'none' : 'inline' };
`;
const Details = Styled.div`
  font-size: 10px;
  display: ${ ({ mine }) => mine ? 'block' : 'none' };
`;
const DoubleV = Styled.span`
  color: ${ ({ seen }) => seen ? 'blue' : 'gray' };
  content: '${ ({ received }) => received ? 'VV' : 'V' }';  
  border: 1px solid #888;
  border-radius: 40%;
  padding: 1px 3px;
  font-size: 10px;
  margin-left: 5px;
`;

export default Message;
