import React from 'react';
import { PrimeReactContext } from '../api/Api';
import { useHandleStyle } from '../componentbase/ComponentBase';
import { CSSTransition } from '../csstransition/CSSTransition';
import { useMergeProps, useMountEffect, useUpdateEffect } from '../hooks/Hooks';
import { UniqueComponentId, classNames } from '../utils/Utils';
import { StepperBase } from './StepperBase';
import { StepperContent } from './StepperContent';
import { StepperHeader } from './StepperHeader';
import { StepperSeparator } from './StepperSeparator';

export const Stepper = React.memo(
    React.forwardRef((inProps, ref) => {
        const mergeProps = useMergeProps();
        const context = React.useContext(PrimeReactContext);
        const props = StepperBase.getProps(inProps, context);
        const { ptm, cx, isUnstyled, ptmo } = StepperBase.setMetaData({
            props
        });
        const [idState, setIdState] = React.useState(props.id);
        const [activeStepState, setActiveStepState] = React.useState(props.activeStep);
        const navRef = React.useRef();

        useHandleStyle(StepperBase.css.styles, isUnstyled, { name: 'stepper' });

        useMountEffect(() => {
            if (!idState) {
                setIdState(UniqueComponentId());
            }
        });

        useUpdateEffect(() => {
            setActiveStepState(props.activeStep);
        }, [props.activeStep]);

        const getStepProp = (step, name) => {
            return step?.props?.[name];
        };

        const getStepKey = (step, index) => {
            return getStepProp(step, 'header') || index;
        };

        const isStep = (child) => {
            return child.type.displayName === 'StepperPanel';
        };

        const isStepActive = (index) => {
            return activeStepState === index;
        };

        const isItemDisabled = (index) => {
            return props.linear && !isStepActive(index);
        };

        const updateActiveStep = (event, index) => {
            setActiveStepState(index);

            props.onChangeStep && props.onChangeStep({ originalEvent: event, index });
        };

        const getStepHeaderActionId = (index) => {
            return `${idState}_${index}_header_action`;
        };

        const getStepContentId = (index) => {
            return `${idState}_${index}content`;
        };

        const stepperPanels = () => {
            return React.Children.toArray(props.children).reduce((stepperpanels, child) => {
                if (isStep(child)) {
                    stepperpanels.push(child);
                } else if (child && Array.isArray(child)) {
                    React.Children.toArray(child.props.children).forEach((nestedChild) => {
                        if (isStep(nestedChild)) {
                            stepperpanels.push(nestedChild);
                        }
                    });
                }

                return stepperpanels;
            }, []);
        };

        const prevCallback = (event, index) => {
            if (index !== 0) {
                updateActiveStep(event, index - 1);
            }
        };

        const nextCallback = (event, index) => {
            if (index !== stepperPanels().length - 1) {
                updateActiveStep(event, index + 1);
            }
        };

        const getStepPT = (step, key, index) => {
            const count = stepperPanels().length;

            const stepMetaData = {
                props: step.props,
                parent: {
                    props: props
                },
                context: {
                    index,
                    count,
                    first: index === 0,
                    last: index === count - 1,
                    active: isStepActive(index),
                    highlighted: index < activeStepState,
                    disabled: isItemDisabled(index)
                }
            };

            return mergeProps(ptm(`stepperpanel.${key}`, { stepperpanel: stepMetaData }), ptm(`stepperpanel.${key}`, stepMetaData), ptmo(getStepProp(step, 'pt'), key, stepMetaData));
        };

        const onItemClick = (event, index) => {
            if (props.linear) {
                event.preventDefault();

                return;
            }

            if (index !== activeStepState) {
                updateActiveStep(event, index);
            }
        };

        const createPanel = () => {
            return stepperPanels().map((step, index) => {
                const panelProps = mergeProps(
                    {
                        className: classNames(cx('stepper.header', { isStepActive, isItemDisabled, step, index })),
                        'aria-current': isStepActive(index) && 'step',
                        role: 'presentation',
                        'data-p-highlight': isStepActive(index),
                        'data-p-disabled': isItemDisabled(index),
                        'data-p-active': isStepActive(index)
                    },
                    ptm('stepperpanel')
                );

                return (
                    <li key={getStepKey(step, index)} {...panelProps}>
                        <StepperHeader
                            id={getStepHeaderActionId(index)}
                            template={step.children?.header}
                            stepperpanel={step}
                            index={index}
                            disabled={isItemDisabled(index)}
                            active={isStepActive(index)}
                            highlighted={index < activeStepState}
                            ariaControls={getStepContentId(index)}
                            clickCallback={onItemClick}
                            getStepPT={getStepPT}
                            getStepProp={getStepProp}
                            cx={cx}
                        />
                        {index !== stepperPanels().length - 1 && (
                            <StepperSeparator template={step.children?.separator} separatorClass={cx('stepper.separator')} stepperpanel={step} index={index} active={isStepActive(index)} highlighted={index < activeStepState} getStepPT={getStepPT} />
                        )}
                    </li>
                );
            });
        };

        React.useImperativeHandle(ref, () => ({
            getElement: () => navRef.current,
            getActiveStep: () => activeStepState,
            setActiveStep: (step) => setActiveStepState(step),
            nextCallback: (e) => nextCallback(e, activeStepState),
            prevCallback: (e) => prevCallback(e, activeStepState)
        }));

        const createPanelContent = () => {
            return stepperPanels().map((step, index) => {
                if (!isStepActive(index)) {
                    return null;
                }

                return (
                    <StepperContent
                        key={getStepContentId(index)}
                        id={getStepContentId(index)}
                        tempate={step?.children?.content}
                        stepperpanel={step}
                        index={index}
                        active={isStepActive(index)}
                        highlighted={index < activeStepState}
                        clickCallback={onItemClick}
                        prevCallback={prevCallback}
                        nextCallback={nextCallback}
                        getStepPT={getStepPT}
                        ariaLabelledby={getStepHeaderActionId(index)}
                        ptm={ptm}
                        cx={cx}
                    />
                );
            });
        };

        const createHorizontal = () => {
            const items = createPanel();
            const navProps = mergeProps(
                {
                    className: classNames(cx('nav')),
                    ref: navRef
                },
                ptm('nav')
            );

            const panelContainerProps = mergeProps(
                {
                    className: cx('panelContainer')
                },
                ptm('panelContainer')
            );

            return (
                <>
                    <ul {...navProps}>{items}</ul>
                    <div {...panelContainerProps}>{createPanelContent()}</div>
                </>
            );
        };

        const createVertical = () => {
            return stepperPanels().map((step, index) => {
                const contentRef = React.createRef(null);

                const navProps = mergeProps(
                    {
                        ref: navRef,
                        className: cx('panel', { props, index, isStepActive }),
                        'aria-current': isStepActive(index) && 'step',
                        ...getStepPT(step, 'root', index),
                        ...getStepPT(step, 'panel', index),
                        'data-p-highlight': isStepActive(index),
                        'data-p-disabled': isItemDisabled(index),
                        'data-p-active': isStepActive(index)
                    },
                    ptm('nav')
                );

                const headerProps = mergeProps({
                    className: cx('stepper.header', { step, isStepActive, isItemDisabled, index }),
                    ...getStepPT(step, 'header', index)
                });

                const transitionProps = mergeProps({
                    classNames: cx('stepper.content'),
                    ...getStepPT(step, 'transition', index),
                    timeout: { enter: 1000, exit: 450 },
                    in: isStepActive(index),
                    unmountOnExit: true
                });

                const toggleableContentProps = mergeProps({
                    ref: contentRef,
                    className: cx('stepper.toggleableContent'),
                    ...getStepPT(step, 'toggleableContent', index)
                });

                return (
                    <div key={getStepKey(step, index)} {...navProps}>
                        <div {...headerProps}>
                            <StepperHeader
                                id={getStepHeaderActionId(index)}
                                template={step.children?.header}
                                stepperpanel={step}
                                index={index}
                                disabled={isItemDisabled(index)}
                                active={isStepActive(index)}
                                highlighted={index < activeStepState}
                                ariaControls={getStepContentId(index)}
                                clickCallback={onItemClick}
                                getStepPT={getStepPT}
                                getStepProp={getStepProp}
                                cx={cx}
                            />
                        </div>
                        <CSSTransition nodeRef={contentRef} {...transitionProps}>
                            <div {...toggleableContentProps}>
                                {index !== stepperPanels().length - 1 && (
                                    <StepperSeparator
                                        template={step.children?.separator}
                                        separatorClass={cx('stepper.separator')}
                                        stepperpanel={step}
                                        index={index}
                                        active={isStepActive(index)}
                                        highlighted={index < activeStepState}
                                        getStepPT={getStepPT}
                                    />
                                )}
                                <StepperContent
                                    key={getStepContentId(index)}
                                    id={getStepContentId(index)}
                                    tempate={step?.children?.content}
                                    stepperpanel={step}
                                    index={index}
                                    active={isStepActive(index)}
                                    highlighted={index < activeStepState}
                                    clickCallback={onItemClick}
                                    prevCallback={prevCallback}
                                    nextCallback={nextCallback}
                                    getStepPT={getStepPT}
                                    ariaLabelledby={getStepHeaderActionId(index)}
                                    ptm={ptm}
                                    cx={cx}
                                />
                            </div>
                        </CSSTransition>
                    </div>
                );
            });
        };

        const rootProps = mergeProps(
            {
                className: classNames(cx('root')),
                role: 'tablist'
            },
            StepperBase.getOtherProps(props),
            ptm('root')
        );

        return (
            <div {...rootProps}>
                {props.start && props.start()}
                {props.orientation === 'horizontal' && createHorizontal()}
                {props.orientation === 'vertical' && createVertical()}
                {props.end && props.end()}
            </div>
        );
    })
);

StepperBase.displayName = 'StepperBase';
