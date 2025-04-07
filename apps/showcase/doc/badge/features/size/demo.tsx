import { Badge } from 'primereact/badge';

export default function SizeDemo() {
    return (
        <div className="card flex flex-wrap justify-center items-end gap-2">
            <Badge value="8" size="xlarge" severity="success"></Badge>
            <Badge value="6" size="large" severity="warn"></Badge>
            <Badge value="4" severity="info"></Badge>
            <Badge value="2" size="small"></Badge>
        </div>
    );
}
