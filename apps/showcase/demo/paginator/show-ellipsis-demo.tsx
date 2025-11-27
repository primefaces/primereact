'use client';

import { Paginator } from 'primereact/paginator';

function ShowEllipsisDemo() {
    return (
        <div className="flex items-center justify-center">
            <Paginator total={100} itemsPerPage={5} showEllipsis={false} siblings={3}>
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

export default ShowEllipsisDemo;
