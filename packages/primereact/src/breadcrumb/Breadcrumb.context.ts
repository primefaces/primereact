'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { BreadcrumbInstance } from '@primereact/types/shared/breadcrumb';

export const [BreadcrumbProvider, useBreadcrumbContext] = createOptionalContext<BreadcrumbInstance>();
