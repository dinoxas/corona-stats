import { useState } from "react";
import useStats from "../utils/useStats";

import { Spinner } from "react-bootstrap";
import AutoComplete from "./AutoComplete";

export default function CountryForm() {
  const { stats: countries, loading, error } = useStats(
    "https://covid19.mathdro.id/api/countries"
  );

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

  const CountryNames = countries.countries.map(({ name }) => name);

  return (
    <div>
      <AutoComplete
        suggestions={CountryNames}
        countries={countries.countries}
      />
    </div>
  );
}
