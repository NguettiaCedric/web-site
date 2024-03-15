import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Croissance Numerique"}
                </title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700;800;900&display=swap"
                    rel="stylesheet"
                />
                {/* <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.1.0/uicons-bold-straight/css/uicons-bold-straight.css'></link> */}
                
            </Head>
        </>
    )
}

export default PageHead