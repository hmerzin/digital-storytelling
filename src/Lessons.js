import React from 'react';
import Header from './Header';
import { Container, Content } from './Page';
import Header2 from './Header2';
import Caption from './Caption';

class Lessons extends React.Component {
  render() {
    return (
      <Container>
        <div>
          <Header>Meaningful Lessons</Header>

          <Container>
            <Header2>Time Management</Header2>
          </Container>
          <ul>
            <li>Learned about various time management strategies like the Pomodoro Technique</li>
            <li>Learned about the consequences of procrastination and not managing time</li>
            <li>
              Recieved the tip to keep a clean room and workspace as not doing this could lead to
              unnecessary anxiety and stress
            </li>
            <li>Learned how to prioritize my time and to do the most urgent thigs first</li>
            <li>Thought about how to use my down time most effectively</li>
          </ul>
          <Container>
            <Caption>
              The SAIL Dimensions that I saw growth in for this lesson were Professional & Personal
              Effectiveness and Well-Being
            </Caption>
          </Container>

          <Container>
            <Header2>Creativity & Design Thinking</Header2>
          </Container>
          <ul>
            <li>Learned how to identify, analyze and overcome failures</li>
            <li>
              Discovered that most of my failures come for the identifyable category of sloppy
              mistakes
            </li>
            <li>Learned about design thinking and how to best use it in what I will be doing</li>
            <li>
              Learned about using Root Cause Analsis to find and problems that don't necessarily
              have an obvious cause
            </li>
          </ul>
          <Container>
            <Caption>
              The SAIL Dimensions that I saw growth in for this lesson were Intellectual Agility and
              Professional & Personal Effectiveness
            </Caption>
          </Container>

          <Container>
            <Header2>Intro to Co-Op</Header2>
          </Container>
          <ul>
            <li>Learned how to search and apply for Co-Ops using NUCareers</li>
            <li>
              Learned that Co-Op opportunities are not limited to Boston or even the United States
            </li>
            <li>Learned about how to secure housing while on Co-Op</li>
            <li>
              Learned about the tool that Northeastern students use to get feedback on their resumes
            </li>
          </ul>
          <Container>
            <Caption>
              The SAIL Dimensions that I saw growth in for this lesson were also Professional &
              Personal Effectiveness and Intellectual Agility
            </Caption>
          </Container>
        </div>
      </Container>
    );
  }
}

export default Lessons;
