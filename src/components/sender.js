import React from 'react';
import Styled from 'styled-components';

class Sender extends React.Component {
  render() {
    const { submit } = this.props;
    const click = () => {
      if (this.input.value) {
        submit(this.input.value);
        this.input.value = '';
      }
    };
    const onKey = (e) => {
      if (e.keyCode === 13) {
        click();
      }
    };
    return (
      <div>
        <WiderInput ref={ node => this.input = node } onKeyDown={ onKey }/>
        <input type='button' value='Send' onClick={ click } />
      </div>);
  }
}

const WiderInput = Styled.input`
  width: 80%;
`;

export default Sender;