import { Button } from '@/components/ui/button';
import { Align, Popover, PopoverArrow, PopoverContent, PopoverPortal, PopoverPositioner, PopoverTrigger, Side } from './popover';

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
            <div className="min-h-screen min-w-[200vw] flex flex-col gap-60 py-60 items-start justify-center">
                {items.map(({ side, align }) => (
                    <Popover key={side + align}>
                        <PopoverTrigger className="ml-96">Open Popover</PopoverTrigger>
                        <PopoverPortal>
                            <PopoverPositioner className="max-w-72 w-full" side={side} align={align}>
                                <PopoverContent>
                                    <p className="text-surface-500 dark:text-surface-400 text-sm text-balance"> Review this information carefully. Once you’re ready, continue to the next step to complete the setup.</p>
                                    <div className="flex items-center mt-4">
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
