import React from 'react';
import Header from './Header';
import { Container, Content } from './Page';
import Header2 from './Header2';
import Caption from './Caption';
import styled from '@emotion/styled';
import facebookpic from './hscfacebook.png';
import teampic from './hscteam.jpg';
import researchnight from './researchnight.png';

class Passport extends React.Component {
  render() {
    const Image = styled('img')`
      padding: 20px;
      width: 300px;
      height: 300px;
    `;
    return (
      <Container>
        <div>
          <Header>Passport Series</Header>

          <Container>
            <Header2>Husky Startup Challenge</Header2>
          </Container>
          <ul>
            <li>
              Learned about several elements of starting a business from Saturday bootcamps
              <ul>
                <li>Team Recruitment</li>
                <li>Value Proposition and Target Marketing</li>
                <li>MVP and Marketing</li>
                <li>Pitch Prep and Design</li>
              </ul>
            </li>
            <li>Built Apricot MVP</li>
            <li>
              Talked to several businesses around the Boston area abou how to make a product
              meaningful to them
            </li>
            <li>Managed the tasks of our 8-person team</li>
            <li>Selected to pitch on stage at Demo Day</li>
          </ul>
          <Container>
            <Caption>
              The SAIL Dimensions that I saw growth in for this lesson were Professional & Personal
              Effectiveness and Social Consciousness & Commitment
            </Caption>
          </Container>

          <Container>
            <Header2>Undergraduate Research Night</Header2>
          </Container>
          <ul>
            <li>Learned about how to get involved in research at Northeastern</li>
            <li>Learned about which research areas Northeastern has to offer</li>
            <li>Talked to students doing research in Programming Languages at Northeastern</li>
          </ul>
          <Container>
            <Caption>
              The SAIL Dimensions that I saw growth in for this lesson were Professional & Personal
              Effectiveness and Intellectual Agility
            </Caption>
          </Container>

          <Container>
            <Header2>L'Merchie Frazier Exhibition</Header2>
          </Container>
          <ul>
            <li>
              Learned about how art is used as a medium to communicate issues of inequality and
              social injustice
            </li>
            <li>
              Learned about the positive effects of using art as a way to educate those who might be
              able to effect change and help to fight against injustice where they otherwise might
              not have done so
            </li>
          </ul>
          <Container>
            <Caption>
              The SAIL Dimensions that I saw growth in for this lesson were Global Mindset and
              Social Consciousness & Commitment
            </Caption>
          </Container>
          <Container>
            <Image src={facebookpic} />
            <Image src={teampic} />
            <Image src={researchnight} />
          </Container>
        </div>
      </Container>
    );
  }
}
export default Passport;
