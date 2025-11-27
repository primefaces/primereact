'use client';

import { useGalleryChangeEvent } from '@primereact/types/shared/gallery';
import { Gallery } from 'primereact/gallery';
import * as React from 'react';

const images = [
    'https://images.unsplash.com/photo-1759800805589-54b5fc10a52e?q=80&w=1285&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1759559790290-a3c6fce1d55f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1755398104149-961fa827e015?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1722944969391-1d21a2d404ea?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1757684945606-7644757a3eb9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1743701168206-bd617221b559?q=80&w=2614&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1758944966741-fc79410be873?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1758964112991-84be3393d9b1?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

function BasicDemo() {
    const [activeIndex, setActiveIndex] = React.useState<number>(3);

    return (
        <div className="mb-12">
            <Gallery
                className="w-full h-[600px] relative overflow-hidden"
                activeIndex={activeIndex}
                onActiveIndexChange={(e: useGalleryChangeEvent) => setActiveIndex(e.value ?? 0)}
            >
                <Gallery.Backdrop />
                <Gallery.Prev>
                    <i className="pi pi-arrow-left"></i>
                </Gallery.Prev>
                <Gallery.Next>
                    <i className="pi pi-arrow-right"></i>
                </Gallery.Next>
                <Gallery.Toolbar>
                    <Gallery.ToolbarItem action="rotateLeft">
                        <i className="pi pi-replay"></i>
                    </Gallery.ToolbarItem>
                    <Gallery.ToolbarItem action="rotateRight">
                        <i className="pi pi-refresh"></i>
                    </Gallery.ToolbarItem>
                    <Gallery.ToolbarItem action="zoomIn">
                        <i className="pi pi-search-plus"></i>
                    </Gallery.ToolbarItem>
                    <Gallery.ToolbarItem action="flipX">
                        <i className="pi pi-arrows-h"></i>
                    </Gallery.ToolbarItem>
                    <Gallery.ToolbarItem action="flipY">
                        <i className="pi pi-arrows-v"></i>
                    </Gallery.ToolbarItem>
                    <Gallery.ToolbarItem action="download">
                        <i className="pi pi-download"></i>
                    </Gallery.ToolbarItem>
                    <Gallery.ToolbarItem action="toggleFullScreen">
                        {() => <i className="pi pi-arrow-up-right-and-arrow-down-left-from-center"></i>}
                    </Gallery.ToolbarItem>
                </Gallery.Toolbar>
                <Gallery.Content>
                    {images.map((image) => (
                        <Gallery.Item key={image}>
                            <img src={image} alt="image" />
                        </Gallery.Item>
                    ))}
                </Gallery.Content>
                <Gallery.Thumbnail align="center" slide={activeIndex} spacing={2} loop>
                    <Gallery.ThumbnailContent className="h-16">
                        {images.map((image, index) => (
                            <Gallery.ThumbnailItem
                                key={index}
                                size={20}
                                onClick={(e: React.MouseEvent) => {
                                    e.preventDefault();
                                    setActiveIndex(index);
                                }}
                            >
                                <div
                                    className={`h-full w-full border-2 rounded-md overflow-hidden ${activeIndex === index ? 'border-orange-500' : 'border-transparent'}`}
                                >
                                    <img
                                        draggable={false}
                                        src={image}
                                        className="h-full w-full object-cover hover:opacity-75 transition-opacity"
                                    ></img>
                                </div>
                            </Gallery.ThumbnailItem>
                        ))}
                    </Gallery.ThumbnailContent>
                </Gallery.Thumbnail>
            </Gallery>
        </div>
    );
}

export default BasicDemo;
