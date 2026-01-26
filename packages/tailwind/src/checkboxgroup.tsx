'use client';
import { cn } from '@/components/ui/utils';
import { CheckboxGroupProps } from '@primereact/types/shared/checkboxgroup';
import { CheckboxGroup as PRCheckboxGroup } from 'primereact/checkboxgroup';
import * as React from 'react';

function CheckboxGroup({
    orientation = 'horizontal',
    className,
    ...props
}: CheckboxGroupProps & {
    orientation?: 'horizontal' | 'vertical';
}) {
    return <PRCheckboxGroup className={cn('flex flex-wrap gap-4 data-[orientation=vertical]:flex-col data-[orientation=vertical]:gap-2', className)} data-orientation={orientation} {...props} />;
}

export { CheckboxGroup };
