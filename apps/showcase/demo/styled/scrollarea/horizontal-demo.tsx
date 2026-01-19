'use client';

import { PhotoService } from '@/shared/services/photo.service';
import { ScrollArea } from '@primereact/ui/scrollarea';
import * as React from 'react';

interface ImageData {
    itemImageSrc: string;
    thumbnailImageSrc: string;
    alt: string;
    title: string;
}

export default function HorizontalDemo() {
    const [images, setImages] = React.useState<ImageData[] | null>(null);

    React.useEffect(() => {
        PhotoService.getImages().then((data) => setImages(data));
    }, []);

    return (
        <div className="flex justify-center">
            <ScrollArea.Root className="border border-surface-200 dark:border-surface-700 rounded-lg max-w-md">
                <ScrollArea.Viewport>
                    <ScrollArea.Content className="flex gap-4 p-4">
                        {images &&
                            images.map((image, index) => (
                                <figure key={index} className="flex-1 min-w-48">
                                    <img src={image.itemImageSrc} alt={image.title} className="object-cover rounded-md" />
                                    <figcaption className="mt-2 text-xs">
                                        <span className="opacity-60">Photo by</span> <span className="font-medium">{image.title}</span>
                                    </figcaption>
                                </figure>
                            ))}
                    </ScrollArea.Content>
                </ScrollArea.Viewport>
                <ScrollArea.ThumbX className="h-2" />
            </ScrollArea.Root>
        </div>
    );
}
