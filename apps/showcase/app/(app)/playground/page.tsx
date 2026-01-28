import { Button } from '@/components/ui/button';
import { Popover, PopoverArrow, PopoverClose, PopoverContent, PopoverPortal, PopoverPositioner, PopoverTrigger } from './popover';

import { Align, Side } from './placer';

const items = [
    { side: 'top', align: 'start' },
    { side: 'top', align: 'center' },
    { side: 'top', align: 'end' },

    { side: 'bottom', align: 'start' },
    { side: 'bottom', align: 'center' },
    { side: 'bottom', align: 'end' },

    { side: 'left', align: 'start' },
    { side: 'left', align: 'center' },
    { side: 'left', align: 'end' },

    { side: 'right', align: 'start' },
    { side: 'right', align: 'center' },
    { side: 'right', align: 'end' }
] as { side: Side; align: Align }[];

export default function Playground() {
    return (
        <div className="w-full h-full overflow-auto">
            <div className="min-h-screen min-w-[200vw] flex flex-col gap-72 py-60 items-start justify-center">
                {items.map(({ side, align }) => (
                    <Popover key={side + align}>
                        <PopoverTrigger className="ml-96">Open Popover</PopoverTrigger>
                        <PopoverPortal>
                            <PopoverPositioner className="max-w-64 w-full" side={side} align={align}>
                                <PopoverContent>
                                    <div className="flex items-start justify-between">
                                        <h3 className="text-surface-900 dark:text-surface-0 text-sm font-medium">Add a custom image</h3>
                                        <PopoverClose className="absolute top-2 right-2" />
                                    </div>
                                    <p className="text-surface-500 dark:text-surface-400 text-sm  mt-2">Upload an image to personalize your profile. </p>
                                    <img src="https://pbs.twimg.com/media/G-Dg9iDWwAAuBBF?format=jpg&name=4096x4096" className="w-full h-auto rounded-md border border-surface mt-2" />
                                    <div className="flex items-center mt-3">
                                        <span className="text-xs text-surface-500 dark:text-surface-400 ">1 of 3</span>
                                        <div className="flex-1 flex items-center justify-end gap-2">
                                            <Button severity="secondary" variant="outlined" size="small">
                                                Back
                                            </Button>
                                            <Button size="small">Next</Button>
                                        </div>
                                    </div>
                                    <PopoverArrow />
                                </PopoverContent>
                            </PopoverPositioner>
                        </PopoverPortal>
                    </Popover>
                ))}
            </div>
        </div>
    );
}
