/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-properties */
/* eslint-disable array-callback-return */
/* eslint-disable no-prototype-builtins */
/**
 *
 * Chart
 *
 */

import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { useTheme } from '@material-ui/core/styles';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import Title from '../Title';

function abbreviateNumber(value) {
  let newValue = value;
  if (value >= 1000) {
    const suffixes = ['', 'K', 'M', 'B', 'T'];
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

export default function Chart() {
  const theme = useTheme();
  const [item, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const dataCovid = await fetch('https://covid19.mathdro.id/api/');
    const setDataCovid = await dataCovid.json();
    const covids = [];
    covids.push(
      { label: 'Confirmed', total: setDataCovid.confirmed.value },
      { label: 'Recovered', total: setDataCovid.recovered.value },
      { label: 'Deaths', total: setDataCovid.deaths.value },
    );
    setItems(covids);
  };

  return (
    <React.Fragment>
      <Title>Today</Title>
      <ResponsiveContainer>
        <LineChart
          data={item}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="label"
            stroke={theme.palette.text.secondary}
            padding={{ left: 30, right: 30 }}
          />
          <YAxis
            type="number"
            tickFormatter={abbreviateNumber}
            orientation="right"
            stroke={theme.palette.text.secondary}
          />
          <Tooltip formatter={value => abbreviateNumber(value)} />
          <Legend />
          <Line
            type="monotone"
            dataKey="total"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
