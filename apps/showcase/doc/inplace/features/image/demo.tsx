import { Inplace } from 'primereact/inplace';

export default function ImageDemo() {
    return (
        <div className="card">
            <Inplace>
                <Inplace.Display>
                    <span className="inline-flex items-center gap-2">
                        <span className="pi pi-image"></span>
                        <span>View Photo</span>
                    </span>
                </Inplace.Display>
                <Inplace.Content>
                    <img className="w-full sm:w-80 shadow-md" alt="Nature" src="https://primefaces.org/cdn/primevue/images/nature/nature8.jpg" />
                </Inplace.Content>
            </Inplace>
        </div>
    );
}
