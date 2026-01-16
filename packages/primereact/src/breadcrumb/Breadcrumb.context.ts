'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { BreadcrumbRootInstance } from '@primereact/types/shared/breadcrumb';

export const [BreadcrumbProvider, useBreadcrumbContext] = createOptionalContext<BreadcrumbRootInstance>();
