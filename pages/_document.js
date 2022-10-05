import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head >
            
                <link
                    async
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
                />
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" async></script>
                <script src="https://kit.fontawesome.com/a1c4c0eac6.js" crossOrigin="anonymous" async></script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}