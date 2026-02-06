import { Compare } from '@primereact/ui/compare';

export default function VerticalDemo() {
    return (
        <Compare.Root className="aspect-video max-w-lg mx-auto" orientation="vertical">
            <Compare.Item position="before">
                <img src="https://primefaces.org/cdn/primevue/images/compare/island2.jpg" />
            </Compare.Item>
            <Compare.Item position="after">
                <img src="https://primefaces.org/cdn/primevue/images/compare/island1.jpg" />
            </Compare.Item>
            <Compare.Handle>
                <Compare.Indicator className="group flex items-center justify-center">
                    <i className="pi pi-code group-data-[orientation=vertical]:rotate-90" />
                </Compare.Indicator>
            </Compare.Handle>
        </Compare.Root>
    );
}
