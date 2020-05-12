import React from 'react';

import * as Styles from './styles';

function Testimonial() {
  return (
    <Styles.Container>
      <Styles.Section>
        <div>
          <h6>Testimonial</h6>
          <h2>What They Are Saying</h2>
          <p>
            It's through mistakes that you actually can grow you get rid of
            everything that is not essential to makihave to get bad.
          </p>
        </div>
      </Styles.Section>
      <Styles.Testimonial>
        <div className='image' />
        <p>
          They are engaged communicators and dedicated problem-solvers
          regardless of time constraints. The team manegeproject them.
        </p>
        <div>
          {Array.from({ length: 5 }).map(() => (
            <Styles.StarIcon />
          ))}
        </div>
        <p className='bold'>
          Shakib <span>Bangladesh</span>
        </p>
      </Styles.Testimonial>
    </Styles.Container>
  );
}

export default Testimonial;
