import React, { useEffect, useState } from 'react'

import InputXY from '../inputXY/inputXY'

const InterpolasiLagrang = () => {
    const [xNeeded, setXNeeded] = useState([1, 2, 3])

    useEffect(() => {
        
    }, [xNeeded])

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
                        <p className="montserrat">Jumlah x : </p>
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
                            <InputXY number={ "" + item }/>
                        )) }
                    </div>
                    <div className="card__button">
                        <button type="button" className="button-dark montserrat" id="calculate">Calculate</button>
                    </div>
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

                        .select {
                            padding: 5px;
                            margin-left: 10px;
                        }
                    `
                }
            </style>
        </div>
    )
}

export default InterpolasiLagrang