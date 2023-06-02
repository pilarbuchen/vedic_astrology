/* eslint-disable jsx-a11y/alt-text */
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';

interface SignsProps {
  signs: {
    planets: string;
    signs: string | number;
    id: number;
    planetSVG: string;
  }[];
  chart: string;
  search: boolean;
  fixed: boolean;
}

function ResultList({
  signs,
  chart,
  search,
  fixed,
}: SignsProps) {
  const [dense, setDense] = React.useState(false);
  const logo = require('./mars.svg') as string;
  console.log(signs);

  function generate(element: React.ReactElement) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      })
    );
  }

  const renderList = signs?.map((item) => (
    <li>
        <img src={item.planetSVG} />{item.planets + ' : ' + item.signs}
    </li>
  ));

  if (!search) {
    for (const [key, value] of Object.entries(
      signs
    )) {
      if (value.signs === 1) {
        value.signs = 'Aries';
      } else if (value.signs === 2) {
        value.signs = 'Taurus';
      } else if (value.signs === 3) {
        value.signs = 'Gemini';
      } else if (value.signs === 4) {
        value.signs = 'Cancer';
      } else if (value.signs === 5) {
        value.signs = 'Leo';
      } else if (value.signs === 6) {
        value.signs = 'Virgo';
      } else if (value.signs === 7) {
        value.signs = 'Libra';
      } else if (value.signs === 8) {
        value.signs = 'Scorpio';
      } else if (value.signs === 9) {
        value.signs = 'Sagittarius ';
      } else if (value.signs === 10) {
        value.signs = 'Capricorn';
      } else if (value.signs === 11) {
        value.signs = 'Aquarius';
      } else if (value.signs === 12) {
        value.signs = 'Pisces';
      }
    }
  }

  return (
    <>
      <div about="">
        {search && chart ? (
          <ul>
            <img
              src={chart}
              alt={'chart'}
            />
            {renderList}
          </ul>
        ) : (
          <></>
        )}
        {fixed ? (
          <>
            <Grid
              item
              xs={12}
              md={6}>
              <List dense={dense}>
                {generate(
                  <ListItem>Test</ListItem>
                )}
              </List>
            </Grid>
            <>
              <ul>
                <li>
                  
                  Test: One
                </li>
                <li>Test: Two</li>
                <li>Test: Three</li>
              </ul>
            </>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default ResultList;
