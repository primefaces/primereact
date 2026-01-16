'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { AvatarRootInstance } from '@primereact/types/shared/avatar';

export const [AvatarProvider, useAvatarContext] = createOptionalContext<AvatarRootInstance>();
