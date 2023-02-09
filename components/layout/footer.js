export default function Footer() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const version = require('../../package.json') && require('../../package.json').version;

    return (
        <div className="layout-footer">
            <div>
                <span>PrimeReact {version} by </span>
                <a href="http://www.primetek.com.tr" target="_blank" rel="noopener noreferrer">
                    PrimeTek
                </a>
            </div>
        </div>
    );
}
