'use client';
import type { SliderTrackInstance } from '@primereact/types/shared/slider';
import { Slider } from '@primereact/ui/slider';

export default function CustomDemo() {
    return (
        <div className="max-w-xs mx-auto w-full space-y-16">
            <Slider.Root defaultValue={50}>
                <Slider.Track className="h-2 bg-blue-100 dark:bg-blue-950">
                    <Slider.Range className="bg-blue-500" />
                </Slider.Track>
                <Slider.Thumb className="before:hidden border-2 border-blue-500 bg-surface-0 dark:bg-surface-900 rotate-45 rounded-md" />
            </Slider.Root>

            <Slider.Root defaultValue={50}>
                <Slider.Track className="h-2 bg-amber-100 dark:bg-amber-950">
                    <Slider.Range className="bg-amber-500" />
                </Slider.Track>
                <Slider.Thumb className="before:hidden w-4 h-5 border-2 border-amber-500 bg-surface-0 dark:bg-surface-900 rounded-sm" />
            </Slider.Root>

            <Slider.Root defaultValue={50} className="h-7 rounded-full ">
                <Slider.Track className="h-full rounded-full border border-surface-100 dark:border-surface-900 bg-surface-100 dark:bg-surface-800">
                    {({ slider }: SliderTrackInstance) => {
                        return (
                            <>
                                <i className="pi pi-volume-up absolute left-2 top-1/2 -translate-y-1/2 z-10 text-surface-600"></i>
                                <Slider.Range className="rounded-full bg-surface-0" style={{ width: `max(${slider?.state.value}%, 1.75rem)` }}>
                                    <Slider.Thumb
                                        style={{ insetBlockStart: '50%', insetInlineStart: 'auto', insetInlineEnd: '0', translate: '0 -50%' }}
                                        className="z-20 h-[calc(100%+2px)]! dark:h-full! aspect-square! w-auto! before:hidden! bg-surface-0 border border-surface-200 rounded-full shadow-sm"
                                    />
                                </Slider.Range>
                            </>
                        );
                    }}
                </Slider.Track>
            </Slider.Root>

            <Slider.Root defaultValue={50}>
                <Slider.Track className="h-8 flex items-center gap-1 w-full bg-transparent cursor-grab active:cursor-grabbing">
                    {({ slider }: SliderTrackInstance) => {
                        return (
                            <>
                                <span className="bg-linear-to-r from-sky-200 via-indigo-200 to-blue-400 flex-1 h-full rounded-full" />
                                <Slider.Thumb
                                    style={{ insetInlineStart: 'auto', translate: 'auto' }}
                                    className="relative! before:hidden size-8! bg-surface-0 dark:bg-surface-800 border border-surface-200 dark:border-surface-700 rounded-full shadow-sm"
                                />
                                <span
                                    className="h-full bg-surface-100 dark:bg-surface-900 rounded-full"
                                    style={{ width: `calc(100% - ${slider?.state.value}% - 1.25rem)` }}
                                />
                            </>
                        );
                    }}
                </Slider.Track>
            </Slider.Root>
        </div>
    );
}
