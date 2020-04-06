import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Stats from "./Stats";
import { InputGroup, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const Wrapper = styled.div`
  max-width: 300px;
  margin: 20px auto;
  position: relative;

  @media (max-width: 600px) {
    width: 100%;
    max-width: none;
  }
`;

const CountryInput = styled.input`
  &:focus {
    box-shadow: none;
    border-color: #6c757d;
  }
`;

const CountryList = styled.ul`
  box-shadow: 0px 1px 8px #ccc;
  background-color: #f8f9fa;
  border-top-width: 0;
  list-style: none;
  margin: 0 auto;
  max-height: 50vh;
  overflow-y: auto;
  position: absolute;
  padding-left: 0;
  width: 300px;
  z-index: 3;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const CountryListItem = styled.li`
  display: block;
  padding: 10px;

  &:hover,
  &.suggestion-active {
    background-color: #f8f9fa;

    cursor: pointer;
    font-weight: 700;
  }
`;

const NoSuggestion = styled.div`
  color: #6c757d;
  text-align: center;
  padding: 20px 0 0;
`;

export default function AutoComplete(props) {
  const { suggestions, countries } = props;

  AutoComplete.propTypes = {
    suggestions: PropTypes.instanceOf(Array),
    countries: PropTypes.instanceOf(Array),
  };

  AutoComplete.defaultProps = {
    suggestions: [],
  };

  const [selectedCountry, setSelectedCountry] = useState("GRC");

  // The active selection's index
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  // The suggestions that match the user's input
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  // Whether or not the suggestion list is shown
  const [showSuggestions, setShowSuggestions] = useState(false);
  // What the user has entered
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (input) => {
    const found = countries.find((c) => c.name === input);
    if (found !== undefined) {
      setSelectedCountry(found.iso3);
    } else {
      alert("Please enter a valid country.");
    }
  };

  const showCountryName = () => {
    const found = countries.find((c) => c.iso3 === selectedCountry);
    return found.name;
  };

  const onChange = (e) => {
    const userInput = e.currentTarget.value;

    // Filter our suggestions that don't contain the user's input
    const filteredSuggestions = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setActiveSuggestion(0);
    setFilteredSuggestions(filteredSuggestions);
    setShowSuggestions(true);
    setUserInput(e.currentTarget.value);
  };

  const onClick = (e) => {
    setActiveSuggestion(0);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    setUserInput(e.currentTarget.innerText);
  };

  const onKeyDown = (e) => {
    // const { activeSuggestion, filteredSuggestions } = this.state;

    // User pressed the enter key
    if (e.keyCode === 13) {
      setActiveSuggestion(0);
      setShowSuggestions(false);
      setUserInput(filteredSuggestions[activeSuggestion]);
    }
    // User pressed the up arrow
    else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      setActiveSuggestion(activeSuggestion - 1);
    }
    // User pressed the down arrow
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      setActiveSuggestion(activeSuggestion + 1);
    }
  };

  let suggestionsListComponent;

  if (showSuggestions && userInput) {
    if (filteredSuggestions.length) {
      suggestionsListComponent = (
        <CountryList>
          {filteredSuggestions.map((suggestion, index) => {
            let className;

            // Flag the active suggestion with a class
            if (index === activeSuggestion) {
              className = "suggestion-active";
            }

            return (
              <CountryListItem
                className={className}
                key={suggestion}
                onClick={onClick}
              >
                {suggestion}
              </CountryListItem>
            );
          })}
        </CountryList>
      );
    } else {
      suggestionsListComponent = (
        <NoSuggestion>
          <em>No matching country found!</em>
        </NoSuggestion>
      );
    }
  }

  return (
    <Fragment>
      <Wrapper>
        <div className="input-group">
          <CountryInput
            placeholder="Country"
            aria-label="Country"
            className="form-control"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={userInput}
          />
          <InputGroup.Append>
            <Button
              variant="secondary"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit(userInput);
              }}
            >
              <FaSearch size="20" color="#ffffff" />
            </Button>
          </InputGroup.Append>
        </div>

        {suggestionsListComponent}
        <h5 className="mt-3 text-center">{showCountryName()}</h5>
      </Wrapper>

      <Stats
        url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
      ></Stats>
    </Fragment>
  );
}
