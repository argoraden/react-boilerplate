/* eslint-disable no-restricted-properties */
/* eslint-disable no-plusplus */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-array-index-key */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 *
 * Deposits
 *
 */

import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import moment from 'moment';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../Title';

function preventDefault(event) {
  event.preventDefault();
}

function abbreviateNumber(value) {
  let newValue = value;
  if (value >= 1000) {
    const suffixes = ['', 'Kk', 'M', 'B', 'T'];
    const suffixNum = Math.floor(`${value}`.length / 3);
    let shortValue = '';
    for (let precision = 2; precision >= 1; precision--) {
      shortValue = parseFloat(
        (suffixNum !== 0
          ? value / Math.pow(1000, suffixNum)
          : value
        ).toPrecision(precision),
      );
      const dotLessShortValue = `${shortValue}`.replace(/[^a-zA-Z 0-9]+/g, '');
      if (dotLessShortValue.length <= 2) {
        break;
      }
    }
    if (shortValue % 1 !== 0) shortValue = shortValue.toFixed(1);
    newValue = shortValue + suffixes[suffixNum];
  }
  return newValue;
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
    color: '#ffffff',
  },
});

export default function Deposits() {
  const classes = useStyles();
  const [item, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const dataCovid = await fetch('https://covid19.mathdro.id/api/');
    const setDataCovid = await dataCovid.json();
    const covids = [];
    covids.push(
      { label: 'Confirmed', covids: setDataCovid.confirmed },
      { label: 'Recovered', covids: setDataCovid.recovered },
      { label: 'Deaths', covids: setDataCovid.deaths },
      { label: 'Countries', covids: setDataCovid.countries },
      { label: 'CountryDetail', covids: setDataCovid.countryDetail },
      { label: 'DailySummary', covids: setDataCovid.dailySummary },
      { label: 'DailyTimeSeries', covids: setDataCovid.dailyTimeSeries },
      { label: 'Image', covids: setDataCovid.image },
      { label: 'LastUpdate', covids: setDataCovid.lastUpdate },
      { label: 'Source', covids: setDataCovid.source },
    );
    setItems(covids);
  };

  const totalVictims = item
    .filter(x => Object.prototype.hasOwnProperty.call(x.covids, 'value'))
    .map(element => element.covids.value)
    .reduce((total, index) => total + index, 0);

  const lastUpdate = item.filter(x => x.label === 'LastUpdate');

  return (
    <React.Fragment>
      <Title>Total cases (Worldwide)</Title>
      <Typography
        component="p"
        variant="h4"
        className={classes.depositContext}
      >
        {abbreviateNumber(totalVictims)}
      </Typography>
      <Typography className={classes.depositContext}>
        {lastUpdate.map(date =>
          moment(date.covids).format('dddd, MMMM D, YYYY'),
        )}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}
