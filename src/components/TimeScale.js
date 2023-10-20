import styled from 'styled-components';

const Hash = ({ label, index, percent }) => {
  return (
    <HashContainer index={index} percent={percent}>
      <HashMark />
      <p>{label}</p>
    </HashContainer>
  );
};

function TimeScale({ min, max }) {
  let percent = 10;
  const step = Math.round((max - min) / 10) || 1;
  const hashes = [];

  for (let i = min; i <= max; i += step) {
    hashes.push(i);
  }
  if (hashes.length < 11 && step > 1) {
    hashes.push(max);
  }
  if (hashes.length < 11) {
    percent = 100 / (hashes.length - 1);
  }

  return (
    <Container>
      <h3>Year:</h3>
      <Scale>
        <div className="line" />
        {hashes.map((hash, i) => (
          <Hash key={i} label={hash} index={i} percent={percent} />
        ))}
      </Scale>
    </Container>
  );
}

const Container = styled.div`
  height: 75px;
  display: grid;
  grid-template-columns: 120px 1fr 120px;
  gap: 20px;

  align-items: flex-start;
`;

const Scale = styled.div`
  width: 100%;
  height: 50px;
  position: relative;

  & > .line {
    width: 100%;
    height: 2px;
    background-color: #bbb;
    position: absolute;
    top: 50%;
  }
`;

const HashContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  left: ${(p) => {
    console.log('p: ', p);
    return `${p.index * p.percent}%`;
  }};
  translate: -50% 0;
`;

const HashMark = styled.div`
  width: 2px;
  height: 50px;
  background-color: #bbb;
`;

export default TimeScale;
