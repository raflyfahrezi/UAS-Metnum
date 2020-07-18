const InterpolasiLinierCalculate = (x1y1, x2y2, xparams) => {
    const x1 = Number(x1y1[0])
    const y1 = Number(x1y1[1])
    const x2 = Number(x2y2[0])
    const y2 = Number(x2y2[1])
    const x = Number(xparams)
    let y = 0
    
    console.log(x1, y1, x2, y2, x )
    
    return y1 + ((y2 - y1) / (x2 - x1)) * (x - x1)
}

export default InterpolasiLinierCalculate