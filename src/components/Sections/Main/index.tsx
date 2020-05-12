import React from 'react';

import { Button } from '~/components';

import * as Styles from './styles';

function Main() {
  return (
    <Styles.Container>
      <Styles.Section>
        <div>
          <h2>Your Favourite Food Delivered Hot &amp; Fresh</h2>
          <p>
            Healthy switcher chefs do all the prep work, like peeding, chooping
            &amp; marinating, so you can cook a fresh food.
          </p>
          <Button
            color='white'
            background='primary'
            onClick={() => {}}
            text={
              <span>
                Order Now <Styles.ArrowIcon />
              </span>
            }
          />
        </div>
        <Styles.BigImage />
      </Styles.Section>
      <Styles.SmallImage />
      <Styles.Info>
        <div>
          <Styles.ClockIcon />
          <p>Today 10:00 am - 7:00 pm</p>
          <span>Working hours</span>
        </div>
        <div>
          <Styles.PinIcon />
          <p>Velyka Vasylkivska 100</p>
          <span>Get Directions</span>
        </div>
        <div>
          <Styles.PhoneIcon />
          <p>+38 (063)833 24 15</p>
          <span>Call Online</span>
        </div>
      </Styles.Info>
    </Styles.Container>
  );
}

export default Main;
