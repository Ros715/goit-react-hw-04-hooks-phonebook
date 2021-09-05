//import styles from "./Filter.module.css";
import PropTypes from "prop-types";

function Filter({ onChange }) {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        onChange={(e) => {
          //console.log(e.currentTarget.value);
          onChange(e.currentTarget.value);
        }}
      />
    </div>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Filter;
