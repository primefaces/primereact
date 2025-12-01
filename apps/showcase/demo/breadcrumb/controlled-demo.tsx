'use client';

import Link from 'next/link';
import { Breadcrumb } from 'primereact/breadcrumb';
import * as React from 'react';

export default function ControlledDemo() {
    const [currentPage, setCurrentPage] = React.useState('song');

    return (
        <div className="card">
            <Breadcrumb onAction={(key: string) => setCurrentPage(key)}>
                <Breadcrumb.List>
                    <Breadcrumb.Item uKey="home" isCurrent={currentPage === 'home'}>
                        <Link href="#controlled">Home</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator />
                    <Breadcrumb.Item uKey="music" isCurrent={currentPage === 'music'}>
                        <Link href="#controlled">Music</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator />
                    <Breadcrumb.Item uKey="artist" isCurrent={currentPage === 'artist'}>
                        <Link href="#controlled">Artist</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator />
                    <Breadcrumb.Item uKey="album" isCurrent={currentPage === 'album'}>
                        <Link href="#controlled">Album</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator />
                    <Breadcrumb.Item uKey="song" isCurrent={currentPage === 'song'}>
                        <Link href="#controlled">Song</Link>
                    </Breadcrumb.Item>
                </Breadcrumb.List>
            </Breadcrumb>
        </div>
    );
}
