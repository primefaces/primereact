'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { DataViewInstance } from '@primereact/types/shared/dataview';

export const [DataViewProvider, useDataViewContext] = createOptionalContext<DataViewInstance>();
