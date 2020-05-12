import React from 'react';

import { Button } from '~/components';

import * as Styles from './styles';

function About() {
  return (
    <Styles.Container>
      <Styles.Section>
        <div>
          <h6>About</h6>
          <h2>Food Is An Important Part Of A Balanced Diet</h2>
          <p>
            They actually assured me over and over that take little time off and
            come back and work. Fast forward tow weeks after we are going for a
            new project.
          </p>
          <p>
            I wrote to let them know ready to come back they kicked me of their
            team slack all of us are make company email.
          </p>
          <div className='more'>
            <Button
              color='white'
              background='primary'
              onClick={() => {}}
              text='Learn More'
            />
            <Styles.PlayIcon />
            <div>Watch Video</div>
          </div>
        </div>
        <Styles.BigImage />
      </Styles.Section>
      <Styles.SmallImage />
    </Styles.Container>
  );
}

export default About;
