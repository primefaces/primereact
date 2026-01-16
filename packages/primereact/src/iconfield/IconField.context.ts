'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { IconFieldRootInstance } from '@primereact/types/shared/iconfield';

export const [IconFieldProvider, useIconFieldContext] = createOptionalContext<IconFieldRootInstance>();
