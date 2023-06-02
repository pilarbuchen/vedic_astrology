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
    planetSVG: string
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
  const logo = require("./mars.svg") as string; 
  console.log(signs)

  function generate(element: React.ReactElement) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }
  
  const renderList = signs?.map((item) => (
    <li>
      <img src={logo}/>
        {item.planets + ' : ' + item.signs }
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
       
    <div>
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
 <Grid item xs={12} md={6}>
   <List dense={dense}>
     {generate(
       <ListItem>
      Test
       </ListItem>,
     )}
   </List>
</Grid>
<>
        <ul>
          <img
            src={
              'data:image/png;base64,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'
            }></img>
          <li>Test: One</li>
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
