import { Paginator, PaginatorFirst, PaginatorLast, PaginatorNext, PaginatorPages, PaginatorPrev } from '@/components/ui/paginator';

function BasicDemo() {
    return (
        <div className="flex items-center justify-center">
            <Paginator total={100} itemsPerPage={5} edges={0}>
                <PaginatorFirst />
                <PaginatorPrev />
                <PaginatorPages />
                <PaginatorNext />
                <PaginatorLast />
            </Paginator>
        </div>
    );
}

export default BasicDemo;
