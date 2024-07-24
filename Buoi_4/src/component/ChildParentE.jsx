import React from 'react'
import PropTypes from 'prop-types';
const ChildParentE = ({a}) => {
  return (
    <div>A = {a}</div>
  )
}


ChildParentE. PropTypes = {
    a: PropTypes.number.isRequired
};
export default ChildParentE;