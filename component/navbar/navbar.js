import Link from 'next/link'

const NavBar = () => {
    return (
        <nav className="nav">
            <div className="nav__wrapper">
                <Link href="./">
                    <a className="a montserrat">
                        <div className="nav__link">
                            <p className="link">Interpolasi Linier</p>
                        </div>
                    </a>
                </Link>
                <Link href="./interpolasilagrange">
                    <a className="a montserrat">
                        <div className="nav__link">
                            <p>Interpolasi Lagrange</p>
                        </div>
                    </a>
                </Link>
                <Link href="">
                    <a className="a montserrat">
                        <div className="nav__link">
                            <p>Regresi Linier</p>
                        </div>
                    </a>
                </Link>
                <Link href="">
                    <a className="a montserrat">
                        <div className="nav__link">
                            <p>Regresi Polinomial</p>
                        </div>
                    </a>
                </Link>
            </div>
            <style jsx>
                {
                    `
                        .nav {
                            width:100%;
                        }

                        .nav__wrapper {
                            width: 100%;
                            max-width: 1200px;
                            margin: 0 auto;
                            display: flex;
                            justify-content: space-around;
                        }

                        .nav__link {
                            padding: 20px 10px; 
                            border-bottom: 1px solid white;
                            transition: 0.5s;
                        }

                        .nav__link:hover {
                            border-bottom: 1px solid black;
                        }

                        .a {
                            text-decoration: none;
                            color: black; 
                        }
                    `
                }
            </style>
        </nav>
    )
}

export default NavBar