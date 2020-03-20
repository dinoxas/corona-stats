import styled from "styled-components";
import useStats from "../utils/useStats";
import { Spinner } from "react-bootstrap";
import Moment from "react-moment";

const StatGrid = styled.div`
  background-color: rgba(23, 162, 184, 0.1);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 30px 0;

  @media (max-width: 600px) {
    display: block;
    text-align: center;
  }
`;
const StatBlock = styled.div`
  padding: 20px 10px;
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
    <StatGrid>
      <StatBlock>
        <h5>Confirmed</h5>
        <span>{stats.confirmed.value}</span>
      </StatBlock>

      <StatBlock>
        <h5>Recovered</h5>
        <span>{stats.recovered.value}</span>
      </StatBlock>

      <StatBlock>
        <h5>Deaths</h5>
        <span>{stats.deaths.value}</span>
      </StatBlock>

      <StatBlock>
        <h5>Last update</h5>
        <Moment format="DD/MM/YYYY HH:mm">{stats.lastUpdate}</Moment>
      </StatBlock>
    </StatGrid>
  );
}
