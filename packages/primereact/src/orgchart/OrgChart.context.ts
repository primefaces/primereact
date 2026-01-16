'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { OrgChartRootInstance } from '@primereact/types/shared/orgchart';

export const [OrgChartProvider, useOrgChartContext] = createOptionalContext<OrgChartRootInstance>();
