//import AppleSvg from '../assets/apple.png'
import React from 'react';
import { ShakeButton } from '../features/shakeFeature/ShakeButton';
import { Tree } from '../components/Tree/Tree';
import Basket from '../components/Basket/Basket';

class FirstCase extends React.Component {
    render() {    
        return (
            <div className='background'>
      
                 <Tree />
                 <Basket />
                <ShakeButton />
            </div>
        );
    }
}
export default FirstCase;