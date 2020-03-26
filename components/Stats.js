import styled from "styled-components";
import useStats from "../utils/useStats";
import { Spinner } from "react-bootstrap";
import Moment from "react-moment";

const StatGrid = styled.div`
  background-color: rgba(23, 162, 184, 0.1);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    display: block;
    text-align: center;
  }
`;
const StatBlock = styled.div`
  padding: 20px 10px;
  text-transform: uppercase;

  @media (max-width: 600px) {
    padding: 20px;
    &:first-of-type {
      padding: 20px 20px 0 20px;
    }
  }
`;

export default function Stats({ url }) {
  const { stats, loading, error } = useStats(url);

  if (loading)
    return (
      <div className="d-flex justify-content-center">
        <Spinner animation="border" variant="info" />
      </div>
    );
  if (error) return <h4 className="text-center">Error...</h4>;
  return (
    <div className="">
      <StatGrid>
        <StatBlock>
          <h5 className="mb-0 font-weight-bold small">Confirmed</h5>
          <h2 className="display-4 font-weight-bold text-secondary">
            {stats.confirmed.value}
          </h2>
        </StatBlock>

        <StatBlock>
          <h5 className="mb-0 font-weight-bold small">Recovered</h5>
          <h2 className="display-4 font-weight-bold text-success">
            {stats.recovered.value}
          </h2>
          <div className="small text-white bg-success pl-1 pr-1">
            {((stats.recovered.value / stats.confirmed.value) * 100).toFixed(1)}
            % Recovery rate
          </div>
        </StatBlock>

        <StatBlock>
          <h5 className="mb-0 font-weight-bold small">Deaths</h5>
          <h2 className="display-4 font-weight-bold text-danger">
            {stats.deaths.value}
          </h2>
          <div className="small text-white bg-danger pl-1 pr-1">
            {((stats.deaths.value / stats.confirmed.value) * 100).toFixed(1)}%
            Fatality rate
          </div>
        </StatBlock>
      </StatGrid>
      <div className="text-center mb-3">
        <span className="">Last update: </span>{" "}
        <Moment format="DD/MM/YYYY HH:mm">{stats.lastUpdate}</Moment> <br />
        Source:{" "}
        <a
          className="text-info"
          href="https://github.com/mathdroid/covid-19-api"
          target="_blank"
          rel="nofollow"
        >
          COVID-19 API
        </a>
      </div>
    </div>
  );
}
