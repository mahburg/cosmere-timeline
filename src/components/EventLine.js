import React from 'react';
import Event from './Event';

import styled from 'styled-components';

// FIXME: Need linePixelWidth to calculate event groupings
// ask chat gpt

function EventLine(props) {
  const { system, events, min, max } = props;
  const { color } = system;

  return (
    <Wrapper>
      <LineObject className="line" $color={color} />

      {events?.map((event) => {
        return (
          <Event
            key={event.events}
            system={system.name}
            event={event}
            color={color}
            min={min}
            max={max}
          />
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const LineObject = styled.div`
  position: relative;
  width: 100%;
  height: 3px;
  background-color: ${(props) => props.$color || 'white'};
  border-radius: 6px;
  opacity: 0.8;
`;

export default EventLine;
