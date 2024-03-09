import pkg from 'package.json';

export default function Footer() {
    const version = pkg.version;

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
