import React from 'react';

import { Button } from '~/components';

import * as Styles from './styles';

function Help() {
  return (
    <Styles.Container>
      <h2>Have Questions in mind? Let us help you</h2>
      <Styles.InputContainer>
        <input placeholder='youremail@gmail.com' />
        <Button
          color='white'
          background='primary'
          onClick={() => {}}
          text='Send'
        />
      </Styles.InputContainer>
    </Styles.Container>
  );
}

export default Help;
