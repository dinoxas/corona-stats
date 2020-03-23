import { useState } from "react";
import useStats from "../utils/useStats";
import Stats from "./Stats";
import styled from "styled-components";
import { Spinner } from "react-bootstrap";

const Select = styled.select`
  background: #fff;
  border: 1px solid rgb(23, 162, 184);
  border-radius: 5px;
  display: block;
  padding: 10px;
  margin: 20px auto;
  max-width: 300px;
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
      <h3 className="text-center">Country: {selectedCountry}</h3>

      <Select
        onChange={e => {
          setSelectedCountry(e.target.value);
        }}
        defaultValue={selectedCountry}
      >
        {Object.entries(countries.countries).map(([country, code], index) => (
          <option
            // selected={selectedCountry === countries.iso3[code]}
            key={index}
            value={countries.iso3[code]}
          >
            {country}
          </option>
        ))}
      </Select>
      <Stats
        url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
      ></Stats>
      <img
        src={`https://covid19.mathdro.id/api/countries/${selectedCountry}/og`}
        className="mx-auto d-block img-fluid mb-3"
      />
    </div>
  );
}
