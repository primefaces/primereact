'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { FieldsetInstance } from '@primereact/types/shared/fieldset';

export const [FieldsetProvider, useFieldsetContext] = createOptionalContext<FieldsetInstance>();
