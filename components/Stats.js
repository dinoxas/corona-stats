import styled from "styled-components";
import useStats from "../utils/useStats";
import { Spinner } from "react-bootstrap";
import Moment from "react-moment";

const StatGrid = styled.div`
  background-color: rgba(23, 162, 184, 0.1);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media (max-width: 600px) {
    display: block;
    text-align: center;
  }
`;
const StatBlock = styled.div`
  padding: 20px 10px;
  text-align: center;
  @media (max-width: 600px) {
    padding: 10px;
  }
`;

export default function Stats({ url }) {
  const { stats, loading, error } = useStats(url);

  console.log(stats, loading, error);
  if (loading)
    return (
      <div className="d-flex justify-content-center">
        <Spinner animation="border" variant="info" />
      </div>
    );
  if (error) return <h4 className="text-center">Error...</h4>;
  return (
    <div>
      <div className="text-center mb-3">
        <span className="">Last update: </span>{" "}
        <Moment format="DD/MM/YYYY HH:mm">{stats.lastUpdate}</Moment>
      </div>
      <StatGrid>
        <StatBlock>
          <h5>Confirmed</h5>
          <h2 className="font-weight-bold">{stats.confirmed.value}</h2>
        </StatBlock>

        <StatBlock>
          <h5>Recovered</h5>
          <h2 className="font-weight-bold text-success">
            {stats.recovered.value}
          </h2>
        </StatBlock>

        <StatBlock>
          <h5>Deaths</h5>
          <h2 className="font-weight-bold text-danger">{stats.deaths.value}</h2>
        </StatBlock>
      </StatGrid>
    </div>
  );
}
