'use client';
import { AngleDoubleLeftIcon, AngleDoubleRightIcon, AngleLeftIcon, AngleRightIcon } from '@primereact/icons';
import { PaginatorPagesInstance } from '@primereact/types/shared/paginator';
import { Paginator } from '@primereact/ui/paginator';

function ShowEllipsisDemo() {
    return (
        <div className="flex items-center justify-center">
            <Paginator.Root total={100} itemsPerPage={5} showEllipsis={false} siblings={3}>
                <Paginator.Content>
                    <Paginator.First>
                        <AngleDoubleLeftIcon />
                    </Paginator.First>
                    <Paginator.Prev>
                        <AngleLeftIcon />
                    </Paginator.Prev>
                    <Paginator.Pages>
                        {({ paginator }: PaginatorPagesInstance) =>
                            paginator?.pages.map((page, index) =>
                                page.type === 'page' ? <Paginator.Page key={index} value={page.value} /> : <Paginator.Ellipsis key={index} />
                            )
                        }
                    </Paginator.Pages>
                    <Paginator.Next>
                        <AngleRightIcon />
                    </Paginator.Next>
                    <Paginator.Last>
                        <AngleDoubleRightIcon />
                    </Paginator.Last>
                </Paginator.Content>
            </Paginator.Root>
        </div>
    );
}

export default ShowEllipsisDemo;
