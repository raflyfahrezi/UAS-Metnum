import React, { useEffect, useState } from 'react' 

import InputXY from '../inputXY/inputXY'
import validasiAngka from '../validasi/validasiAngka'
import interpolasiLinierCalculate from './interpolasi-linier-calculate'
import InterpolasiResult from './interpolasi-linier-step'

const interpolasiLinier = () => {
    const [result, setResult] = useState([])
    const [x1y1, setx1y1] = useState([])
    const [x2y2, setx2y2] = useState([])
    const [x, setx] = useState([])
    const [isResult, setIsResult] = useState(false)
    
    useEffect(() => {
        let x1y1Temp = []
        let x2y2Temp = []
        let resultTemp = []
        let inputX = ''

        document.getElementById("calculate").addEventListener("click", () => {
            x1y1Temp = []
            x2y2Temp = []
            resultTemp = []
            
            if (validasiAngka(document.getElementById("x1").value)) {
                x1y1Temp.push(document.getElementById("x1").value)
            }

            if (validasiAngka(document.getElementById("y1").value)) {
                x1y1Temp.push(document.getElementById("y1").value)
            }

            if (validasiAngka(document.getElementById("x2").value)) {
                x2y2Temp.push(document.getElementById("x2").value)
            }

            if (validasiAngka(document.getElementById("y2").value)) {
                x2y2Temp.push(document.getElementById("y2").value)
            } 

            if (document.getElementById("inputX"). value) {
                inputX = document.getElementById("inputX").value
                inputX = inputX.split(" ")
            } 
            
            for (let i = 0; i < inputX.length; i++) {
                if (validasiAngka(inputX[i])) {
                    resultTemp.push(interpolasiLinierCalculate(x1y1Temp, x2y2Temp, inputX[i]))
                }
            }

            setResult(resultTemp)
            setx1y1(x1y1Temp)
            setx2y2(x2y2Temp)
            setx(inputX)
            setIsResult(true)
        })

    }, [])

    return (
        <div>
            <div className="card">
                <div className="card__content">
                    <p className="title montserrat">Masukan x dan y</p>
                    <div className="card__input">
                        <InputXY number="1"/>
                        <InputXY number="2"/>
                    </div>
                    <div className="card__input">
                        <p className="montserrat">Untuk x = </p>
                        <input type="text" className="input_x" placeholder="cth: 2 3 4 8 9" autoComplete="off" id="inputX"></input>
                    </div>
                    <div className="card__button">
                        <button type="button" className="button-dark montserrat" id="calculate">Calculate</button>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card__content">
                    <p className="title montserrat">Hasil</p>
                    { !isResult ? 
                        (
                            <div>
                                <p className="info montserrat">Belum ada perhitungan</p>
                            </div>
                        ) : (
                            <div>
                                {result.map((item, index) => (
                                    <div className="card__result" key={ index }>
                                        <p className="montserrat">Untuk x = { x[index] }</p>
                                        <InterpolasiResult x1y1={ x1y1 } x2y2={ x2y2 } x={ x[index] } result={ item }/>
                                    </div>
                                ))}
                            </div>
                        ) 
                    }
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

                        .card__input {
                            width: max-content;
                            margin: 20px auto;
                            display: flex;
                            align-items: center;
                        }

                        .card__result {
                            margin: 20px auto;
                        }

                        .info {
                            margin: 20px;
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

export default interpolasiLinier