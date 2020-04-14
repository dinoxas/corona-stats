import styled from 'styled-components';
import useStats from '../utils/useStats';
import { Spinner } from 'react-bootstrap';
import Moment from 'react-moment';
import CountUp from 'react-countup';

const StatGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media (max-width: 600px) {
    display: block;
    text-align: center;
  }
`;
const StatBlock = styled.div`
  background: #fff;
  padding: 16px;
  border-radius: 3px;
  margin-bottom: 20px;
  text-transform: uppercase;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px,
    rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
  min-width: 220px;

  &:nth-child(1) {
    border-bottom: 12px solid rgba(23, 162, 184, 0.8);
  }
  &:nth-child(2) {
    border-bottom: 12px solid rgba(40, 167, 69, 0.8);
  }
  &:nth-child(3) {
    border-bottom: 12px solid rgba(220, 53, 69, 0.8);
  }

  @media (min-width: 769px) {
    min-width: 300px;
  }
`;

const StatHeading = styled.h2`
  font-size: 2.4rem;
  color: #6c757d;
  margin-bottom: 0;
  font-weight: bold;
  line-height: 1.2em;
  @media (min-width: 769px) {
    font-size: 3rem;
  }
`;

export default function Stats({ url }) {
  const { stats, loading, error } = useStats(url);
  if (loading)
    return (
      <div className='d-flex justify-content-center'>
        <Spinner animation='border' variant='secondary' />
      </div>
    );
  if (error) return <h4 className='text-center'>Error...</h4>;
  return (
    <div className=''>
      <StatGrid>
        <StatBlock>
          <h5 className='mb-0 font-weight-bold small'>Confirmed</h5>
          <StatHeading>
            <CountUp
              start={0}
              end={stats.confirmed.value}
              duration={2}
              separator=','
            />
          </StatHeading>
          <div className='small pl-1 pr-1'>Number of active cases</div>
        </StatBlock>

        <StatBlock>
          <h5 className='mb-0 font-weight-bold small'>Recovered</h5>
          <StatHeading>
            <CountUp
              start={0}
              end={stats.recovered.value}
              duration={2}
              separator=','
            />
          </StatHeading>
          <div className='small pl-1 pr-1'>
            {((stats.recovered.value / stats.confirmed.value) * 100).toFixed(1)}
            % Recovery rate
          </div>
        </StatBlock>

        <StatBlock>
          <h5 className='mb-0 font-weight-bold small'>Deaths</h5>
          <StatHeading>
            <CountUp
              start={0}
              end={stats.deaths.value}
              duration={2}
              separator=','
            />
          </StatHeading>
          <div className='small pl-1 pr-1'>
            {((stats.deaths.value / stats.confirmed.value) * 100).toFixed(1)}%
            Fatality rate
          </div>
        </StatBlock>
      </StatGrid>
      <div className='text-center mb-3 small'>
        Last update:
        <br /> <Moment format='LLLL'>{stats.lastUpdate}</Moment>
      </div>
    </div>
  );
}
