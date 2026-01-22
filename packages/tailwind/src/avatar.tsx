import * as React from 'react';
import { Avatar as PRAvatar } from 'primereact/avatar';
import { AvatarFallbackProps, AvatarGroupProps, AvatarImageProps, AvatarRootProps } from '@primereact/types/shared/avatar';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/components/ui/utils';

const avatarVariants = cva('relative flex shrink-0 overflow-hidden', {
    variants: {
        size: {
            normal: 'size-8 text-sm font-medium',
            large: 'size-9 font-semibold',
            xlarge: 'size-10 text-lg font-semibold'
        },
        shape: {
            circle: 'rounded-full',
            square: 'rounded-md'
        }
    },
    defaultVariants: {
        size: 'normal',
        shape: 'square'
    }
});

function Avatar({ className, size, shape = 'square', ...props }: AvatarRootProps & VariantProps<typeof avatarVariants>) {
    return <PRAvatar.Root className={cn(avatarVariants({ size, shape, className }))} {...props} />;
}

function AvatarImage({ className, ...props }: AvatarImageProps) {
    return <PRAvatar.Image className={cn('size-full aspect-square', className)} {...props} />;
}

function AvatarFallback({ className, ...props }: AvatarFallbackProps) {
    return <PRAvatar.Fallback className={cn('size-full rounded-[inherit] flex items-center justify-center bg-emphasis', className)} {...props} />;
}

function AvatarGroup({ className, ...props }: AvatarGroupProps) {
    return <PRAvatar.Group className={cn('-space-x-2 **:data-[pc-name=avatarroot]:ring-2 **:data-[pc-name=avatarroot]:ring-white', className)} {...props} />;
}

export { Avatar, AvatarImage, AvatarFallback, AvatarGroup };
