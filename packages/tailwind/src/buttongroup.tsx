import * as React from 'react';
import { ButtonGroup as PRButtonGroup } from 'primereact/buttongroup';
import { ButtonGroupProps } from '@primereact/types/shared/buttongroup';
import { cn } from '@/components/ui/utils';

function ButtonGroup({ className, ...props }: ButtonGroupProps) {
    return <PRButtonGroup className={cn('*:rounded-none *:first:rounded-s-md *:last:rounded-e-md *:focus-visible:relative *:focus-visible:z-10 *:not-last:border-r-0', className)} {...props} />;
}

export { ButtonGroup };
