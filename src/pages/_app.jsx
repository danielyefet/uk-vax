import "tailwindcss/tailwind.css";
import Image from 'next/image';

function App({ Component, pageProps }) {
    return(
        <>
            <Component {...pageProps} />
            <footer className="flex justify-center pb-10">
                <a href="https://github.com/danielyefet/uk-vax" className="mr-2 opacity-20 hover:opacity-50">
                    <Image
                        src="/github.png"
                        width="20"
                        height="20"
                    />
                </a>
                <a href="https://twitter.com/danyefet" className="opacity-20 hover:opacity-50">
                    <Image
                        src="/twitter.png"
                        width="20"
                        height="20"
                    />
                </a>
            </footer>
        </>
    );
}

export default App;