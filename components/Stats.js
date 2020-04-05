import styled from "styled-components";
import useStats from "../utils/useStats";
import { Spinner } from "react-bootstrap";
import Moment from "react-moment";
import CountUp from "react-countup";

const StatGrid = styled.div`
  // background-color: rgba(23, 162, 184, 0.1);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media (max-width: 600px) {
    display: block;
    text-align: center;
  }
`;
const StatBlock = styled.div`
  padding: 16px;
  border-radius: 3px;
  margin-bottom: 20px;
  text-transform: uppercase;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  min-width: 300px;
  @media (max-width: 600px) {
    min-width: 0;
  }
`;

export default function Stats({ url }) {
  const { stats, loading, error } = useStats(url);

  if (loading)
    return (
      <div className="d-flex justify-content-center">
        <Spinner animation="border" variant="secondary" />
      </div>
    );
  if (error) return <h4 className="text-center">Error...</h4>;
  return (
    <div className="">
      <StatGrid>
        <StatBlock>
          <h5 className="mb-0 font-weight-bold small">Confirmed</h5>
          <h2 className="display-4 font-weight-bold text-secondary">
            <CountUp
              start={0}
              end={stats.confirmed.value}
              duration={1.5}
              separator=","
            />
          </h2>
        </StatBlock>

        <StatBlock>
          <h5 className="mb-0 font-weight-bold small">Recovered</h5>
          <h2 className="display-4 font-weight-bold text-success">
            <CountUp
              start={0}
              end={stats.recovered.value}
              duration={1.5}
              separator=","
            />
          </h2>
          <div className="small text-white bg-success pl-1 pr-1">
            {((stats.recovered.value / stats.confirmed.value) * 100).toFixed(1)}
            % Recovery rate
          </div>
        </StatBlock>

        <StatBlock>
          <h5 className="mb-0 font-weight-bold small">Deaths</h5>
          <h2 className="display-4 font-weight-bold text-danger">
            <CountUp
              start={0}
              end={stats.deaths.value}
              duration={1.5}
              separator=","
            />
          </h2>
          <div className="small text-white bg-danger pl-1 pr-1">
            {((stats.deaths.value / stats.confirmed.value) * 100).toFixed(1)}%
            Fatality rate
          </div>
        </StatBlock>
      </StatGrid>
      <div className="text-center mb-3">
        <span className="">Last update: </span>{" "}
        <Moment format="DD/MM/YYYY HH:mm">{stats.lastUpdate}</Moment>
      </div>
    </div>
  );
}
