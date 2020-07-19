import Head from "next/head"

const CustomHead = props => {
    return (
        <Head>
            <link rel="shortcut icon" href="./beta.svg"/>
            <title>{ props.title }</title>
        </Head>
    )
}

export default CustomHead