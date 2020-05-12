import React from 'react';

import { Button } from '~/components';

import * as Styles from './styles';

function Menu() {
  return (
    <Styles.Container>
      <Styles.Section>
        <div>
          <h6>Menu</h6>
          <h2>Explore Our Best Menu</h2>
          <p>
            It's through mistakes that you actually can grow you get rid of
            everything that is not essential to makihave to get bad.
          </p>
        </div>
      </Styles.Section>
      <Styles.Menu>
        {Array.from({ length: 9 }).map(() => (
          <Styles.Item>
            <div className='image' />
            <div className='content'>
              <div>
                <h2>Rose Muffen</h2>
                <h2>12$</h2>
              </div>
              <span>Served with french fries + drink</span>
              <p>
                Choice of: Cake, Fanta, Sprite, Upgrade to large fries. Add
                whopper patty. Add Tender crip patty and more...
              </p>

              <Styles.StarIcon />
              <Styles.StarIcon />
              <Styles.StarIcon />
              <Styles.PlusIcon />
            </div>
          </Styles.Item>
        ))}
      </Styles.Menu>
      <Button
        color='white'
        background='primary'
        onClick={() => {}}
        text='Load More'
      />
    </Styles.Container>
  );
}

export default Menu;
