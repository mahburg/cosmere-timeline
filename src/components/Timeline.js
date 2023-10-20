import styled from 'styled-components';
import EventLine from './EventLine';

// TODO:
// - clusters of events
// - expandable
// - highlight events

function Line(props) {
  const { system, min, max, active } = props;
  const { color, events } = system;
  const filteredEvents = events?.filter(
    (event) => event.year >= min && event.year <= max
  );
  console.log('filteredEvents?.length: ', filteredEvents?.length);

  // get parent width

  return (
    <Container className={active ? 'active' : 'inactive'}>
      <Label
        title={system.primary}
        className={color ? 'with-shadow' : null}
        $color={color}
      >
        {system.name}
      </Label>
      <LineWrapper id={system.name + 'Line'}>
        <EventLine
          system={system}
          events={filteredEvents}
          min={min}
          max={max}
        />
      </LineWrapper>
      <Label
        title={system.primary}
        className={color ? 'with-shadow' : null}
        $color={color}
        style={{ justifySelf: 'start' }}
      >
        {system.name}
      </Label>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: 120px 1fr 120px;
  gap: 20px;
  align-items: center;
  opacity: 0.8;
  height: 36px;
  transition: all 0.25s ease-in-out;

  &.inactive {
    height: 0;
    overflow: hidden;
    margin: 0 20px;
  }
  &:hover {
    opacity: 1;
  }
`;

const Label = styled.h3`
  margin: 0 0 4px 8px;
  font-size: 24px;
  color: ${(props) => props.$color || 'white'};
  align-self: end;
  text-align: right;
  cursor: help;

  &.with-shadow {
    text-shadow: 1px 1px 2px black;
  }
`;

const LineWrapper = styled.div`
  width: 100%;
`;

export default Line;
