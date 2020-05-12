import React from 'react';

import * as Components from '~/components';

import { Container, Background } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <Background />
      <Components.Header />
      <Components.Sections.Main />
      <Components.Sections.About />
      <Components.Sections.Work />
      <Components.Sections.Menu />
      <Components.Sections.Help />
      <Components.Footer />
    </Container>
  );
}
