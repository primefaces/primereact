import { useScrollTop } from '@primereact/hooks';
import { Button } from 'primereact/button';

export default function BasicDemo() {
    const { scrollToTop, visible } = useScrollTop();

    return (
        <div className="card flex flex-col items-center">
            <p>Scroll down the page to display the ScrollTop component.</p>
            <i className="pi pi-angle-down animate-fadeout animate-duration-1000 animate-infinite text-[2rem] mb-[30rem]"></i>
            {visible && (
                <Button onClick={scrollToTop} iconOnly rounded className="fixed [inset-block-end:20px] [inset-inline-end:20px]">
                    <i className="pi pi-chevron-up" />
                </Button>
            )}
        </div>
    );
}
