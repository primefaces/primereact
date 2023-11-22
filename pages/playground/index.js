import Head from 'next/head';

const PlayGround = () => {
    return (
        <div>
            <Head>
                <title>Playground - PrimeReact</title>
                <meta name="description" content="Experience Primereact right now with the interactive environment." />
            </Head>
            <div className="doc">
                <div className="doc-main">
                    <div className="doc-intro">
                        <h1>Playground</h1>
                        <p>Experience Primereact right now with the interactive environment.</p>
                    </div>
                    <section className="py-4">
                        <iframe
                            className="w-full h-full"
                            style={{ border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: '2px', minHeight: '800px' }}
                            allowfFullScreen
                            src="https://stackblitz.com/edit/stackblitz-starters-66bhze?embed=1&file=src%2FApp.tsx"
                        ></iframe>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PlayGround;
