import { ScrollArea } from '@primereact/ui/scrollarea';

export default function BothScrollbarsDemo() {
    return (
        <div className="flex justify-center">
            <ScrollArea.Root className="h-80 w-80 border border-surface rounded-lg">
                <ScrollArea.Viewport className="p-4">
                    <ScrollArea.Content>
                        <div className="grid grid-cols-[repeat(10,6rem)] grid-rows-[repeat(10,6rem)] gap-4">
                            {Array(100)
                                .fill(null)
                                .map((_, i) => (
                                    <div key={i} className="size-full bg-surface-100 dark:bg-surface-800 rounded-lg flex items-center justify-center">
                                        <span className="text-sm opacity-75">{i}</span>
                                    </div>
                                ))}
                        </div>
                    </ScrollArea.Content>
                </ScrollArea.Viewport>
                <ScrollArea.ThumbY />
                <ScrollArea.ThumbX />
            </ScrollArea.Root>
        </div>
    );
}
