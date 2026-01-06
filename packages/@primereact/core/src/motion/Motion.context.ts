import { createOptionalContext } from '@primereact/core/utils';
import type { MotionInstance } from '@primereact/types/shared/motion';

export const [MotionProvider, useMotionContext] = createOptionalContext<MotionInstance>();
