import React, { useEffect } from 'react'

import InterpolasiLagrangPerY from './interpolasi-lagrang-per-y'

const InterpolasiLagrangStep = props => {
    const xy = props.xy
    const forX = props.forX
    const result = props.result

    
    // useEffect(() => {

    // }, [])

    return(
        <div>
            <InterpolasiLagrangPerY xy={ xy } forx={ forX } result={ result } />
        </div>
    )
}

export default InterpolasiLagrangStep