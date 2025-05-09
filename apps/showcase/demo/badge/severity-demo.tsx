import { Badge } from 'primereact/badge';

export default function SeverityDemo() {
    return (
        <div className="card flex flex-wrap justify-center gap-2">
            <Badge value="2"></Badge>
            <Badge value="6" severity="secondary"></Badge>
            <Badge value="8" severity="success"></Badge>
            <Badge value="4" severity="info"></Badge>
            <Badge value="9" severity="warn"></Badge>
            <Badge value="3" severity="danger"></Badge>
            <Badge value="5" severity="contrast"></Badge>
        </div>
    );
}
