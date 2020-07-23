import { useEffect, useState } from 'react'

const InterpolasiLagrangPerY = props => {
    const [ hitungAtas, setHitungAtas ] = useState('')
    const [ hitungBawah, setHitungBawah ] = useState('')
    const [ isPlus ] = useState(props.plus)
    const [ yState ] = useState(props.y)

    const forx = props.forx
    const x = props.x
    const y = props.y

    useEffect(() => {
        const hitungAtas = (xArrayHitungAtas, xHitungAtas, yHitungAtas) => {
            let result = ''
    
            for (let i = 0; i < xArrayHitungAtas.length; i++) {
                if ((i + 1) != yHitungAtas) {
                    result += `(${xHitungAtas} - ${xArrayHitungAtas[i]})` 
                }
            }
    
            setHitungAtas(result)
        }

        const hitungBawah = (xArrayHitungBawah, yHitungBawah) => {
            let result = ''
    
            for (let i = 0; i < xArrayHitungBawah.length; i++) {
                if ((i + 1) != yHitungBawah) {
                    result += `(${xArrayHitungBawah[yHitungBawah-1]} - ${xArrayHitungBawah[i]})`
                }
            }
    
            setHitungBawah(result)
        }

        console.log(x)
        hitungAtas(x, forx, y)
        hitungBawah(x, y)
    })

    return (
        <div className="satu">
            { isPlus == 0 ? (
                <p className="padding-right montserrat">{ yState }</p>
            ) : (
                <p className="padding-right montserrat">{ '+ ' + yState }</p>
            ) }
            <div>
                <div className="second">
                    <p className="montserrat">{ hitungAtas }</p>
                </div>
                <div>
                    <p className="montserrat">{ hitungBawah }</p>
                </div>
            </div>
            <style jsx>
                {
                    `
                        .padding-right {
                            padding-right: 5px;
                        }

                        .satu {
                            width: max-content;
                            display: flex;
                            align-items: center;
                            padding: 0 5px;
                        }

                        .second {
                            border-bottom: 1px solid black;
                        }
                    `
                }
            </style>
        </div>
    )
}

export default InterpolasiLagrangPerY