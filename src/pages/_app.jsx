import "tailwindcss/tailwind.css";

function App({ Component, pageProps }) {
    return(
        <div className="container p-3 mx-auto">
            <Component {...pageProps} />
        </div>
    );
}

export default App;