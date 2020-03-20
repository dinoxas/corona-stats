import styled from "styled-components";
import useStats from "../utils/useStats";

const StatGrid = styled.div`
  background-color: #f8f9fa;
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
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
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
    </StatGrid>
  );
}
