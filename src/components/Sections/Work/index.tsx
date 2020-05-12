import React from 'react';

import * as Styles from './styles';

function Work() {
  return (
    <Styles.Container>
      <Styles.Section>
        <div>
          <h6>Work</h6>
          <h2>How It Works</h2>
          <p>
            It's through mistakes that you actually can grow you get rid of
            everything that is not essential to makihave to get bad.
          </p>
        </div>
      </Styles.Section>
      <Styles.Info>
        <div>
          <Styles.CoffeeIcon />
          <p>Pick Meals</p>
          <span>
            Choose your meals from our diverse weekly menu. Find glutem or daily
            free, low carbs &amp; veggie options.
          </span>
        </div>
        <div>
          <Styles.MouseIcon />
          <p>Choose How Often</p>
          <span>
            Our team of chefs do the prep work no chopping, measuring, or sink
            full of dishes!
          </span>
        </div>
        <div>
          <Styles.FastIcon />
          <p>Fast Deliveries</p>
          <span>
            Your freshly prepped 15-min dinner kits arrive on your doorstep in a
            refrigerated box.
          </span>
        </div>
      </Styles.Info>
    </Styles.Container>
  );
}

export default Work;
