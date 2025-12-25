'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { OrgChartTreeInstance } from '@primereact/types/shared/orgchart';

export const [OrgChartTreeProvider, useOrgChartTreeContext] = createOptionalContext<OrgChartTreeInstance>();
