import { useApp } from '@/hooks/useApp';

export default function AppFooter() {
    const app = useApp();

    return (
        <div className="layout-footer">
            <div>
                <span>PrimeReact {app.pkg.version} on React by </span>
                <a href="https://www.primetek.com.tr" target="_blank" rel="noopener noreferrer">
                    PrimeTek
                </a>
            </div>
        </div>
    );
}
