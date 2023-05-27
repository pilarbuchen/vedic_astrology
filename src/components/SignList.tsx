import React from 'react';

interface SignsProps {
 signs: {output: [index: {name: string, currentSign: string}]},
}

const SignList: React.FC<SignsProps> = ({signs}) => {

console.log(signs)

        return (
          <div>

          </div>
        );
       }


export default SignList;

