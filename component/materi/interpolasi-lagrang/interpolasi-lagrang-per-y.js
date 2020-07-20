const InterpolasiLagrangPerY = props => {
    return (
        <div className="satu">
            <p className="montserrat">y1</p>
            <div>
                <div className="second">
                    <p className="montserrat">(x - x2) &times; (x - x3)</p>
                </div>
                <div>
                    <p className="montserrat">(x1 - x2) &times; (x1 - x3)</p>
                </div>
            </div>
            <style jsx>
                {
                    `
                        .satu {
                            width: max-content;
                            display: flex;
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