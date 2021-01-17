import "tailwindcss/tailwind.css";

function App({ Component, pageProps }) {
    return(
        <>
            <header className="bg-gray-900">
                <div className="container p-3 mx-auto text-gray-200">
                🦠
                </div>
            </header>
            <Component {...pageProps} />
        </>
    );
}

export default App;