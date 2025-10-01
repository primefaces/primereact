import { Carousel } from 'primereact/carousel';
import * as React from 'react';

const images = [
    'https://images.unsplash.com/photo-1589656966895-2f33e7653819?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1704905832963-37d6f12654b7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1470130623320-9583a8d06241?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1678841446310-d045487ef299?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1497752531616-c3afd9760a11?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1511885663737-eea53f6d6187?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1598439210625-5067c578f3f6?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1638255402906-e838358069ab?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

function GalleryDemo() {
    const [selectedImage, setSelectedImage] = React.useState(0);

    return (
        <div className="mt-8 mb-16">
            <div className="max-w-3xl mx-auto">
                <Carousel slide={selectedImage} onSlideChange={(e) => setSelectedImage(e.value)}>
                    <Carousel.Content className="h-[400px]">
                        {images.map((_, i) => (
                            <Carousel.Item key={i}>
                                <div className="p-1 h-full">
                                    <img src={images[i]} alt={`Image ${i + 1}`} draggable={false} className="h-full w-full object-cover  select-none" />
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel.Content>

                    <Carousel className="mt-4" spacing={4} align="center" slide={selectedImage}>
                        <Carousel.Content className="h-[90px]">
                            {images.map((_, i) => (
                                <Carousel.Item key={i} size={20} onClick={() => setSelectedImage(i)} className={`cursor-pointer transition-opacity ${selectedImage === i ? '' : 'opacity-60 hover:opacity-40'}`}>
                                    <div className="p-1 h-full">
                                        <img src={images[i]} alt={`Image ${i + 1}`} draggable={false} className="h-full w-full object-cover  select-none" />
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel.Content>
                    </Carousel>
                </Carousel>
            </div>
        </div>
    );
}

export default GalleryDemo;
