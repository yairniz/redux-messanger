import React from 'react';
import Styled from 'styled-components';

import Smartphone from './smartphone';
import { connect } from 'react-redux';

const SmartphoneList = ({ smartphones = [] }) => {
  return (
    <StWrap>
      { smartphones.map((s, index) => <Smartphone { ...s } key={ index } />) }
    </StWrap>
  );
};

const StWrap = Styled.div`
  display: grid;
  width: 60%;
  margin: 10px auto;
  grid-template-columns: repeat(3, 1fr);
`;

const mapStateToProps = (state) => {
  const { smartphones } = state;

  return {
    smartphones
  };
};

export default connect(mapStateToProps)(SmartphoneList);