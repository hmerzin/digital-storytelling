import React from 'react';
import Header from './Header';
import { Container } from './Page';
import styled from '@emotion/styled';

class Home extends React.Component {
  render() {
    const Centered = styled('div')`
      text-align: center;
      margin: 0px 20px 0px 25px;
    `;

    return (
      <Container>
        <div>
          <Header>Hello</Header>
          <Centered>
            This is my digital storytelling project. You can find the source on{' '}
            <a href="https://github.com/hmerzin/digital-storytelling">Github</a>. <br /> Enjoy!
          </Centered>
        </div>
      </Container>
    );
  }
}
export default Home;
