const Header = props => {
    return (
        <div className="header">
            <div className="header__wrapper">
                <p className="title montserrat">{ props.title }</p>
            </div>
            <style jsx>
                {
                    `   
                        .header {
                            width: 100%;
                            height: auto;
                        }

                        .header__wrapper {
                            width: 100%;
                            max-width: 1200px;
                            height: 350px;
                            margin: 0 auto;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }

                        .title {
                            font-size: 30px;
                            font-weight: bold;
                        }
                    `
                }
            </style>
        </div>
    )
}

export default Header