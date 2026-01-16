'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { FieldsetRootInstance } from '@primereact/types/shared/fieldset';

export const [FieldsetProvider, useFieldsetContext] = createOptionalContext<FieldsetRootInstance>();
