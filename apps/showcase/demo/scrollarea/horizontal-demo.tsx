import { PhotoService } from '@/services/photo.service';
import Image from 'next/image';
import { ScrollArea } from 'primereact/scrollarea';
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
        <div className="card flex justify-center">
            <ScrollArea className="border border-surface-200 dark:border-surface-700 rounded-md" style={{ width: '632px', height: '200px' }}>
                <ScrollArea.Viewport className="p-4">
                    <ScrollArea.Content>
                        <div className="flex w-max gap-4" style={{ minWidth: '3000px' }}>
                            {images &&
                                images.map((image, index) => (
                                    <figure key={index} className="shrink-0">
                                        <Image
                                            width={150}
                                            height={100}
                                            src={image.itemImageSrc}
                                            alt={image.title}
                                            className="w-full object-cover rounded-md"
                                        />
                                        <figcaption className="pt-2 text-xs">
                                            Photo by <span className="font-semibold">{image.title}</span>
                                        </figcaption>
                                    </figure>
                                ))}
                        </div>
                    </ScrollArea.Content>
                </ScrollArea.Viewport>
                <ScrollArea.ThumbX />
            </ScrollArea>
        </div>
    );
}
