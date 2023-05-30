import React from 'react';

interface SignsProps {
 signs: {planets: string, signs: string | number}[]
}

function SignList ({signs}: SignsProps) {

if (signs) {
  for (const [key, value] of Object.entries(signs)) {
    if (value.signs === 1) {
      value.signs = 'Aries'
    } else if (value.signs === 2) {
      value.signs = 'Taurus'
    } else if (value.signs === 3) {
      value.signs = 'Gemini'
    } else if (value.signs === 4) {
      value.signs = 'Cancer'
    } else if (value.signs === 5) {
      value.signs = 'Leo'
    } else if (value.signs === 6) {
      value.signs = 'Virgo'
    } else if (value.signs === 7) {
      value.signs = 'Libra'
    } else if (value.signs === 8) {
      value.signs = 'Scorpio'
    } else if (value.signs === 9) {
      value.signs = 'Sagittarius '
    } else if (value.signs === 10) {
      value.signs = 'Capricorn'
    } else if (value.signs === 11) {
      value.signs = 'Aquarius'
    } else if (value.signs === 12) {
      value.signs = 'Pisces'
    }
  
    console.log(value.signs)
  }
  
}

        return (
          <>
<>{signs?.map(p => p.planets + p.signs)}</>
</>
        );
        };



export default SignList;

