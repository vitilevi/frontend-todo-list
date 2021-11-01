import React from 'react';
import PropTypes from 'prop-types'

export default function Task({ task }) {
  return (
    <div>
      <p>{ task.name }</p>
      <p>{ task.date }</p>
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    name: PropTypes.string,
    date: PropTypes.string,
  }),
};