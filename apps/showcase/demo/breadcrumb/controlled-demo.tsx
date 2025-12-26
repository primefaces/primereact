'use client';

import Link from 'next/link';
import { Breadcrumb } from 'primereact/breadcrumb';
import * as React from 'react';

export default function ControlledDemo() {
    const [currentPage, setCurrentPage] = React.useState('reports');

    return (
        <div className="flex justify-center">
            <Breadcrumb.Root onAction={(key: string) => setCurrentPage(key)}>
                <Breadcrumb.List>
                    <Breadcrumb.Item uKey="home" isCurrent={currentPage === 'home'}>
                        <Link href="#controlled">Home</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator />
                    <Breadcrumb.Item uKey="users" isCurrent={currentPage === 'users'}>
                        <Link href="#controlled">Users</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator />
                    <Breadcrumb.Item uKey="documents" isCurrent={currentPage === 'documents'}>
                        <Link href="#controlled">Documents</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator />
                    <Breadcrumb.Item uKey="work" isCurrent={currentPage === 'work'}>
                        <Link href="#controlled">Work</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Separator />
                    <Breadcrumb.Item uKey="reports" isCurrent={currentPage === 'reports'}>
                        <Link href="#controlled">Reports</Link>
                    </Breadcrumb.Item>
                </Breadcrumb.List>
            </Breadcrumb.Root>
        </div>
    );
}
