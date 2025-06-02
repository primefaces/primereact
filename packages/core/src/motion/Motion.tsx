'use client';
import { Component } from '@primereact/core/component';
import { nextFrame } from '@primeuix/motion';
import { mergeProps } from '@primeuix/utils';
import { withComponent } from 'primereact/base';
import * as React from 'react';
import { MotionProvider } from './Motion.context';
import { defaultProps } from './Motion.props';
import { useMotion } from './useMotion';

export const Motion = withComponent({
    name: 'Motion',
    defaultProps,
    setup(instance) {
        const { props } = instance;

        const [rendered, setRendered] = React.useState(() => props.in || !props.mountOnEnter);
        const isInitialMount = React.useRef(true);
        const motion = useMotion(props);

        React.useEffect(() => {
            if (props.in && !rendered) {
                setRendered(true);
            }
        }, [props.in]);

        React.useLayoutEffect(() => {
            const element = motion?.elementRef?.current;

            if (!element || !rendered) {
                isInitialMount.current = false;

                return;
            }

            let cancelled = false;
            const shouldAppear = isInitialMount.current && props.in && props.appear;

            element.style.display = '';
            motion.update?.(element, props);

            if (props.in) {
                if (shouldAppear || !isInitialMount.current) {
                    motion.enter?.();
                }
            } else {
                motion.leave?.()?.then(() => {
                    if (!element || cancelled || props.in) return;

                    if (props.unmountOnLeave) {
                        element.style.display = 'none';
                        nextFrame().then(() => {
                            if (!cancelled) setRendered(false);
                        });
                    } else {
                        element.style.display = 'none';
                    }
                });
            }

            isInitialMount.current = false;

            return () => {
                cancelled = true;
                isInitialMount.current = true;
                motion.cancel?.();
            };
        }, [props.in, rendered, props.unmountOnLeave, props.appear]);

        return {
            ...motion,
            rendered
        };
    },
    render(instance) {
        const { id, props, ptmi, rendered } = instance;

        const rootProps = mergeProps(
            {
                id
            },
            ptmi('root')
        );

        return (
            <MotionProvider value={instance}>
                <Component pIf={rendered} instance={instance} attrs={rootProps} children={props.children} />
            </MotionProvider>
        );
    }
});
