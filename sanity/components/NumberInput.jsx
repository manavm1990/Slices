import PropTypes from "prop-types";
import React from "react";

// https://www.sanity.io/docs/custom-input-widgets
import FormField from "part:@sanity/components/formfields/default";
import PatchEvent, { set, unset } from "part:@sanity/form-builder/patch-event";

/**
 * Sanity's internal API 🧙🏽‍♂️
 * https://www.sanity.io/docs/custom-input-widgets#styling-the-slider-8c934059fbec
 * @param {string} value
 */
const createPatchFrom = (value) =>
  PatchEvent.from(value ? set(Number(value)) : unset());

const NumberInput = ({
  type: { title, description },
  value,
  onChange,
  inputComponent,
}) => {
  return (
    <>
      <FormField
        label={`${title} - ${Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(value / 100)}`}
        description={description || ""}
      >
        <input
          type="number"
          value={value}
          onChange={({ target }) => onChange(createPatchFrom(target.value))}
          ref={inputComponent}
        />
      </FormField>
    </>
  );
};

NumberInput.focus = function sanityFocus() {
  this._inputElement.focus();
};

NumberInput.propTypes = {
  type: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
  value: PropTypes.number,
  inputComponent: PropTypes.element.isRequired,
  onChange: PropTypes.func.isRequired,
};

NumberInput.defaultProps = {
  value: 0,
};

export default NumberInput;
