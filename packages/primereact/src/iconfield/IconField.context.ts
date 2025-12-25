'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { IconFieldInstance } from '@primereact/types/shared/iconfield';

export const [IconFieldProvider, useIconFieldContext] = createOptionalContext<IconFieldInstance>();
