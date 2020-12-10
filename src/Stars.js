import React from 'react';
import PropTypes from 'prop-types';

import Star from './Star';
import { isNumber, makeUniqueId } from './utils';

export default function StarRating({ rating, config = {}, style = {} }) {
  const id = makeUniqueId();
  // number of full, 'half' and empty stars
  const full = Math.floor(rating);
  const half = Math.round((rating - full) * 100) / 100;
  const empty = Math.floor(5 - rating);
  // partial arrays
  const fullArr = Array(full).fill(1);
  const halfArr = half !== 0 ? [half] : [];
  const emptyArr = Array(empty).fill(0);
  // array of star-to-be numbers
  const stars = fullArr.concat(halfArr).concat(emptyArr);
  // font size of rating text will be half of the star size, with a min value of 16px
  let fontSize = config.size && isNumber(config.size) ? config.size : 20;
  fontSize = fontSize / 2 < 16 ? 16 : fontSize / 2;
  // TODO all this array thing a little more efficiently

  return (
    <div style={{ display: 'flex', marginBottom: 14, ...style }}>
      {stars.map((star, i) => (
        <Star key={i} id={id} full={star} config={config} />
      ))}
      {config.showText && (
        <span
          style={{
            fontSize,
            color: '#7f7f7f',
            lineHeight: 1,
            alignSelf: 'center',
            marginLeft: 8,
          }}
        >
          {rating}
        </span>
      )}
    </div>
  );
}

StarRating.propTypes = {
  config: PropTypes.object,
  rating: PropTypes.number,
  style: PropTypes.object,
};
