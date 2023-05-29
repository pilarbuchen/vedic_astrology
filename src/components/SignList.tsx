import React from 'react';

interface SignsProps {
 signs: {name: string, current_sign: number}
}

const SignList: React.FC<SignsProps> = ({signs}) => {
console.log(signs)

if (signs === undefined) {
  console.log('not here')
  return 
} else {
  // console.log(signs[0].name)
  console.log([signs])
  console.log([signs].map(sign => sign.name))
}
        return (
<>


</>
        
          // <ul className={'list-group'}>
          // {[signs].map(sign => <li className='list-group-item' key={sign.name}>{sign.current_sign} 
          // </li>)}
      // </ul>

        );
       }


export default SignList;

