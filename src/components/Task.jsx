import React from 'react';
import PropTypes from 'prop-types'

export default function Task({ task }) {
  return (
    <div className="d-flex my-2">
      <input type="checkbox" className="mx-2 my-1" />
      <p>{ task.name }</p>
      <p>{ task.date }</p>
      <p>{ task.status }</p>
      <button>Delete</button>
    </div>
  );
}

Task.propTypes = {
  task: PropTypes.shape({
    name: PropTypes.string,
    date: PropTypes.string,
  }),
};