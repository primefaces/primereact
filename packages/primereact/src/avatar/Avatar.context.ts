import { createOptionalContext } from '@primereact/core/utils';
import type { AvatarInstance } from '@primereact/types/shared/avatar';

export const [AvatarProvider, useAvatarContext] = createOptionalContext<AvatarInstance>();
