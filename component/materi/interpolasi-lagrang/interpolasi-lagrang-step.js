import React, { useEffect, useState } from 'react'

import InterpolasiLagrangPerY from './interpolasi-lagrang-per-y'

const InterpolasiLagrangStep = props => {
    const [ yState, setYState ] = useState([])
    const [ xState, setXState ] = useState([])

    const xy = props.xy
    const forX = props.forX
    const result = props.result

    let x = []
    let y = []
    
    useEffect(() => {
        const splitXY = () => {
            for (let i = 0; i < xy.length; i++) {
                if (i % 2 == 1) {
                    y.push(xy[i])
                } else {
                    x.push(xy[i])
                }
            }

            setYState(y)
            setXState(x)
        }

        splitXY()
    }, [])

    return(
        <div className="result">
            { yState.map((item, index) => (
                <InterpolasiLagrangPerY x={ xState } y={ item } forx={ forX } result={ result } plus={ index }/>
            )) }
            <style jsx>
                {
                    `
                        .result {
                            width: max-content;
                            margin: 0 auto;
                            display: flex;
                            padding: 10px 0;
                        }
                    `
                }
            </style>
        </div>
    )
}

export default InterpolasiLagrangStep