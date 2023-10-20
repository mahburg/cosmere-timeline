import styled from 'styled-components';
import Timeline from './Timeline';
import TimeScale from './TimeScale';
import events from '../data/timelineEvents.json';
import systemsData from '../data/systemsData.json';
import { addEventsToSystems, groupEventsBySystem } from '../utils/dataUtils';
import { useState } from 'react';
import useDebouncedState from '../hooks/useDebouncedState';

const MIN_YEAR = 0;
const MAX_YEAR = 16019;
const systemsWithEvents = addEventsToSystems(
  systemsData,
  groupEventsBySystem(events)
);

function TimelineDisplay() {
  const [minInput, setMinInput] = useState(0);
  const [maxInput, setMaxInput] = useState(16019);
  const [minYear, setMinYear] = useDebouncedState(0, 500);
  const [maxYear, setMaxYear] = useDebouncedState(16019, 500);

  const [activeLines, setActiveLines] = useState(
    Object.keys(systemsWithEvents)
  );

  const handleMinYearChange = (e) => {
    const value = Math.max(e.target.value, MIN_YEAR);
    setMinInput(value);
    setMinYear(value);
  };
  const handleMaxYearChange = (e) => {
    const value = Math.min(e.target.value, MAX_YEAR);
    setMaxInput(value);
    setMaxYear(value);
  };

  const toggleActive = (system) => {
    setActiveLines((prev) => {
      if (prev.includes(system)) {
        return prev.filter((s) => s !== system);
      } else {
        return [...prev, system];
      }
    });
  };

  const timelines = Object.keys(systemsWithEvents);

  return (
    <Container>
      <div className="timeline-buttons">
        {timelines.map((system) => (
          <SystemButton
            key={system}
            className={activeLines.includes(system) ? 'active' : 'inactive'}
            $color={systemsData[system]?.color}
            onClick={() => toggleActive(system)}
          >
            {system}
          </SystemButton>
        ))}
      </div>
      {timelines.map((system) => (
        <Timeline
          key={system}
          system={systemsWithEvents[system]}
          min={minYear}
          max={maxYear}
          active={activeLines.includes(system)}
        />
      ))}
      <TimeScale min={minYear} max={maxYear} />

      <YearSelect className="year-select">
        <div className="year-input">
          <label htmlFor="start-year">Start Year</label>
          <input
            id="start-year"
            type="number"
            value={minInput}
            onChange={handleMinYearChange}
          />
        </div>
        <div className="year-input">
          <label htmlFor="end-year">End Year</label>
          <input
            id="end-year"
            type="number"
            value={maxInput}
            onChange={handleMaxYearChange}
          />
        </div>
      </YearSelect>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  border: 1px solid #555;
  padding: 20px;
`;

const YearSelect = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;

  .year-input {
    border: 1px solid #555;
    border-radius: 8px;
    padding: 20px;
    font-size: 20px;

    label {
      font-weight: bold;
      margin-right: 10px;
    }
    input {
      width: 100px;
      background-color: transparent;
      color: white;
      border: none;
      font-size: 20px;
      text-align: center;
      border-bottom: 1px solid white;
    }
  }
`;

const SystemButton = styled.button`
  padding: 5px 10px;
  margin: 10px;
  background-color: #222;
  color: black;
  /* text-shadow: 1px 1px 2px white; */
  border-radius: 50px;
  cursor: pointer;
  background-color: ${(props) => props.$color || 'white'};
  font-weight: 800;
  font-size: 20px;
  opacity: 0.85;
  transition: all 0.25s ease;

  &.active {
    border: 3px solid red;
  }
  &.inactive {
    opacity: 0.3;
  }
  &:hover {
    opacity: 1;
    transform: scale(1.07);
  }
`;

export default TimelineDisplay;
