import React from 'react'
import TreeSvg  from '../../assets/tree.svg'
import { useSelector } from 'react-redux'
import '../Tree/Tree.sass'
import '../Apple/Apple.sass'
import Apple from '../Apple/Apple'

export function Tree() {

    //get shake tree state
    const shakeTreeOn = useSelector((state) => state.stateApple.shakeTree)
    //get fallings apple animations states
    const FallOnFirst = useSelector((state) => state.stateApple.firstAnimation)
    const FallOnSecond = useSelector((state) => state.stateApple.secondAnimation)
    const FallOnThird = useSelector((state) => state.stateApple.thirdAnimation)
    const fallOnFourth = useSelector((state) => state.stateApple.fourthAnimation)

    return (
        <div>
            <div>
             <img
                src={TreeSvg}
                alt="tree"
                width={'40%'}
                className=
                {`treePadding ${shakeTreeOn
                    ? 'shakeTreeEffect' : null
                    }`}
            />
            <div className='applePadding'>
            <Apple  className={`a1 ${FallOnFirst ? 'fallAppleEffect' : null }`}></Apple>
            <Apple  className={`a2 ${FallOnSecond ? 'fallAppleEffect' : null }`}></Apple>
            <Apple  className={`a3 ${FallOnThird ? 'fallAppleEffect' : null }`}></Apple>
            <Apple  className={`a4 ${fallOnFourth ? 'fallAppleEffect' : null }`}></Apple>
            <Apple  className={`a5 ${fallOnFourth ? 'fallAppleEffect' : null }`}></Apple>
            </div>
            </div>
        </div>
    )
}