import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Moment from 'moment';

const MapEvent = ({ eventName, description, eventStartDateTime, eventEndDateTime, eventContractAddress, price, addressLine1, addressLine2, city, state, zipPostalCode, country, id }) => (
  <div className="map__events-container">
    <div className="map__events-image-container">
      <Link
        to={{ pathname:
        '/events/' + eventName,
        query: {
          eventName,
          description,
          eventStartDateTime,
          eventEndDateTime,
          eventContractAddress,
          price,
          addressLine1,
          addressLine2,
          city,
          state,
          zipPostalCode,
          country,
          id,
        },
      }}
      ><img className="map__events-image" src={require('../../styles/images/ticketsherpa-logo.png')} /></Link>
    </div>
    <div className="map__events-text">
      <h2><Link
        to={{ pathname:
        '/events/' + eventName,
        query: {
          eventName,
          description,
          eventStartDateTime,
          eventEndDateTime,
          eventContractAddress,
          price,
          addressLine1,
          addressLine2,
          city,
          state,
          zipPostalCode,
          country,
          id,
        },
      }}
      >{eventName}</Link></h2>
      <p>Date: {Moment(eventStartDateTime).format('MMM Do YYYY, h:mm A')}</p>
      <p>Price: {price / 1000000000000000000} ETH</p>
      <p>City: {city + ', ' + state}</p>
    </div>
  </div>
);

export default MapEvent;
