'use client';
import { createOptionalContext } from '@primereact/core/utils';
import type { ToasterRootInstance } from '@primereact/types/shared/toaster';

export const [ToasterProvider, useToasterContext] = createOptionalContext<ToasterRootInstance>();
