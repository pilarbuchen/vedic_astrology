import React from 'react';

interface SignsProps {
 signs: {[key: string]: number | string}[]
}

function SignList ({signs}: SignsProps) {

// if (signs) {
//   for (const [key, value] of Object.entries(signs)) {
//     if (value.sign === 1) {
//       value.sign = 'Aries'
//     }
//     console.log(value.sign)
//   }
  
// }

let astrologyOrder = {
  1: 'Aries', 
  2: 'Taurus',
  3: 'Gemini ',
  4: 'Cancer',
  5: 'Leo',
  6: 'Virgo',
  7: 'Libra',
  8: 'Scorpio',
  9: 'Sagitarius',
  10: 'Capricorn',
  11: 'Aquarius',
  12: 'Piscies'
}

        return (
          <>
<>{signs?.map(p => p.signs )}</>
</>
        );
        };



export default SignList;

