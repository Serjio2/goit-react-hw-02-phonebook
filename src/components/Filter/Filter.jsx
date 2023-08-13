import { StyledFilter } from "./Filter.styled";

export const Filter = ({ value, onChange }) => {
  return (
    <StyledFilter>
      <label>
        <span>Find contacts by name:</span>
        <input
          type="text"
          value={value}
          onChange={event => onChange(event.target.value)}
        />
      </label>
    </StyledFilter>
  );
};
