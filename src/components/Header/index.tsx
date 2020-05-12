import React, { useState } from 'react';

import { Button } from '~/components';

import * as Styles from './styles';

const menuItems = ['Home', 'Packages', 'About us', 'Contact us'];

function Header() {
  const [selected, setSelected] = useState(menuItems[0]);

  return (
    <Styles.Container>
      <Styles.Logo />
      <nav>
        <ul>
          {menuItems.map(item => (
            <li key={item} onClick={() => setSelected(item)}>
              <span>
                {item} {selected === item && <Styles.Dot />}
              </span>
            </li>
          ))}
          <li>
            <Styles.ShoppingIcon />
          </li>
          <li>
            <Button
              color='grey'
              background='white'
              text='Booking Now'
              onClick={() => {}}
            />
          </li>
        </ul>
      </nav>
    </Styles.Container>
  );
}

export default Header;
