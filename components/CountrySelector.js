import { useState } from "react";
import useStats from "../utils/useStats";
import Stats from "./Stats";
import styled from "styled-components";
import { Spinner } from "react-bootstrap";

const Select = styled.select`
  background: rgba(23, 162, 184, 0.1);
  border: 1px solid rgb(23, 162, 184);
  border-radius: 5px;
  display: block;
  padding: 5px 10px;
  margin: 0 auto 20px;
  max-width: 200px;
  @media (max-width: 600px) {
    width: 100%;
    max-width: none;
  }
`;

export default function CountrySelector() {
  const { stats: countries, loading, error } = useStats(
    "https://covid19.mathdro.id/api/countries"
  );
  const [selectedCountry, setSelectedCountry] = useState("GBR");

  if (loading)
    return (
      <div className="d-flex justify-content-center">
        <Spinner animation="border" variant="info" />
      </div>
    );
  if (loading)
    return (
      <div className="d-flex justify-content-center">
        <Spinner animation="border" variant="info" />
      </div>
    );
  if (error) return <h4 className="text-center">Error...</h4>;

  return (
    <div>
      <Select
        onChange={e => {
          setSelectedCountry(e.target.value);
        }}
        defaultValue={selectedCountry}
      >
        {countries.countries.map((country, index) => (
          <option key={index} value={country.iso3}>
            {country.name}
          </option>
        ))}
      </Select>
      <Stats
        url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
      ></Stats>
    </div>
  );
}
