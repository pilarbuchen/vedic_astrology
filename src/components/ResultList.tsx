/* eslint-disable jsx-a11y/alt-text */
import {
  createTheme,
  ThemeProvider,
} from '@mui/material/styles';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
import {
  Avatar,
  Grid,
  ListItemAvatar,
} from '@mui/material';
import dataSVG from '../image/data';

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
  const renderList = signs?.map((item) => (
    <ListItem
      style={{
        marginLeft: '180px',
      }}>
      <ListItemAvatar>
        <Avatar
          src={item.planetSVG}
          sx={{ width: 20, height: 20 }}
          style={{
            objectFit: 'contain',
          }}
        />
      </ListItemAvatar>
      <ListItemText
        primary={
          item.planets + ' : ' + item.signs
        }
      />
    </ListItem>
  ));

  let dummyText: string[] = [
    'Ttile 1',
    'Ttile 2',
    'Ttile 3',
    'Ttile 4',
    'Ttile 5',
    'Ttile 6',
    'Ttile 7',
    'Ttile 8',
    'Ttile 9',
    'Ttile 10',
    'Ttile 11',
    'Ttile 12',
  ];
  let dummyArray: any = [];

  dummyText.forEach(function (v, i) {
    let obj = {
      text: '',
      planetSVG: '',
    };
    obj.text = v;
    obj.planetSVG = dataSVG[i];
    dummyArray.push(obj);
  });

  const renderFakeList = dummyArray.map(
    (item: {
      planetSVG: string | undefined;
      text:
        | string
        | number
        | boolean
        | React.ReactElement<
            any,
            | string
            | React.JSXElementConstructor<any>
          >
        | React.ReactFragment
        | React.ReactPortal
        | null
        | undefined;
    }) => (
      <ListItem
        style={{
          marginLeft: '180px',
        }}>
        <ListItemAvatar>
          <Avatar
            src={item.planetSVG}
            sx={{ width: 20, height: 20 }}
            style={{
              objectFit: 'contain',
            }}
          />
        </ListItemAvatar>
        <ListItemText primary={item.text} />
      </ListItem>
    )
  );

  if (search && chart) {
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
      <ThemeProvider
        theme={createTheme({
          typography: {
            fontFamily: [
              '-apple-system',
              'BlinkMacSystemFont',
              '"Segoe UI"',
              'Roboto',
              '"Helvetica Neue"',
              'Arial',
              'sans-serif',
              '"Apple Color Emoji"',
              '"Segoe UI Emoji"',
              '"Segoe UI Symbol"',
            ].join(','),
          },
        })}>
        <div>
          {search && chart ? (
            <>
              <Grid
                direction="row"
                container
                columns={16}>
                <Grid
                  item
                  xs={12}>
                  {renderList}
                </Grid>
                <Grid
                  item
                  xs={4}>
                  <img
                    style={{
                      marginTop: '50%',
                    }}
                    src={chart}
                    alt={'chart'}
                  />
                </Grid>
              </Grid>
            </>
          ) : (
            <></>
          )}
          {fixed ? (
            <>
              <Grid
                direction="row"
                container
                columns={16}>
                <Grid
                  item
                  xs={8}>
                  {renderFakeList}
                </Grid>
                <Grid
                  item
                  xs={4}>
                  <img
                    style={{
                      marginTop: '50%',
                    }}
                    src={
                      'https://www.swatijrjyotish.com/uploads/3/6/8/3/3683605/2113310.png?444'
                    }
                    alt={'chart'}
                  />
                </Grid>
              </Grid>
            </>
          ) : (
            <></>
          )}
        </div>
      </ThemeProvider>
    </>
  );
}

export default ResultList;
