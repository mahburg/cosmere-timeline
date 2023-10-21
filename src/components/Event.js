import { useState } from 'react';
import styled from 'styled-components';

function Event({ event, color, system, min, max }) {
  const [open, setOpen] = useState(false);
  const year = event?.year ?? 0;
  const percent = (year - min) / (max - min);
  const left = percent > 0.5;

  // if (system === 'Sel') {
  //   console.log('%', percent);
  // }

  return (
    <Container
      className={open ? 'event-open' : 'event-closed'}
      $color={color}
      $percent={percent}
      onClick={() => setOpen(!open)}
    >
      <ContentWrapper>
        <EventBox className="event-box" $color={color} $left={left}>
          <h3>Year: {event?.year}</h3>
          <p>{event?.events}</p>
        </EventBox>
      </ContentWrapper>
    </Container>
  );
}

const dotSize = 20;

const Container = styled.div`
  width: ${dotSize}px;
  height: ${dotSize}px;
  border-radius: 50%;
  position: absolute;
  top: calc(50% - ${dotSize / 2}px);
  left: calc(${(props) => props.$percent * 100}% - ${dotSize / 2}px);
  background-color: ${(props) => props.$color || 'white'};
  cursor: pointer;

  &.event-open,
  &:hover {
    border: 2px solid black;
    background-color: red;
    z-index: 10;

    .event-box {
      display: block;
    }
  }
`;

const ContentWrapper = styled.div`
  position: relative;
`;

const EventBox = styled.div`
  position: absolute;
  top: 15px;
  left: ${(props) => (props.$left ? 'unset' : '0')};
  right: ${(props) => (props.$left ? '0' : 'unset')};
  min-width: 200px;
  min-height: 100px;
  background-color: #222;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.$color || 'white'};
  display: none;
  z-index: 10;

  &:hover {
    z-index: 20;
  }
`;

export default Event;
