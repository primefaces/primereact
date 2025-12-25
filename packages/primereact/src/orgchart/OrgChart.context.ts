'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { OrgChartInstance } from '@primereact/types/shared/orgchart';

export const [OrgChartProvider, useOrgChartContext] = createOptionalContext<OrgChartInstance>();
