const InputXY = props => {
    return(
        <div className="inputXY">
            <div className="inputXY__xy">
                <p className="montserrat">x{ props.number } : </p>
                <input type="text" className="inputXY__input montserrat" autoComplete="off" id={ "x" + props.number }></input>
            </div>
            <div className="inputXY__xy">
                <p className="montserrat">y{ props.number } : </p>
                <input type="text" className="inputXY__input montserrat" autoComplete="off" id={ "y" + props.number }></input>
            </div>
            <style jsx>
                {
                    `
                        .inputXY__xy {
                            padding: 10px;
                            display: flex;
                            align-items: center;
                        }   

                        .inputXY__input {
                            width: 100px;
                            margin-left: 10px;
                            padding: 5px;
                        }
                    `
                }
            </style>
        </div>
    )
}

export default InputXY