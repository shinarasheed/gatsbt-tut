import React from 'react';
import SingleTour from './SingleTour';
import styles from '../../css/items.module.css';
import PropTypes from 'prop-types';

const Tours = ({ tours }) => {
  console.log(tours);
  return (
    <section className={styles.tours}>
      <h2>our tours</h2>
      <div className={styles.center}>
        {/* what syntax is used here. it should be a callback function with node in brackets */}
        {/* are we destructing the node here */}
        {tours.map(({ node }) => {
          return <SingleTour key={node.id} tour={node} />;
        })}
      </div>
    </section>
  );
};

Tours.propTypes = {
  tours: PropTypes.array.isRequired
};
export default Tours;
