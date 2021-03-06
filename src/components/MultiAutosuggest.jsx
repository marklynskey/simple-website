import { useState } from "react";
import Autosuggest from "react-autosuggest";

const data = [
  {
    title: "Auckland region",
    branches: [
      {
        name: "80 Queen Street, Auckland",
      },
      {
        name: "80 Queen Street, Auckland",
      },
    ],
  },
  {
    title: "Wellington region",
    branches: [
      {
        name: "Courtenay Place, Wellington",
      },
      {
        name: "Lambton Quay, Wellington",
      },
      {
        name: "Willis Street, Wellington",
      },
    ],
  },
];

const getSuggestions = (value) => {
  const tidy = (str) => str.trim().toLowerCase();

  return value === ""
    ? []
    : data
        .map((section) => {
          return {
            title: section.title,
            branches: section.branches.filter((branch) =>
              tidy(branch.name).includes(tidy(value))
            ),
          };
        })
        .filter((section) => section.branches.length > 0);
};

const getSuggestionValue = (suggestion) => suggestion.name;

const getSectionSuggestions = (section) => section.branches;

const renderSuggestion = (suggestion) => <span>{suggestion.name}</span>;

const renderSectionTitle = (section) => <span>{section.title}</span>;

const MultiAutosuggest = () => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    value,
    onChange,
  };

  return (
    <>
      <h2>Multi-section autosuggest:</h2>
      <Autosuggest
        multiSection={true}
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        renderSectionTitle={renderSectionTitle}
        getSectionSuggestions={getSectionSuggestions}
        inputProps={inputProps}
      />
    </>
  );
};

export default MultiAutosuggest;
