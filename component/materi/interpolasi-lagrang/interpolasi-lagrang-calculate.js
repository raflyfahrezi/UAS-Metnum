const InterpolasiLagrangCalculate = (xyparams, xparams) => {
    const untuk_X_Ke = xparams
    let xy = xyparams
    let x = []
    let y = []
    let total = 0

    const hitungAtas = (xArrayHitungAtas, xHitungAtas, yHitungAtas) => {
        let result = 1

        for (let i = 0; i < xArrayHitungAtas.length; i++) {
            if ((i + 1) != yHitungAtas) {
                result *= xHitungAtas - xArrayHitungAtas[i] 
            }
        }

        return result
    }

    const hitungBawah = (xArrayHitungBawah, yHitungBawah) => {
        let result = 1

        for (let i = 0; i < xArrayHitungBawah.length; i++) {
            if ((i + 1) != yHitungBawah) {
                result *= xArrayHitungBawah[yHitungBawah-1] - xArrayHitungBawah[i]
            }
        }

        return result
    }

    const hitungAtasBawah = (xArrayHitungAtasBawah, xHitungAtasBawah, yHitungAtasBawah) => {
        return hitungAtas(xArrayHitungAtasBawah, xHitungAtasBawah, yHitungAtasBawah) / hitungBawah(xArrayHitungAtasBawah, yHitungAtasBawah)
    }

    if (xy.length != 0) {
        for (let i = 0; i < xy.length; i++) {
            if (i % 2 == 1) {
                y.push(xy[i])
            } else {
                x.push(xy[i])
            }
        }

        for (let i = 1; i <= y.length; i++) {
            total += y[i-1] * hitungAtasBawah(x, untuk_X_Ke, i)
        }

        total = (total.toFixed(3)).toString()
        console.log(total)
        return total
    }
}

export default InterpolasiLagrangCalculate