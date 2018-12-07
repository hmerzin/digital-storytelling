import React from 'react';
import Header from './Header';
import Header2 from './Header2';
import { Container } from './Page';
import styled from '@emotion/styled';

class Advice extends React.Component {
  render() {
    const Centered = styled('div')`
      text-align: center;
      margin: 0px 20px 0px 25px;
    `;
    return (
      <Container>
        <div>
          <Header>Advice For Incoming Freshmen</Header>
          <Header2>Get a doorstop!</Header2>
          <Container>
            <Centered>
              Leaving your door open or going around to other rooms in your dorm on the first day is
              a great way to make friends
            </Centered>
          </Container>
          <Header2>Don't hit the ground sprinting</Header2>
          <Container>
            <Centered>
              Your first is more about endurance than anything else. Not pacing yourself in the
              first few weeks will lead to you getting tired and taking breaks or relaxing more
              frequently as you continue on with school.
            </Centered>
          </Container>
          <Header2>You are in Boston, enjoy it!</Header2>
          <Container>
            <Centered>
              Take advantage of the city. Try to leave the immidiate campus bubble at least once a
              week with a group of friends. Every Saturday several of us stop what we are doing to
              go to "feast" in which we go to a different food destination around Boston. It is a
              great way to unwind and spend quality time with or meet new friends.
            </Centered>
          </Container>
        </div>
      </Container>
    );
  }
}

export default Advice;
