import { Carousel } from '@primereact/ui/carousel';

const items = ['120px', '80px', '200px', '160px', '220px', '180px', '280px', '100px'];

function VariableSizeDemo() {
    return (
        <div className="mt-8 mb-16">
            <Carousel.Root className="max-w-xl mx-auto" align="center" autoSize>
                <Carousel.Content className="h-[140px]">
                    {items.map((width, i) => (
                        <Carousel.Item key={i} style={{ width }}>
                            <div className="h-full text-4xl font-semibold bg-surface-50 dark:bg-surface-950 text-surface-950 dark:text-surface-0 flex flex-col items-center justify-center gap-6 rounded-lg border border-surface">
                                <span>{i + 1}</span>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel.Content>
                <div className="flex mt-4 gap-4">
                    <Carousel.Indicators />
                    <div className="flex items-center justify-end gap-2 flex-1">
                        <Carousel.Prev className="w-9 h-9 flex items-center justify-center rounded-full border border-surface bg-surface-0 dark:bg-surface-800 text-surface-500 dark:text-surface-400 hover:opacity-75 cursor-pointer transition-opacity">
                            <i className="pi pi-chevron-left text-lg"></i>
                        </Carousel.Prev>
                        <Carousel.Next className="w-9 h-9 flex items-center justify-center rounded-full border border-surface bg-surface-0 dark:bg-surface-800 text-surface-500 dark:text-surface-400 hover:opacity-75 cursor-pointer transition-opacity">
                            <i className="pi pi-chevron-right text-lg"></i>
                        </Carousel.Next>
                    </div>
                </div>
            </Carousel.Root>
        </div>
    );
}

export default VariableSizeDemo;
