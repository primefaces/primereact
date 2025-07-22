import * as HeadlessTooltipGroup from '@primereact/headless/tooltip/group';
import type { TooltipGroupProps } from '@primereact/types/shared/tooltip';
import * as React from 'react';

export const defaultGroupProps: TooltipGroupProps = {
    ...HeadlessTooltipGroup.defaultProps,
    as: React.Fragment
};
