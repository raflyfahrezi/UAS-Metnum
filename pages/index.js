import Navbar from '../component/navbar/navbar'
import Header from '../component/header/header'
import InterpolasiLinier from '../component/materi/interpolasi-linier/interpolasiLinier'
import Head from '../component/head/head'
import NavBar from '../component/navbar/navbar'

const Index = () => {
    return (
        <div>
            <NavBar/>
            <Head title="Interpolasi Linier"/>
            <Header title="Interpolasi Linier"/>
            <InterpolasiLinier/>
            <style jsx global>
                {
                    `
                        @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

                        .montserrat {
                            font-family: 'Montserrat', sans-serif;
                        }

                        .button-dark {
                            padding: .375rem .75rem;
                            font-size: 1rem;
                            line-height: 1.5;
                            border-radius: .25rem;
                            transition: 0.5s;
                            color: #fff;
                            background-color: #343a40;
                            border-color: #343a40;
                            cursor: pointer;
                        }

                        .button-dark:active {
                            transform: scale(0.9);
                        }
                        
                        * {
                            padding: 0;
                            margin: 0;
                            box-sizing: border-box;
                        }
                    `
                }
            </style>
        </div>
    )
}

export default Index