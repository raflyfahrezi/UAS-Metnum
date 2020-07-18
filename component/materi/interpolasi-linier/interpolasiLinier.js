import React, { useEffect, useState } from 'react' 
import InputXY from '../inputXY/inputXY'
import validasiAngka from '../validasi/validasiAngka'

const interpolasiLinier = () => {
    const[x1y1, setX1Y1] = useState([])
    const[x2y2, setX2Y2] = useState([])
    
    useEffect(() => {
        const x1y1Temp = []
        const x2y2Temp = []

        document.getElementById("calculate").addEventListener("click", () => {
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

            console.log(x1y1Temp)
            console.log(x2y2Temp)
        })
    }, [])

    return (
        <div className="card">
            {/* <div className="card__title">
                <p className="title montserrat">Masukan x dan y</p>
            </div> */}
            <div className="card__content">
                <p className="title montserrat">Masukan x dan y</p>
                <div className="card__input">
                    <InputXY number="1"/>
                    <InputXY number="2"/>
                </div>
                <div className="card__button">
                     <button type="button" className="button-dark montserrat" id="calculate">Calculate</button>
                </div>
            </div>
            <style jsx>
                {
                    `
                        .card {
                            width: 100%;
                            max-width: 1000px;
                            margin: 0 auto;
                            background-color: #fff;
                            background-clip: border-box;
                            border: 1px solid rgba(0,0,0,.125);
                            border-radius: .25rem;
                            padding: 20px;
                        }

                        .card__title {
                            text-align: center;
                        }

                        .card__content {
                            text-align: center;
                        }

                        .card__input {
                            width: max-content;
                            margin: 20px auto;
                            display: flex;
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