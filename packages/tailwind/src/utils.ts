import { cn as primeuixcn } from '@primeuix/utils';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: Parameters<typeof primeuixcn>) {
    return twMerge(primeuixcn(inputs));
}
