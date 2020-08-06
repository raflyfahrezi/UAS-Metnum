import React, { useEffect, useState } from 'react'

import InputXY from '../inputXY/inputXY'
import InterpolasiLagrangCalculate from './interpolasi-lagrang-calculate'
import InterpolasiLagrangStep from './interpolasi-lagrang-step'

const InterpolasiLagrang = () => {
    const [xNeeded, setXNeeded] = useState([1, 2, 3])
    const [xy, setXY] = useState([])
    const [forX, setForX] = useState([])
    const [result, setResult] = useState([])

    useEffect(() => {
        const resultTemp = []

        for (let i = 0; i < forX.length; i++) {
            resultTemp.push(InterpolasiLagrangCalculate(xy, forX[i]))
        }
        
        console.log(resultTemp)
        setResult(resultTemp)
    }, [xy])

    const calculate = () => {
        let xytemp = []

        let temp2 = document.getElementById("inputX").value
        temp2 = temp2.split(" ")

        for (let i = 1; i <= xNeeded.length; i++) {
            xytemp.push(document.getElementById("x" + i).value)
            xytemp.push(document.getElementById("y" + i).value)
        }
        
        setForX(temp2)
        setXY(xytemp)
    }

    const updateX = event => {
        const temp = []

        for (let i = 1; i <= event.target.value; i++) {
            temp.push(i)
        }

        setXNeeded(temp)
    }

    return (
        <div>
            <div className="card">
                <div className="card__content">
                    <p className="title montserrat">Masukan x dan y</p>
                    <div className="card__select">
                        <p className="montserrat">Jumlah x dan y : </p>
                        <select name="totalX" id="totalX" className="select" onChange={ updateX }>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </select>
                    </div>
                    <div className="card__input">
                        { xNeeded.map((item, index) => (
                            <InputXY number={ "" + item } key={ index }/>
                        )) }
                    </div>
                    <div className="card__input">
                        <p className="montserrat">Untuk x = </p>
                        <input type="text" className="input_x" placeholder="cth: 2 3 4 8 9" autoComplete="off" id="inputX"></input>
                    </div>
                    <div className="card__button">
                        <button type="button" className="button-dark montserrat" id="calculate" onClick={ calculate }>Calculate</button>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card__content">
                    <p className="title montserrat">Hasil</p>
                    { result.length < 1 ? (
                        <div>

                        </div>
                    ) : (
                        <div>
                            { forX.map((item, index) => (
                                <div className="card__result" key={ index }>
                                    <p className="montserrat">Untuk x = { forX[index] }</p>
                                    <InterpolasiLagrangStep xy={ xy } forX={ forX[index] } result={ result }/>
                                </div>
                            )) }
                        </div>
                    )}
                </div>  
            </div>
            <style jsx>
                {
                    `
                        .card {
                            width: 100%;
                            max-width: 1000px;
                            margin: 30px auto;
                            background-color: #fff;
                            background-clip: border-box;
                            border: 1px solid rgba(0,0,0,.125);
                            border-radius: .25rem;
                            padding: 20px;
                        }

                        .card__content {
                            text-align: center;
                        }

                        .card__select {
                            width: max-content;
                            display: flex;
                            align-items: center;
                            margin: 20px auto;
                        }

                        .card__input {
                            width: max-content;
                            max-width: 800px;
                            margin: 20px auto;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            flex-wrap: wrap;
                        }

                        .card__result {
                            padding: 20px 0;
                        }

                        .select {
                            padding: 5px;
                            margin-left: 10px;
                        }

                        .input_x {
                            width: 100px;
                            margin-left: 10px;
                            padding: 5px;
                        }

                        .title {
                            font-size: 20px;
                        }
                    `
                }
            </style>
        </div>
    )
}

export default InterpolasiLagrang