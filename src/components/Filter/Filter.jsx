import PropTypes from 'prop-types';

import { StyledFilter } from './Filter.styled';


const Filter = ({ setFilter, filterState }) => {
  return (
    <StyledFilter>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={filterState}
        onChange={setFilter}
      />
    </StyledFilter>
  );
};

export default Filter;

Filter.propTypes = {
  filterState: PropTypes.string,
  setFilter: PropTypes.func,
};
