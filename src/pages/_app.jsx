import "tailwindcss/tailwind.css";
import Image from 'next/image';
import Head from 'next/head';

function App({ Component, pageProps }) {
    return(
        <>
            <Head>
                <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <Component {...pageProps} />
            <footer className="flex justify-center pb-10">
                <a href="https://github.com/danielyefet/uk-vax" className="mr-2 opacity-20 hover:opacity-50">
                    <Image
                        src="/icons/github.png"
                        width="20"
                        height="20"
                    />
                </a>
                <a href="https://twitter.com/danyefet" className="opacity-20 hover:opacity-50">
                    <Image
                        src="/icons/twitter.png"
                        width="20"
                        height="20"
                    />
                </a>
            </footer>
        </>
    );
}

export default App;