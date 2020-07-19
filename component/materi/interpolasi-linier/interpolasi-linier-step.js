const { Fragment } = require("react")

const InterpolasiLinierSteps = props => {
    let x1 = props.x1y1[0] 
    let y1 = props.x1y1[1]
    let x2 = props.x2y2[0]
    let y2 = props.x2y2[1]
    let x = props.x
    let result = props.result

    return (
        <div className="result">
            <div className="result__step">
                <div className="result__step">
                    <p className="montserrat">y = { y1 } + </p>
                </div>
                <div className="result__step2">
                    <p className="divider montserrat">{ y2 + " - " + y1 }</p>
                    <p className="montserrat">{ x2 + " - " + x1 }</p>
                </div>
                <div className="result__step">
                    <p className="montserrat">( { x + " - " + x1 } ) = { result }</p>
                </div>
            </div>
            <style jsx> 
                {
                    `
                        .result {
                            width: max-content;
                            margin: 20px auto;
                            padding: 10px 20px;
                            border: 1px solid lightgrey
                        }

                        .result__step {
                            display: flex;
                            align-items: center;
                        }

                        .result__step2 {
                            margin: 0 6px;
                        }

                        .divider {
                            border-bottom: 1px solid black;
                        }
                    `
                }
            </style>
        </div>
    )
}

export default InterpolasiLinierSteps