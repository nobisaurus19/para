import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

export const ResultComponent = (props) => {
  const { name, location, rating } = props ;

  const filledDucks = Array.from({ length: rating }).map((_, index) => (
    <img
      src={`${process.env.PUBLIC_URL}/fullduck.png`}
      alt="star"
      className="duckrating"
      key={index}
    />
  ));

  const emptyDucks = Array.from({ length: 5 - rating }).map((_, index) => (
    <img
      src={`${process.env.PUBLIC_URL}/emptyduck.png`}
      alt="star"
      className="duckrating"
      key={index}
    />
  ));

  return (
    <div class="resultinfo">
      <p class="resultcoworkname">{name}</p>
      <p class="resultlocation">{location}</p>
      <p class="resultrating">
        {filledDucks}
        {emptyDucks}
      </p>
        <button type="submit" onClick={() => {
          window.location.href = `/cowork/${props.placeId}`;
        }} id="more">
          More Detail
        </button>
    </div>
  );
};
