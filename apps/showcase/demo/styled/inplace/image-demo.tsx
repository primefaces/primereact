import { Image as ImageIcon } from '@primeicons/react';
import { Inplace } from '@primereact/ui/inplace';

export default function ImageDemo() {
    return (
        <Inplace.Root>
            <Inplace.Display>
                <ImageIcon className="mr-2" />
                <span>View Photo</span>
            </Inplace.Display>
            <Inplace.Content>
                <img className="w-full sm:w-80 shadow-md" alt="Nature" src="https://primefaces.org/cdn/primevue/images/nature/nature8.jpg" />
            </Inplace.Content>
        </Inplace.Root>
    );
}
