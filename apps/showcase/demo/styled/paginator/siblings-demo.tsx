'use client';
import { EllipsisH } from '@primeicons/react';
import { AngleDoubleLeft } from '@primeicons/react/angle-double-left';
import { AngleDoubleRight } from '@primeicons/react/angle-double-right';
import { AngleLeft } from '@primeicons/react/angle-left';
import { AngleRight } from '@primeicons/react/angle-right';
import { PaginatorPagesInstance } from '@primereact/types/shared/paginator';
import { Paginator } from '@primereact/ui/paginator';

function SiblingsDemo() {
    return (
        <div className="flex items-center justify-center">
            <Paginator.Root total={100} itemsPerPage={5} page={6} siblings={2}>
                <Paginator.Content>
                    <Paginator.First>
                        <AngleDoubleLeft />
                    </Paginator.First>
                    <Paginator.Prev>
                        <AngleLeft />
                    </Paginator.Prev>
                    <Paginator.Pages>
                        {({ paginator }: PaginatorPagesInstance) =>
                            paginator?.pages.map((page, index) =>
                                page.type === 'page' ? (
                                    <Paginator.Page key={index} value={page.value} />
                                ) : (
                                    <Paginator.Ellipsis key={index}>
                                        <EllipsisH />
                                    </Paginator.Ellipsis>
                                )
                            )
                        }
                    </Paginator.Pages>
                    <Paginator.Next>
                        <AngleRight />
                    </Paginator.Next>
                    <Paginator.Last>
                        <AngleDoubleRight />
                    </Paginator.Last>
                </Paginator.Content>
            </Paginator.Root>
        </div>
    );
}

export default SiblingsDemo;
