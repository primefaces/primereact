'use client';

import { Paginator } from 'primereact/paginator';

function SiblingsDemo() {
    return (
        <div className="flex items-center justify-center">
            <Paginator total={100} itemsPerPage={5} page={6} siblings={2}>
                <Paginator.Content>
                    <Paginator.First />
                    <Paginator.Prev />
                    <Paginator.Pages />
                    <Paginator.Next />
                    <Paginator.Last />
                </Paginator.Content>
            </Paginator>
        </div>
    );
}

export default SiblingsDemo;
