export const TRANSITIONS = {
    toggleable: {
        enterFromClass: 'max-h-0',
        enterActiveClass: 'overflow-hidden transition-all duration-500 ease-in-out',
        enterToClass: 'max-h-40	',
        leaveFromClass: 'max-h-40',
        leaveActiveClass: 'overflow-hidden transition-all duration-500 ease-in',
        leaveToClass: 'max-h-0'
    },
    overlay: {
        enterFromClass: 'opacity-0 scale-75',
        enterActiveClass: 'transition-transform transition-opacity duration-150 ease-in',
        leaveActiveClass: 'transition-opacity duration-150 ease-linear',
        leaveToClass: 'opacity-0'
    }
};

export default Tailwind = {
    //PANELS
    panel: {
        header: ({ props }) => ({
            className: [
                'flex items-center justify-between', // flex and alignments
                'border border-gray-300 bg-gray-100 text-gray-700 rounded-tl-lg rounded-tr-lg', // borders and colors
                'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80', // Dark mode
                { 'p-5': !props.toggleable, 'py-3 px-5': props.toggleable } // condition
            ]
        }),
        title: 'leading-none font-bold',
        toggler: {
            className: [
                'inline-flex items-center justify-center overflow-hidden relative no-underline', // alignments
                'w-8 h-8 text-gray-600 border-0 bg-transparent rounded-full transition duration-200 ease-in-out', // widths, borders, and transitions
                'hover:text-gray-900 hover:border-transparent hover:bg-gray-200 dark:hover:text-white/80 dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]', // hover
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]' // focus
            ]
        },
        togglerIcon: 'inline-block',
        content: {
            className: [
                'p-5 border border-gray-300 bg-white text-gray-700 border-t-0 last:rounded-br-lg last:rounded-bl-lg',
                'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80' // Dark mode
            ]
        },
        transition: TRANSITIONS.toggleable
    },
    accordion: {
        root: 'mb-1',
        accordiontab: {
            root: 'mb-1',
            header: ({ props }) => ({
                className: [
                    { 'select-none pointer-events-none cursor-default opacity-60': props?.disabled } // Condition
                ]
            }),
            headerAction: ({ context }) => ({
                className: [
                    'flex items-center cursor-pointer relative no-underline select-none', // Alignments
                    'p-5 transition duration-200 ease-in-out rounded-t-md font-bold transition-shadow duration-200', // Padding and transition
                    'border border-gray-300 bg-gray-100 text-gray-600', // Borders and colors
                    'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80 dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]', // Dark mode
                    'hover:border-gray-300 hover:bg-gray-200 hover:text-gray-800', // Hover
                    'focus:outline-none focus:outline-offset-0 focus:shadow-[inset_0_0_0_0.2rem_rgba(191,219,254,1)]', // Focus
                    { 'rounded-br-md rounded-bl-md': !context.active, 'rounded-br-0 rounded-bl-0 text-gray-800': context.active } // Condition
                ]
            }),
            headerIcon: 'inline-block mr-2',
            headerTitle: 'leading-none',
            content: {
                className: [
                    'p-5 border border-gray-300 bg-white text-gray-700 border-t-0 rounded-tl-none rounded-tr-none rounded-br-lg rounded-bl-lg',
                    'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80' // Dark mode
                ]
            },
            transition: TRANSITIONS.toggleable
        }
    },
    card: {
        root: {
            className: [
                'bg-white text-gray-700 shadow-md rounded-md', // Background, text color, box shadow, and border radius.
                'dark:bg-gray-900 dark:text-white ' //dark
            ]
        },
        body: 'p-5', // Padding.
        title: 'text-2xl font-bold mb-2', // Font size, font weight, and margin bottom.
        subtitle: {
            className: [
                'font-normal mb-2 text-gray-600', // Font weight, margin bottom, and text color.
                'dark:text-white/60 ' //dark
            ]
        },
        content: 'py-5', // Vertical padding.
        footer: 'pt-5' // Top padding.
    },
    divider: {
        root: ({ props }) => ({
            className: [
                'flex relative', // alignments.
                {
                    'w-full my-5 mx-0 py-0 px-5 before:block before:left-0 before:absolute before:top-1/2 before:w-full before:border-t before:border-gray-300 before:dark:border-blue-900/40': props.layout == 'horizontal', // Padding and borders for horizontal layout.
                    'min-h-full mx-4 md:mx-5 py-5 before:block before:min-h-full before:absolute before:left-1/2 before:top-0 before:transform before:-translate-x-1/2 before:border-l before:border-gray-300 before:dark:border-blue-900/40':
                        props.layout == 'vertical' // Padding and borders for vertical layout.
                },
                {
                    'before:border-solid': props.type == 'solid',
                    'before:border-dotted': props.type == 'dotted',
                    'before:border-dashed': props.type == 'dashed'
                } // Border type condition.
            ]
        }),
        content: 'px-1 bg-white z-10 dark:bg-gray-900' // Padding and background color.
    },
    fieldset: {
        root: {
            className: [
                'border border-gray-300 bg-white text-gray-700 rounded-md block mx-2 my-0.5 pl-4 pr-5 inline-size-min', // Borders, background, text color, spacing, and inline size.
                'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80' //dark
            ]
        },
        legend: ({ props }) => ({
            className: [
                'border border-gray-300 text-gray-700 bg-gray-50 font-bold rounded-md',
                'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80 ', //dark
                {
                    'p-0 transition-none hover:bg-gray-100 hover:border-gray-300 hover:text-gray-900 dark:hover:text-white/80 dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': props.toggleable,
                    'p-5': !props.toggleable
                }
            ]
        }),
        toggler: ({ props }) => ({
            className: [
                'flex items-center justify-center',
                {
                    'p-5 text-gray-700 rounded-md transition-none cursor-pointer overflow-hidden relative select-none hover:text-gray-900 focus:focus:shadow-[inset_0_0_0_0.2rem_rgba(191,219,254,1)] dark:text-white/80 dark:hover:text-white/80 dark:hover:bg-gray-800/60 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]':
                        props.toggleable
                }
            ]
        }),
        togglerIcon: 'mr-2 inline-block', // Margin and display style.
        legendTitle: 'flex items-center justify-center leading-none', // alignments, and leading style.
        content: 'p-5', // Padding.
        transition: TRANSITIONS.toggleable
    },
    scrollpanel: {
        wrapper: 'overflow-hidden relative float-left h-full w-full z-[1]',
        content: 'box-border h-[calc(100%+18px)] overflow-scroll pr-[18px] pb-[18px] pl-0 pt-0 relative scrollbar-none w-[calc(100%+18px)] [&::-webkit-scrollbar]:hidden',
        barX: {
            className: ['relative bg-gray-100 invisible rounded cursor-pointer h-[9px] bottom-0 z-[2]', 'transition duration-[250ms] ease-linear']
        },
        barY: {
            className: ['relative bg-gray-100 rounded cursor-pointer w-[9px] top-0 z-[2]', 'transition duration-[250ms] ease-linear']
        }
    },
    tabview: {
        navContainer: ({ props }) => ({
            className: [
                'relative', // Relative positioning.
                { 'overflow-hidden': props.scrollable } // Overflow condition.
            ]
        }),
        navContent: 'overflow-y-hidden overscroll-contain overscroll-auto scroll-smooth [&::-webkit-scrollbar]:hidden', // Overflow and scrollbar styles.
        previousButton: {
            className: ['h-full flex items-center justify-center absolute top-0 z-20', 'left-0', 'bg-white text-blue-500 w-12 shadow-md rounded-none', 'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80 ]'] // Flex and absolute positioning styles.
        },
        nextButton: {
            className: ['h-full flex items-center justify-center absolute top-0 z-20', 'right-0', 'bg-white text-blue-500 w-12 shadow-md rounded-none', 'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80 '] // Flex and absolute positioning styles.
        },
        nav: {
            className: ['flex flex-1 list-none m-0 p-0', 'bg-white border border-gray-300 border-0 border-b-2', 'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80 '] // Flex, list, margin, padding, and border styles.
        },
        tabpanel: {
            header: ({ props }) => ({
                className: ['mr-0', { 'cursor-default pointer-events-none select-none user-select-none opacity-60': props?.disabled }] // Margin and condition-based styles.
            }),
            headerAction: ({ parent, context }) => ({
                className: [
                    'items-center cursor-pointer flex overflow-hidden relative select-none text-decoration-none user-select-none', // Flex and overflow styles.
                    'border-b-2 p-5 font-bold rounded-t-lg transition-shadow duration-200 m-0', // Border, padding, font, and transition styles.
                    'transition-colors duration-200', // Transition duration style.
                    'focus:outline-none focus:outline-offset-0 focus:shadow-[inset_0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]', // Focus styles.
                    {
                        'border-gray-300 bg-white text-gray-700 hover:bg-white hover:border-gray-400 hover:text-gray-600 dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80 dark:hover:bg-gray-800/80':
                            parent.state.d_activeIndex !== context.index, // Condition-based hover styles.
                        'bg-white border-blue-500 text-blue-500 dark:bg-gray-900 dark:border-blue-300 dark:text-blue-300': parent.state.d_activeIndex === context.index // Condition-based active styles.
                    }
                ],
                style: 'margin-bottom:-2px' // Negative margin style.
            }),
            headerTitle: {
                className: ['leading-none whitespace-nowrap'] // Leading and whitespace styles.
            },
            content: {
                className: ['bg-white p-5 border-0 text-gray-700 rounded-bl-2xl rounded-br-2xl', 'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80'] // Background, padding, border, and text styles.
            }
        }
    },
    splitter: {
        root: ({ context }) => ({
            className: [
                'bg-white dark:bg-gray-900 rounded-lg text-gray-700 dark:text-white/80',
                {
                    'border border-solid border-gray-300 dark:border-blue-900/40': !context.nested
                }
            ]
        }),
        splitterpanel: {
            root: 'flex grow'
        },
        gutter: ({ props }) => ({
            className: [
                'flex items-center justify-center shrink-0',
                'transition-all duration-200 bg-gray-100 dark:bg-gray-800',
                {
                    'cursor-col-resize': props.layout == 'horizontal',
                    'cursor-row-resize': props.layout !== 'horizontal'
                }
            ]
        }),
        gutterhandler: ({ props }) => ({
            className: [
                'bg-gray-300 dark:bg-gray-600 transition-all duration-200',
                {
                    'h-7': props.layout == 'horizontal',
                    'w-7 h-2': props.layout !== 'horizontal'
                }
            ]
        })
    },
    dialog: {
        root: ({ state }) => ({
            className: [
                'rounded-lg shadow-lg border-0',
                'max-h-90 transform scale-100',
                'm-0 w-[50vw]',
                'dark:border dark:border-blue-900/40',
                {
                    'transition-none transform-none !w-screen !h-screen !max-h-full !top-0 !left-0': state.maximized
                }
            ]
        }),
        header: {
            className: ['flex items-center justify-between shrink-0', 'bg-white text-gray-800 border-t-0  rounded-tl-lg rounded-tr-lg p-6', 'dark:bg-gray-900  dark:text-white/80']
        },
        headerTitle: 'font-bold text-lg',
        headerIcons: 'flex items-center',
        closeButton: {
            className: [
                'flex items-center justify-center overflow-hidden relative',
                'w-8 h-8 text-gray-500 border-0 bg-transparent rounded-full transition duration-200 ease-in-out mr-2 last:mr-0',
                'hover:text-gray-700 hover:border-transparent hover:bg-gray-200',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', // focus
                'dark:hover:text-white/80 dark:hover:border-transparent dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            ]
        },
        closeButtonIcon: 'w-4 h-4 inline-block',
        content: ({ state }) => ({
            className: [
                'overflow-y-auto',
                'bg-white text-gray-700 px-6 pb-8 pt-0',
                'rounded-bl-lg rounded-br-lg',
                'dark:bg-gray-900  dark:text-white/80 ',
                {
                    grow: state.maximized
                }
            ]
        }),
        footer: {
            className: ['shrink-0 ', 'border-t-0 bg-white text-gray-700 px-6 pb-6 text-right rounded-b-lg', 'dark:bg-gray-900  dark:text-white/80']
        },
        mask: ({ props }) => ({
            className: ['transition duration-200', { 'bg-black/40': props.modal }]
        }),
        transition: ({ props }) => {
            return props.position === 'top'
                ? {
                      enterFromClass: 'opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0',
                      enterActiveClass: 'transition-all duration-200 ease-out',
                      leaveActiveClass: 'transition-all duration-200 ease-out',
                      leaveToClass: 'opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0'
                  }
                : props.position === 'bottom'
                ? {
                      enterFromClass: 'opacity-0 scale-75 translate-y-full',
                      enterActiveClass: 'transition-all duration-200 ease-out',
                      leaveActiveClass: 'transition-all duration-200 ease-out',
                      leaveToClass: 'opacity-0 scale-75 translate-x-0 translate-y-full translate-z-0'
                  }
                : props.position === 'left' || props.position === 'topleft' || props.position === 'bottomleft'
                ? {
                      enterFromClass: 'opacity-0 scale-75 -translate-x-full translate-y-0 translate-z-0',
                      enterActiveClass: 'transition-all duration-200 ease-out',
                      leaveActiveClass: 'transition-all duration-200 ease-out',
                      leaveToClass: 'opacity-0 scale-75  -translate-x-full translate-y-0 translate-z-0'
                  }
                : props.position === 'right' || props.position === 'topright' || props.position === 'bottomright'
                ? {
                      enterFromClass: 'opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0',
                      enterActiveClass: 'transition-all duration-200 ease-out',
                      leaveActiveClass: 'transition-all duration-200 ease-out',
                      leaveToClass: 'opacity-0 scale-75 opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0'
                  }
                : {
                      enterFromClass: 'opacity-0 scale-75',
                      enterActiveClass: 'transition-all duration-200 ease-out',
                      leaveActiveClass: 'transition-all duration-200 ease-out',
                      leaveToClass: 'opacity-0 scale-75'
                  };
        }
    },
    confirmpopup: {
        root: {
            className: [
                'bg-white text-gray-700 border-0 rounded-md shadow-lg',
                'z-40 transform origin-center',
                'mt-3 absolute left-0 top-0',
                'before:absolute before:w-0 before:-top-3 before:h-0 before:border-transparent before:border-solid before:ml-6 before:border-x-[0.75rem] before:border-b-[0.75rem] before:border-t-0 before:border-b-white dark:before:border-b-gray-900',
                'dark:border dark:border-blue-900/40 dark:bg-gray-900  dark:text-white/80'
            ]
        },
        content: 'p-5 items-center flex',
        icon: 'text-2xl',
        message: 'ml-4',
        footer: 'text-right px-5 py-5 pt-0 ',
        transition: TRANSITIONS.overlay
    },
    overlaypanel: {
        root: {
            className: [
                'bg-white text-gray-700 border-0 rounded-md shadow-lg',
                'z-40 transform origin-center',
                'absolute left-0 top-0',
                'before:absolute before:w-0 before:-top-3 before:h-0 before:border-transparent before:border-solid before:ml-6 before:border-x-[0.75rem] before:border-b-[0.75rem] before:border-t-0 before:border-b-white dark:before:border-b-gray-900',
                'dark:border dark:border-blue-900/40 dark:bg-gray-900  dark:text-white/80'
            ]
        },
        content: 'p-5 items-center flex',
        transition: TRANSITIONS.overlay
    },
    sidebar: {
        root: ({ props }) => ({
            className: [
                'flex flex-col pointer-events-auto relative transform translate-x-0 translate-y-0 translate-z-0 relative transition-transform duration-300',
                'bg-white text-gray-700 border-0 shadow-lg',
                {
                    '!transition-none !transform-none !w-screen !h-screen !max-h-full !top-0 !left-0': props.position == 'full',
                    'h-full w-80': props.position == 'left' || props.position == 'right',
                    'h-40 w-full': props.position == 'top' || props.position == 'bottom'
                },
                'dark:border dark:border-blue-900/40 dark:bg-gray-900 dark:text-white/80'
            ]
        }),
        header: {
            className: ['flex items-center justify-end', 'p-5']
        },
        closeButton: {
            className: [
                'flex items-center justify-center overflow-hidden relative',
                'w-8 h-8 text-gray-500 border-0 bg-transparent rounded-full transition duration-200 ease-in-out mr-2 last:mr-0',
                'hover:text-gray-700 hover:border-transparent hover:bg-gray-200',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', // focus
                'dark:hover:text-white/80 dark:hover:text-white/80 dark:hover:border-transparent dark:hover:bg-gray-800/80 dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            ]
        },
        closeButtonIcon: 'w-4 h-4 inline-block',
        content: {
            className: ['p-5 pt-0 h-full w-full', 'grow overflow-y-auto']
        },
        mask: {
            className: ['flex pointer-events-auto', 'bg-black bg-opacity-40 transition duration-200 z-20 transition-colors']
        },
        transition: ({ props }) => {
            return props.position === 'top'
                ? {
                      enterFromClass: 'translate-x-0 -translate-y-full translate-z-0',
                      leaveToClass: 'translate-x-0 -translate-y-full translate-z-0'
                  }
                : props.position === 'bottom'
                ? {
                      enterFromClass: 'translate-x-0 translate-y-full translate-z-0',
                      leaveToClass: 'translate-x-0 translate-y-full translate-z-0'
                  }
                : props.position === 'left'
                ? {
                      enterFromClass: '-translate-x-full translate-y-0 translate-z-0',
                      leaveToClass: '-translate-x-full translate-y-0 translate-z-0'
                  }
                : props.position === 'right'
                ? {
                      enterFromClass: 'translate-x-full translate-y-0 translate-z-0',
                      leaveToClass: 'opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0'
                  }
                : {
                      enterFromClass: 'opacity-0',
                      enterActiveClass: 'transition-opacity duration-400 ease-in',
                      leaveActiveClass: 'transition-opacity duration-400 ease-in',
                      leaveToClass: 'opacity-0'
                  };
        }
    },
    toolbar: {
        root: {
            className: ['flex items-center justify-between flex-wrap', 'bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-blue-900/40  p-5 rounded-md gap-2']
        },
        start: 'flex items-center',
        center: 'flex items-center',
        end: 'flex items-center'
    },
    //UPLOAD
    fileupload: {
        input: 'hidden',
        buttonbar: {
            className: ['flex flex-wrap', 'bg-gray-50 dark:bg-gray-800 p-5 border border-solid border-gray-300 dark:border-blue-900/40 text-gray-700 dark:text-white/80 rounded-tr-lg rounded-tl-lg gap-2 border-b-0']
        },
        chooseButton: {
            className: ['text-white bg-blue-500 border border-blue-500 p-3 px-5 rounded-md text-base', 'overflow-hidden relative']
        },
        chooseIcon: 'mr-2 inline-block',
        chooseButtonLabel: 'flex-1 font-bold',
        uploadbutton: {
            icon: 'mr-2'
        },
        cancelbutton: {
            icon: 'mr-2'
        },
        content: {
            className: ['relative', 'bg-white dark:bg-gray-900 p-8 border border-gray-300 dark:border-blue-900/40 text-gray-700 dark:text-white/80 rounded-b-lg']
        },
        file: {
            className: ['flex items-center flex-wrap', 'p-4 border border-gray-300 dark:border-blue-900/40 rounded gap-2 mb-2', 'last:mb-0']
        },
        thumbnail: 'shrink-0',
        fileName: 'mb-2',
        fileSize: 'mr-2',
        uploadicon: 'mr-2'
    },
    //Messages
    message: {
        root: ({ props }) => ({
            className: [
                'my-4 rounded-md',
                {
                    'bg-blue-100 border-solid border-0 border-l-4 border-blue-500 text-blue-700': props.severity == 'info',
                    'bg-green-100 border-solid border-0 border-l-4 border-green-500 text-green-700': props.severity == 'success',
                    'bg-orange-100 border-solid border-0 border-l-4 border-orange-500 text-orange-700': props.severity == 'warn',
                    'bg-red-100 border-solid border-0 border-l-4 border-red-500 text-red-700': props.severity == 'error'
                }
            ]
        }),
        wrapper: 'flex items-center py-5 px-7',
        icon: {
            className: ['w-6 h-6', 'text-lg mr-2']
        },
        text: 'text-base font-normal',
        button: {
            className: ['w-8 h-8 rounded-full bg-transparent transition duration-200 ease-in-out', 'ml-auto overflow-hidden relative', 'flex items-center justify-center', 'hover:bg-white/30']
        },
        transition: {
            enterFromClass: 'opacity-0',
            enterActiveClass: 'transition-opacity duration-300',
            leaveFromClass: 'max-h-40',
            leaveActiveClass: 'overflow-hidden transition-all duration-300 ease-in',
            leaveToClass: 'max-h-0 opacity-0 !m-0'
        }
    },
    inlinemessage: {
        root: ({ props }) => ({
            className: [
                'inline-flex items-center justify-center align-top',
                'p-3 m-0 rounded-md',
                {
                    'bg-blue-100 border-0 text-blue-700': props.severity == 'info',
                    'bg-green-100 border-0 text-green-700': props.severity == 'success',
                    'bg-orange-100 border-0 text-orange-700': props.severity == 'warn',
                    'bg-red-100 border-0 text-red-700': props.severity == 'error'
                }
            ]
        }),
        icon: 'text-base mr-2'
    },
    toast: {
        root: {
            className: ['w-96', 'opacity-90']
        },
        container: ({ props }) => ({
            className: [
                'my-4 rounded-md w-full',
                {
                    'bg-blue-100 border-solid border-0 border-l-4 border-blue-500 text-blue-700': props.message.severity == 'info',
                    'bg-green-100 border-solid border-0 border-l-4 border-green-500 text-green-700': props.message.severity == 'success',
                    'bg-orange-100 border-solid border-0 border-l-4 border-orange-500 text-orange-700': props.message.severity == 'warn',
                    'bg-red-100 border-solid border-0 border-l-4 border-red-500 text-red-700': props.message.severity == 'error'
                }
            ]
        }),
        content: 'flex items-center py-5 px-7',
        icon: {
            className: ['w-6 h-6', 'text-lg mr-2']
        },
        text: 'text-base font-normal flex flex-col flex-1 grow shrink ml-4',
        summary: 'font-bold block',
        detail: 'mt-1 block',
        closebutton: {
            className: ['w-8 h-8 rounded-full bg-transparent transition duration-200 ease-in-out', 'ml-auto overflow-hidden relative', 'flex items-center justify-center', 'hover:bg-white/30']
        },
        transition: {
            enterFromClass: 'opacity-0 translate-x-0 translate-y-2/4 translate-z-0',
            enterActiveClass: 'transition-transform transition-opacity duration-300',
            leaveFromClass: 'max-h-40',
            leaveActiveClass: 'transition-all duration-500 ease-in',
            leaveToClass: 'max-h-0 opacity-0 mb-0 overflow-hidden'
        }
    },
    //BUTTONS
    button: {
        root: ({ props, context }) => ({
            className: [
                'items-center cursor-pointer inline-flex overflow-hidden relative select-none text-center align-bottom h-full',
                'transition duration-200 ease-in-out',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(157,193,251,1),0_1px_2px_0_rgba(0,0,0,1)] dark:focus:shadow-[0_0_0_2px_rgba(28,33,39,1),0_0_0_4px_rgba(147,197,253,0.7),0_1px_2px_0_rgba(0,0,0,0)]', // Primary button focus
                {
                    'text-white bg-blue-500 border border-blue-500 hover:bg-blue-600 hover:border-blue-600': !props.link && props.severity === null && !props.text && !props.outlined && !props.plain,
                    'text-blue-600 bg-transparent border-transparent': props.link
                },
                {
                    'text-white bg-gray-500 border border-gray-500 hover:bg-gray-600 hover:border-gray-600': props.severity === 'secondary' && !props.text && !props.outlined && !props.plain,
                    'text-white bg-green-500 border border-green-500 hover:bg-green-600 hover:border-green-600': props.severity === 'success' && !props.text && !props.outlined && !props.plain,
                    'text-white bg-blue-500 border border-blue-500 hover:bg-blue-600 hover:border-blue-600': props.severity === 'info' && !props.text && !props.outlined && !props.plain,
                    'text-white bg-orange-500 border border-orange-500 hover:bg-orange-600 hover:border-orange-600': props.severity === 'warning' && !props.text && !props.outlined && !props.plain,
                    'text-white bg-purple-500 border border-purple-500 hover:bg-purple-600 hover:border-purple-600': props.severity === 'help' && !props.text && !props.outlined && !props.plain,
                    'text-white bg-red-500 border border-red-500 hover:bg-red-600 hover:border-red-600': props.severity === 'danger' && !props.text && !props.outlined && !props.plain
                },
                { 'shadow-lg': props.raised },
                { 'rounded-md': !props.rounded, 'rounded-full': props.rounded },
                {
                    'bg-transparent border-transparent': props.text && !props.plain,
                    'text-blue-500 hover:bg-blue-300/20': props.text && (props.severity === null || props.severity === 'info') && !props.plain,
                    'text-gray-500 hover:bg-gray-300/20': props.text && props.severity === 'secondary' && !props.plain,
                    'text-green-500 hover:bg-green-300/20': props.text && props.severity === 'success' && !props.plain,
                    'text-orange-500 hover:bg-orange-300/20': props.text && props.severity === 'warning' && !props.plain,
                    'text-purple-500 hover:bg-purple-300/20': props.text && props.severity === 'help' && !props.plain,
                    'text-red-500 hover:bg-red-300/20': props.text && props.severity === 'danger' && !props.plain
                },
                { 'shadow-lg': props.raised && props.text },
                {
                    'text-gray-500 hover:bg-gray-300/20': props.plain & props.text,
                    'text-gray-500 border border-gray-500 hover:bg-gray-300/20': props.plain & props.outlined,
                    'text-white bg-gray-500 border border-gray-500 hover:bg-gray-600 hover:border-gray-600': props.plain & !props.outlined & !props.text
                },
                {
                    'bg-transparent border': props.outlined && !props.plain,
                    'text-blue-500 border border-blue-500 hover:bg-blue-300/20': props.outlined && (props.severity === null || props.severity === 'info') && !props.plain,
                    'text-gray-500 border border-gray-500 hover:bg-gray-300/20': props.outlined && props.severity === 'secondary' && !props.plain,
                    'text-green-500 border border-green-500 hover:bg-green-300/20': props.outlined && props.severity === 'success' && !props.plain,
                    'text-orange-500 border border-orange-500 hover:bg-orange-300/20': props.outlined && props.severity === 'warning' && !props.plain,
                    'text-purple-500 border border-purple-500 hover:bg-purple-300/20': props.outlined && props.severity === 'help' && !props.plain,
                    'text-red-500 border border-red-500 hover:bg-red-300/20': props.outlined && props.severity === 'danger' && !props.plain
                },
                { 'px-4 py-3 text-base': props.size === null, 'text-xs py-2 px-3': props.size === 'small', 'text-xl py-3 px-4': props.size === 'large' },
                { 'opacity-60 pointer-events-none cursor-default': context.disabled }
            ]
        }),
        label: ({ props }) => ({
            className: [
                'flex-1',
                'duration-200',
                'font-bold',
                {
                    'hover:underline': props.link
                }
            ]
        }),
        icon: ({ props }) => ({
            className: [
                'mx-0',
                {
                    'mr-2': props.iconPos == 'left' && props.label != null,
                    'ml-2': props.iconPos == 'right' && props.label != null,
                    'mb-2': props.iconPos == 'top' && props.label != null,
                    'mt-2': props.iconPos == 'bottom' && props.label != null
                }
            ]
        }),
        badge: ({ props }) => ({
            className: [{ 'ml-2 w-4 h-4 leading-none flex items-center justify-center': props.badge }]
        })
    },
    speeddial: {
        root: 'absolute flex',
        button: {
            root: ({ parent }) => ({
                className: [
                    'w-16 !h-16 !rounded-full justify-center z-10',
                    {
                        'rotate-45': parent.state.d_visible
                    }
                ]
            }),
            label: {
                className: 'hidden'
            }
        },
        menu: 'm-0 p-0 list-none flex items-center justify-center transition delay-200 z-20',
        menuitem: ({ props, context }) => ({
            className: [
                'transform transition-transform duration-200 ease-out transition-opacity duration-800',
                context.hidden ? 'opacity-0 scale-0' : 'opacity-1 scale-100',
                {
                    'my-1 first:mb-2': props.direction == 'up' && props.type == 'linear',
                    'my-1 first:mt-2': props.direction == 'down' && props.type == 'linear',
                    'mx-1 first:mr-2': props.direction == 'left' && props.type == 'linear',
                    'mx-1 first:ml-2': props.direction == 'right' && props.type == 'linear'
                },
                { absolute: props.type !== 'linear' }
            ]
        }),
        action: {
            className: ['flex items-center justify-center rounded-full relative overflow-hidden', 'w-12 h-12 bg-gray-700 hover:bg-gray-800 text-white']
        },
        mask: ({ state }) => ({
            className: [
                'absolute left-0 top-0 w-full h-full transition-opacity duration-250 ease-in-out bg-black/40 z-0',
                {
                    'opacity-0': !state.d_visible,
                    'pointer-events-none opacity-100 transition-opacity duration-400 ease-in-out': state.d_visible
                }
            ]
        })
    },
    splitbutton: {
        root: ({ props }) => ({
            className: ['inline-flex relative', 'rounded-md', { 'shadow-lg': props.raised }]
        }),
        button: {
            root: ({ parent }) => ({
                className: ['rounded-r-none border-r-0', { 'rounded-l-full': parent.props.rounded }]
            }),
            icon: 'mr-2'
        },
        menubutton: {
            root: ({ parent }) => ({
                className: ['rounded-l-none', { 'rounded-r-full': parent.props.rounded }]
            }),
            label: 'hidden'
        }
    },
    //FORMS
    inputtext: {
        root: ({ props, context }) => ({
            className: [
                'm-0',
                'font-sans text-gray-600 dark:text-white/80 bg-white dark:bg-gray-900 border border-gray-300 dark:border-blue-900/40 transition-colors duration-200 appearance-none rounded-lg',
                {
                    'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]': !context.disabled,
                    'opacity-60 select-none pointer-events-none cursor-default': context.disabled
                },
                {
                    'text-lg px-4 py-4': props.size == 'large',
                    'text-xs px-2 py-2': props.size == 'small',
                    'p-3 text-base': props.size == null
                }
            ]
        })
    },
    inputnumber: {
        root: 'w-full inline-flex',
        input: ({ props }) => ({
            className: [{ 'rounded-tr-none rounded-br-none': props.showButtons && props.buttonLayout == 'stacked' }]
        }),
        buttongroup: ({ props }) => ({
            className: [{ 'flex flex-col': props.showButtons && props.buttonLayout == 'stacked' }]
        }),
        incrementbutton: ({ props }) => ({
            className: [
                'flex !items-center !justify-center',
                {
                    'rounded-br-none rounded-bl-none rounded-bl-none !p-0 flex-1 w-[3rem]': props.showButtons && props.buttonLayout == 'stacked'
                }
            ]
        }),
        label: 'hidden',
        decrementbutton: ({ props }) => ({
            className: [
                'flex !items-center !justify-center',
                {
                    'rounded-tr-none rounded-tl-none rounded-tl-none !p-0 flex-1 w-[3rem]': props.showButtons && props.buttonLayout == 'stacked'
                }
            ]
        })
    },
    knob: {
        root: ({ props }) => ({
            className: [
                'focus:outline-none focus:outline-offset-0 focus:shadow-0',
                {
                    'opacity-60 select-none pointer-events-none cursor-default': props.disabled
                }
            ]
        }),
        range: 'stroke-current transition duration-100 ease-in stroke-gray-200 dark:stroke-gray-700 fill-none',
        value: 'animate-dash-frame  stroke-blue-500 fill-none',
        label: 'text-center text-xl'
    },
    inputswitch: {
        root: ({ props }) => ({
            className: [
                'inline-block relative',
                'w-12 h-7',
                {
                    'opacity-60 select-none pointer-events-none cursor-default': props.disabled
                }
            ]
        }),
        slider: ({ props }) => ({
            className: [
                'absolute cursor-pointer top-0 left-0 right-0 bottom-0 border border-transparent',
                'transition-colors duration-200 rounded-2xl',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                "before:absolute before:content-'' before:top-1/2 before:bg-white before:dark:bg-gray-900 before:w-5 before:h-5 before:left-1 before:-mt-2.5 before:rounded-full before:transition-duration-200",
                {
                    'bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 hover:dark:bg-gray-700 ': !props.modelValue,
                    'bg-blue-500 before:transform before:translate-x-5': props.modelValue
                }
            ]
        })
    },
    cascadeselect: {
        root: ({ props }) => ({
            className: [
                'inline-flex cursor-pointer select-none relative',
                'bg-white dark:bg-gray-900 border border-gray-300 dark:border-blue-900/40 transition duration-200 ease-in-out rounded-lg',
                { 'opacity-60 select-none pointer-events-none cursor-default': props.disabled }
            ]
        }),
        label: {
            className: ['block whitespace-nowrap overflow-hidden flex flex-1 w-1 text-overflow-ellipsis cursor-pointer', 'bg-transparent border-0 p-3 text-gray-700 dark:text-white/80', 'appearance-none rounded-md']
        },
        dropdownbutton: {
            className: ['flex items-center justify-center shrink-0', 'bg-transparent text-gray-600 dark:text-white/80 w-[3rem] rounded-tr-6 rounded-br-6']
        },
        panel: 'absolute py-3 bg-white dark:bg-gray-900 border-0 shadow-md',
        list: 'm-0 sm:p-0 list-none',
        item: {
            className: [
                'cursor-pointer font-normal whitespace-nowrap',
                'm-0 border-0 bg-transparent transition-shadow rounded-none',
                'text-gray-700 dark:text-white/80 hover:text-gray-700 dark:hover:text-white/80 hover:bg-gray-200 dark:hover:bg-gray-800/80'
            ]
        },
        content: {
            className: ['flex items-center overflow-hidden relative', 'py-3 px-5']
        },
        groupicon: 'ml-auto',
        sublist: {
            className: ['block absolute left-full top-0', 'min-w-full z-10', 'py-3 bg-white dark:bg-gray-900 border-0 shadow-md']
        },
        transition: TRANSITIONS.overlay
    },
    inputmask: {
        root: 'font-sans text-base text-gray-700 dark:text-white/80 bg-white dark:bg-gray-900 py-3 px-3 border border-gray-300 dark:border-blue-900/40 hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)] transition duration-200 ease-in-out appearance-none rounded-md'
    },
    rating: {
        root: ({ props }) => ({
            className: [
                'relative flex items-center',
                'gap-2',
                {
                    'opacity-60 select-none pointer-events-none cursor-default': props.disabled
                }
            ]
        }),
        cancelitem: ({ context }) => ({
            className: [
                'inline-flex items-center cursor-pointer',
                {
                    'outline-none outline-offset-0 shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]': context.focused
                }
            ]
        }),
        cancelicon: {
            className: ['text-red-500', 'w-5 h-5', 'transition duration-200 ease-in']
        },
        item: ({ props, context }) => ({
            className: [
                'inline-flex items-center',
                {
                    'cursor-pointer': !props.readonly,
                    'cursor-default': props.readonly
                },
                {
                    'outline-none outline-offset-0 shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]': context.focused
                }
            ]
        }),
        officon: {
            className: ['text-gray-700 hover:text-blue-400', 'w-5 h-5', 'transition duration-200 ease-in']
        },
        onicon: {
            className: ['text-blue-500', 'w-5 h-5', 'transition duration-200 ease-in']
        }
    },
    selectbutton: {
        root: ({ props }) => ({
            className: [{ 'opacity-60 select-none pointer-events-none cursor-default': props.disabled }]
        }),
        button: ({ context }) => ({
            className: [
                'inline-flex cursor-pointer select-none items-center align-bottom text-center overflow-hidden relative',
                'px-4 py-3',
                'transition duration-200 border border-r-0',
                'first:rounded-l-md first:rounded-tr-none first:rounded-br-none last:border-r last:rounded-tl-none last:rounded-bl-none last:rounded-r-md',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                {
                    'bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 border-gray-300 dark:border-blue-900/40 hover:bg-gray-50 dark:hover:bg-gray-800/80 ': !context.active,
                    'bg-blue-500 border-blue-500 text-white hover:bg-blue-600': context.active,
                    'opacity-60 select-none pointer-events-none cursor-default': context.disabled
                }
            ]
        }),
        label: 'font-bold'
    },
    slider: {
        root: ({ props }) => ({
            className: [
                'relative',
                'bg-gray-100 dark:bg-gray-800 border-0 rounded-6',
                { 'h-1 w-56': props.orientation == 'horizontal', 'w-1 h-56': props.orientation == 'vertical' },
                { 'opacity-60 select-none pointer-events-none cursor-default': props.disabled }
            ]
        }),
        range: ({ props }) => ({
            className: [
                'bg-blue-500',
                'block absolute',
                {
                    'top-0 left-0 h-full': props.orientation == 'horizontal',
                    'bottom-0 left-0 w-full': props.orientation == 'vertical'
                }
            ]
        }),
        handle: ({ props }) => ({
            className: [
                'h-4 w-4 bg-white dark:bg-gray-600 border-2 border-blue-500 rounded-full transition duration-200',
                'cursor-grab touch-action-none block',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                'hover:bg-blue-500 hover:border hover:border-blue-500',
                {
                    'top-[50%] mt-[-0.5715rem] ml-[-0.5715rem]': props.orientation == 'horizontal',
                    'left-[50%] mb-[-0.5715rem] ml-[-0.4715rem]': props.orientation == 'vertical'
                }
            ]
        }),
        starthandler: ({ props }) => ({
            className: [
                'h-4 w-4 bg-white dark:bg-gray-600 border-2 border-blue-500 rounded-full transition duration-200',
                'cursor-grab touch-action-none block',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                'hover:bg-blue-500 hover:border hover:border-blue-500',
                {
                    'top-[50%] mt-[-0.5715rem] ml-[-0.5715rem]': props.orientation == 'horizontal',
                    'left-[50%] mb-[-0.5715rem] ml-[-0.4715rem]': props.orientation == 'vertical'
                }
            ]
        }),
        endhandler: ({ props }) => ({
            className: [
                'h-4 w-4 bg-white dark:bg-gray-600 border-2 border-blue-500 rounded-full transition duration-200',
                'cursor-grab touch-action-none block',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                'hover:bg-blue-500 hover:border hover:border-blue-500',
                {
                    'top-[50%] mt-[-0.5715rem] ml-[-0.5715rem]': props.orientation == 'horizontal',
                    'left-[50%] mb-[-0.5715rem] ml-[-0.4715rem]': props.orientation == 'vertical'
                }
            ]
        })
    },
    password: {
        root: ({ props }) => ({
            className: [
                'inline-flex relative',
                {
                    'opacity-60 select-none pointer-events-none cursor-default': props.disabled
                }
            ]
        }),
        panel: 'p-5 bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 shadow-md rounded-md',
        meter: 'mb-2 bg-gray-300 dark:bg-gray-700 h-3',
        meterlabel: ({ instance, props }) => ({
            className: [
                'transition-width duration-1000 ease-in-out h-full',
                {
                    'bg-red-500': instance?.meter?.strength == 'weak',
                    'bg-orange-500': instance?.meter?.strength == 'medium',
                    'bg-green-500': instance?.meter?.strength == 'strong'
                },
                { 'pr-[2.5rem] ': props.toggleMask }
            ]
        }),
        showicon: {
            className: ['absolute top-1/2 -mt-2', 'right-3 text-gray-600 dark:text-white/70']
        },
        hideicon: {
            className: ['absolute top-1/2 -mt-2', 'right-3 text-gray-600 dark:text-white/70']
        },
        transition: TRANSITIONS.overlay
    },
    togglebutton: {
        root: ({ props, context }) => ({
            className: [
                'inline-flex cursor-pointer select-none items-center align-bottom text-center overflow-hidden relative',
                'px-4 py-3 rounded-md text-base w-36',
                'border transition duration-200 ease-in-out',
                {
                    'outline-none outline-offset-0 shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]': context.focused
                },
                {
                    'bg-white dark:bg-gray-900 border-gray-300 dark:border-blue-900/40 text-gray-700 dark:text-white/80 hover:bg-gray-100 dark:hover:bg-gray-800/80 hover:border-gray-300 dark:hover:bg-gray-800/70 hover:text-gray-700 dark:hover:text-white/80':
                        !props.modelValue,
                    'bg-blue-500 border-blue-500 text-white hover:bg-blue-600 hover:border-blue-600': props.modelValue
                },
                { 'opacity-60 select-none pointer-events-none cursor-default': props.disabled }
            ]
        }),
        label: 'font-bold text-center w-full',
        icon: ({ props }) => ({
            className: [
                ' mr-2',
                {
                    'text-gray-600 dark:text-white/70': !props.modelValue,
                    'text-white': props.modelValue
                }
            ]
        })
    },
    tristatecheckbox: {
        root: {
            className: ['cursor-pointer inline-flex relative select-none align-bottom', 'w-6 h-6']
        },
        checkbox: ({ props }) => ({
            className: [
                'flex items-center justify-center',
                'border-2 w-6 h-6 rounded-lg transition-colors duration-200',
                {
                    'border-blue-500 bg-blue-500 text-white dark:border-blue-400 dark:bg-blue-400': props.modelValue || !props.modelValue,
                    'border-gray-300 text-gray-600 bg-white dark:border-blue-900/40 dark:bg-gray-900': props.modelValue == null
                },
                {
                    'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !props.disabled,
                    'cursor-default opacity-60': props.disabled
                }
            ]
        })
    },
    checkbox: {
        root: {
            className: ['cursor-pointer inline-flex relative select-none align-bottom', 'w-6 h-6']
        },
        input: ({ props, context }) => ({
            className: [
                'flex items-center justify-center',
                'border-2 w-6 h-6 text-gray-600 rounded-lg transition-colors duration-200',
                {
                    'border-gray-300 bg-white dark:border-blue-900/40 dark:bg-gray-900': !context.checked,
                    'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400': context.checked
                },
                {
                    'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !props.disabled,
                    'cursor-default opacity-60': props.disabled
                }
            ]
        }),
        icon: 'w-4 h-4 transition-all duration-200 text-white text-base dark:text-gray-900'
    },
    radiobutton: {
        root: {
            className: ['relative inline-flex cursor-pointer select-none align-bottom', 'w-6 h-6']
        },
        input: ({ props }) => ({
            className: [
                'flex justify-center items-center',
                'border-2 w-6 h-6 text-gray-700 rounded-full transition duration-200 ease-in-out',
                {
                    'border-gray-300 bg-white dark:border-blue-900/40 dark:bg-gray-900 dark:text-white/80': props.value !== props.modelValue,
                    'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400': props.value == props.modelValue
                },
                {
                    'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !props.disabled,
                    'cursor-default opacity-60': props.disabled
                }
            ]
        }),
        icon: ({ props }) => ({
            className: [
                'transform rounded-full',
                'block w-3 h-3 transition duration-200 bg-white dark:bg-gray-900',
                {
                    'backface-hidden scale-10 invisible': props.value !== props.modelValue,
                    'transform scale-100 visible': props.value == props.modelValue
                }
            ]
        })
    },
    dropdown: {
        root: ({ props }) => ({
            className: [
                'cursor-pointer inline-flex relative select-none',
                'bg-white border border-gray-400 transition-colors duration-200 ease-in-out rounded-md',
                'dark:bg-gray-900 dark:border-blue-900/40 dark:hover:border-blue-300',
                'w-full md:w-56',
                'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                { 'opacity-60 select-none pointer-events-none cursor-default': props.disabled }
            ]
        }),
        input: ({ props }) => ({
            className: [
                'cursor-pointer block flex flex-auto overflow-hidden overflow-ellipsis whitespace-nowrap relative',
                'bg-transparent border-0 text-gray-800',
                'dark:text-white/80',
                'p-3 transition duration-200 bg-transparent rounded appearance-none font-sans text-base',
                'focus:outline-none focus:shadow-none',
                { 'pr-7': props.showClear }
            ]
        }),
        trigger: {
            className: ['flex items-center justify-center shrink-0', 'bg-transparent text-gray-500 w-12 rounded-tr-lg rounded-br-lg']
        },
        wrapper: {
            className: ['max-h-[200px] overflow-auto', 'bg-white text-gray-700 border-0 rounded-md shadow-lg', 'dark:bg-gray-900 dark:text-white/80']
        },
        list: 'py-3 list-none m-0',
        item: ({ context }) => ({
            className: [
                'cursor-pointer font-normal overflow-hidden relative whitespace-nowrap',
                'm-0 p-3 border-0  transition-shadow duration-200 rounded-none',
                'dark:text-white/80 dark:hover:bg-gray-800',
                'hover:text-gray-700 hover:bg-gray-200',
                {
                    'text-gray-700': !context.focused && !context.selected,
                    'bg-gray-300 text-gray-700 dark:text-white/80 dark:bg-gray-800/90': context.focused && !context.selected,
                    'bg-blue-400 text-blue-700 dark:bg-blue-400 dark:text-white/80': context.focused && context.selected,
                    'bg-blue-50 text-blue-700 dark:bg-blue-300 dark:text-white/80': !context.focused && context.selected
                }
            ]
        }),
        itemgroup: {
            className: ['m-0 p-3 text-gray-800 bg-white font-bold', 'dark:bg-gray-900 dark:text-white/80', 'cursor-auto']
        },
        header: {
            className: ['p-3 border-b border-gray-300 text-gray-700 bg-gray-100 mt-0 rounded-tl-lg rounded-tr-lg', 'dark:bg-gray-800 dark:text-white/80 dark:border-blue-900/40']
        },
        filtercontainer: 'relative',
        filterinput: {
            className: [
                'pr-7 -mr-7',
                'w-full',
                'font-sans text-base text-gray-700 bg-white py-3 px-3 border border-gray-300 transition duration-200 rounded-lg appearance-none',
                'dark:bg-gray-900 dark:border-blue-900/40 dark:hover:border-blue-300 dark:text-white/80',
                'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            ]
        },
        filtericon: '-mt-2 absolute top-1/2',
        clearicon: 'text-gray-500 right-12 -mt-2 absolute top-1/2',
        transition: TRANSITIONS.overlay
    },
    calendar: {
        root: ({ props }) => ({
            className: [
                'inline-flex max-w-full relative',
                {
                    'opacity-60 select-none pointer-events-none cursor-default': props.disabled
                }
            ]
        }),
        input: {
            className: [
                'font-sans text-base text-gray-600 dark:text-white/80 bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-blue-900/40 transition-colors duration-200 appearance-none rounded-lg',
                'hover:border-blue-500' //Hover
            ]
        },
        panel: ({ props }) => ({
            className: [
                'bg-white dark:bg-gray-900',
                'min-w-[350px]',
                {
                    'shadow-md border-0 absolute': !props.inline,
                    'inline-block overflow-x-auto border border-gray-300 dark:border-blue-900/40 p-2 rounded-lg': props.inline
                }
            ]
        }),
        header: {
            className: ['flex items-center justify-between', 'p-2 text-gray-700 dark:text-white/80 bg-white dark:bg-gray-900 font-semibold m-0 border-b border-gray-300 dark:border-blue-900/40 rounded-t-lg']
        },
        previousbutton: {
            className: [
                'flex items-center justify-center cursor-pointer overflow-hidden relative',
                'w-8 h-8 text-gray-600 dark:text-white/70 border-0 bg-transparent rounded-full transition-colors duration-200 ease-in-out',
                'hover:text-gray-700 dark:hover:text-white/80 hover:border-transparent hover:bg-gray-200 dark:hover:bg-gray-800/80 '
            ]
        },
        title: 'leading-8 mx-auto',
        monthTitle: {
            className: ['text-gray-700 dark:text-white/80 transition duration-200 font-semibold p-2', 'mr-2', 'hover:text-blue-500']
        },
        yearTitle: {
            className: ['text-gray-700 dark:text-white/80 transition duration-200 font-semibold p-2', 'hover:text-blue-500']
        },
        nextbutton: {
            className: [
                'flex items-center justify-center cursor-pointer overflow-hidden relative',
                'w-8 h-8 text-gray-600 dark:text-white/70 border-0 bg-transparent rounded-full transition-colors duration-200 ease-in-out',
                'hover:text-gray-700 dark:hover:text-white/80 hover:border-transparent hover:bg-gray-200 dark:hover:bg-gray-800/80 '
            ]
        },
        table: {
            className: ['border-collapse w-full', 'my-2']
        },
        tableheadercell: 'p-2',
        weekday: 'text-gray-600 dark:text-white/70',
        day: 'p-2',
        daylabel: ({ context }) => ({
            className: [
                'w-10 h-10 rounded-full transition-shadow duration-200 border-transparent border',
                'flex items-center justify-center mx-auto overflow-hidden relative',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                {
                    'opacity-60 cursor-default': context.disabled,
                    'cursor-pointer': !context.disabled
                },
                {
                    'text-gray-600 dark:text-white/70 bg-transprent hover:bg-gray-200 dark:hover:bg-gray-800/80': !context.selected && !context.disabled,
                    'text-blue-700 bg-blue-100 hover:bg-blue-200': context.selected && !context.disabled
                }
            ]
        }),
        monthpicker: 'my-2',
        month: ({ context }) => ({
            className: [
                'w-1/3 inline-flex items-center justify-center cursor-pointer overflow-hidden relative',
                'p-2 transition-shadow duration-200 rounded-lg',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                { 'text-gray-600 dark:text-white/70 bg-transprent hover:bg-gray-200 dark:hover:bg-gray-800/80': !context.selected && !context.disabled, 'text-blue-700 bg-blue-100 hover:bg-blue-200': context.selected && !context.disabled }
            ]
        }),
        yearpicker: {
            className: ['my-2']
        },
        year: ({ context }) => ({
            className: [
                'w-1/2 inline-flex items-center justify-center cursor-pointer overflow-hidden relative',
                'p-2 transition-shadow duration-200 rounded-lg',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                {
                    'text-gray-600 dark:text-white/70 bg-transprent hover:bg-gray-200 dark:hover:bg-gray-800/80': !context.selected && !context.disabled,
                    'text-blue-700 bg-blue-100 hover:bg-blue-200': context.selected && !context.disabled
                }
            ]
        }),
        timepicker: {
            className: ['flex justify-center items-center', 'border-t-1 border-solid border-gray-300 p-2']
        },
        separatorcontainer: 'flex items-center flex-col px-2',
        separator: 'text-xl',
        hourpicker: 'flex items-center flex-col px-2',
        minutepicker: 'flex items-center flex-col px-2',
        ampmpicker: 'flex items-center flex-col px-2',
        incrementbutton: {
            className: [
                'flex items-center justify-center cursor-pointer overflow-hidden relative',
                'w-8 h-8 text-gray-600 dark:text-white/70 border-0 bg-transparent rounded-full transition-colors duration-200 ease-in-out',
                'hover:text-gray-700 dark:hover:text-white/80 hover:border-transparent hover:bg-gray-200 dark:hover:bg-gray-800/80 '
            ]
        },
        decrementbutton: {
            className: [
                'flex items-center justify-center cursor-pointer overflow-hidden relative',
                'w-8 h-8 text-gray-600 dark:text-white/70 border-0 bg-transparent rounded-full transition-colors duration-200 ease-in-out',
                'hover:text-gray-700 dark:hover:text-white/80 hover:border-transparent hover:bg-gray-200 dark:hover:bg-gray-800/80 '
            ]
        },
        groupcontainer: 'flex',
        group: {
            className: ['flex-1', 'border-l border-gray-300 pr-0.5 pl-0.5 pt-0 pb-0', 'first:pl-0 first:border-l-0']
        },
        transition: TRANSITIONS.overlay
    },
    listbox: {
        root: {
            className: ['bg-white dark:bg-gray-900 border border-gray-400 dark:border-blue-900/40 transition-colors duration-200 ease-in-out rounded-md', 'w-full md:w-56']
        },
        wrapper: 'overflow-auto',
        list: 'py-3 list-none m-0',
        item: ({ context }) => ({
            className: [
                'cursor-pointer font-normal overflow-hidden relative whitespace-nowrap',
                'm-0 p-3 border-0  transition-shadow duration-200 rounded-none',
                'dark:text-white/80 dark:hover:bg-gray-800',
                'hover:text-gray-700 hover:bg-gray-200',
                {
                    'text-gray-700': !context.focused && !context.selected,
                    'bg-gray-300 text-gray-700 dark:text-white/80 dark:bg-gray-800/90': context.focused && !context.selected,
                    'bg-blue-400 text-blue-700 dark:bg-blue-400 dark:text-white/80': context.focused && context.selected,
                    'bg-blue-50 text-blue-700 dark:bg-blue-300 dark:text-white/80': !context.focused && context.selected
                }
            ]
        }),
        itemgroup: {
            className: ['m-0 p-3 text-gray-800 bg-white font-bold', 'dark:bg-gray-900 dark:text-white/80', 'cursor-auto']
        },
        header: {
            className: ['p-3 border-b border-gray-300 text-gray-700 bg-gray-100 mt-0 rounded-tl-lg rounded-tr-lg', 'dark:bg-gray-800 dark:text-white/80 dark:border-blue-900/40']
        },
        filtercontainer: 'relative',
        filterinput: {
            className: [
                'pr-7 -mr-7',
                'w-full',
                'font-sans text-base text-gray-700 bg-white py-3 px-3 border border-gray-300 transition duration-200 rounded-lg appearance-none',
                'dark:bg-gray-900 dark:border-blue-900/40 dark:hover:border-blue-300 dark:text-white/80',
                'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            ]
        },
        filtericon: '-mt-2 absolute top-1/2'
    },
    multiselect: {
        root: ({ props }) => ({
            className: [
                'inline-flex cursor-pointer select-none',
                'bg-white dark:bg-gray-900 border border-gray-400 dark:border-blue-900/40  transition-colors duration-200 ease-in-out rounded-md',
                'w-full md:w-80',
                { 'opacity-60 select-none pointer-events-none cursor-default': props?.disabled }
            ]
        }),
        labelContainer: 'overflow-hidden flex flex-auto cursor-pointer',
        label: ({ props }) => ({
            className: [
                'block overflow-hidden whitespace-nowrap cursor-pointer overflow-ellipsis',
                'text-gray-800 dark:text-white/80',
                'p-3 transition duration-200',
                {
                    '!p-3': props.display !== 'chip' && (props?.modelValue == null || props?.modelValue == undefined),
                    '!py-1.5 px-3': props.display == 'chip' && props?.modelValue !== null,
                    '!p-3': props.display == 'chip' && props?.modelValue == null
                }
            ]
        }),
        token: {
            className: ['py-1 px-2 mr-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white/80 rounded-full', 'cursor-default inline-flex items-center']
        },
        removeTokenIcon: 'ml-2',
        trigger: {
            className: ['flex items-center justify-center shrink-0', 'bg-transparent text-gray-600 dark:text-white/70 w-12 rounded-tr-lg rounded-br-lg']
        },
        panel: {
            className: ['bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 border-0 rounded-md shadow-lg']
        },
        header: {
            className: ['p-3 border-b border-gray-300 dark:border-blue-900/40 text-gray-700 dark:text-white/80 bg-gray-100 dark:bg-gray-800 rounded-t-lg', 'flex items-center justify-between']
        },
        headerCheckboxContainer: {
            className: ['inline-flex cursor-pointer select-none align-bottom relative', 'mr-2', 'w-6 h-6']
        },
        headerCheckbox: ({ context }) => ({
            className: [
                'flex items-center justify-center',
                'border-2 w-6 h-6 text-gray-600 dark:text-white/70 rounded-lg transition-colors duration-200',
                'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                {
                    'border-gray-300 dark:border-blue-900/40 bg-white dark:bg-gray-900': !context?.selected,
                    'border-blue-500 bg-blue-500': context?.selected
                }
            ]
        }),
        headercheckboxicon: 'w-4 h-4 transition-all duration-200 text-white text-base',
        closeButton: {
            className: [
                'flex items-center justify-center overflow-hidden relative',
                'w-8 h-8 text-gray-500 dark:text-white/70 border-0 bg-transparent rounded-full transition duration-200 ease-in-out mr-2 last:mr-0',
                'hover:text-gray-700 dark:hover:text-white/80 hover:border-transparent hover:bg-gray-200 dark:hover:bg-gray-800/80 ',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            ]
        },
        closeButtonIcon: 'w-4 h-4 inline-block',
        wrapper: {
            className: ['max-h-[200px] overflow-auto', 'bg-white text-gray-700 border-0 rounded-md shadow-lg', 'dark:bg-gray-900 dark:text-white/80']
        },
        list: 'py-3 list-none m-0',
        item: ({ context }) => ({
            className: [
                'cursor-pointer font-normal overflow-hidden relative whitespace-nowrap',
                'm-0 p-3 border-0  transition-shadow duration-200 rounded-none',
                'dark:text-white/80 dark:hover:bg-gray-800',
                'hover:text-gray-700 hover:bg-gray-200',
                {
                    'text-gray-700': !context.focused && !context.selected,
                    'bg-gray-300 text-gray-700 dark:text-white/80 dark:bg-gray-800/90': context.focused && !context.selected,
                    'bg-blue-400 text-blue-700 dark:bg-blue-400 dark:text-white/80': context.focused && context.selected,
                    'bg-blue-50 text-blue-700 dark:bg-blue-300 dark:text-white/80': !context.focused && context.selected
                }
            ]
        }),
        checkboxContainer: {
            className: ['inline-flex cursor-pointer select-none align-bottom relative', 'mr-2', 'w-6 h-6']
        },
        checkbox: ({ context }) => ({
            className: [
                'flex items-center justify-center',
                'border-2 w-6 h-6 text-gray-600 dark:text-white/80 rounded-lg transition-colors duration-200',
                'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                {
                    'border-gray-300 dark:border-blue-900/40  bg-white dark:bg-gray-900': !context?.selected,
                    'border-blue-500 bg-blue-500': context?.selected
                }
            ]
        }),
        checkboxicon: 'w-4 h-4 transition-all duration-200 text-white text-base',
        itemgroup: {
            className: ['m-0 p-3 text-gray-800 bg-white font-bold', 'dark:bg-gray-900 dark:text-white/80', 'cursor-auto']
        },
        filtercontainer: 'relative',
        filterinput: {
            className: [
                'pr-7 -mr-7',
                'w-full',
                'font-sans text-base text-gray-700 bg-white py-3 px-3 border border-gray-300 transition duration-200 rounded-lg appearance-none',
                'dark:bg-gray-900 dark:border-blue-900/40 dark:hover:border-blue-300 dark:text-white/80',
                'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            ]
        },
        filtericon: '-mt-2 absolute top-1/2',
        clearicon: 'text-gray-500 right-12 -mt-2 absolute top-1/2',
        transition: TRANSITIONS.overlay
    },
    textarea: {
        root: ({ context }) => ({
            className: [
                'm-0',
                'font-sans text-base text-gray-600 dark:text-white/80 bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-blue-900/40 transition-colors duration-200 appearance-none rounded-lg',
                'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                { 'opacity-60 select-none pointer-events-none cursor-default': context.disabled }
            ]
        })
    },
    treeselect: {
        root: ({ props }) => ({
            className: [
                'inline-flex cursor-pointer select-none',
                'bg-white dark:bg-gray-900 border border-gray-400 dark:border-blue-900/40  transition-colors duration-200 ease-in-out rounded-md',
                'w-full md:w-80',
                { 'opacity-60 select-none pointer-events-none cursor-default': props?.disabled }
            ]
        }),
        labelContainer: {
            className: ['overflow-hidden flex flex-auto cursor-pointer']
        },
        label: {
            className: ['block overflow-hidden whitespace-nowrap cursor-pointer overflow-ellipsis', 'text-gray-800 dark:text-white/80', 'p-3 transition duration-200']
        },
        trigger: {
            className: ['flex items-center justify-center shrink-0', 'bg-transparent text-gray-600 dark:text-white/70 w-12 rounded-tr-lg rounded-br-lg']
        },
        panel: {
            className: ['bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 border-0 rounded-md shadow-lg']
        },
        wrapper: {
            className: ['max-h-[200px] overflow-auto', 'bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 border-0 rounded-md shadow-lg']
        },
        transition: TRANSITIONS.overlay
    },
    autocomplete: {
        root: ({ props }) => ({
            className: [
                'relative inline-flex',
                {
                    'opacity-60 select-none pointer-events-none cursor-default': props.disabled
                },
                { 'w-full': props.multiple }
            ]
        }),
        container: {
            className: [
                'm-0 list-none cursor-text overflow-hidden flex items-center flex-wrap w-full',
                'px-3 py-2 gap-2',
                'font-sans text-base text-gray-700 dark:text-white/80 bg-white dark:bg-gray-900 border border-gray-300 dark:border-blue-900/40  transition duration-200 ease-in-out appearance-none rounded-md',
                'focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] hover:border-blue-500 focus:outline-none dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            ]
        },
        inputtoken: {
            className: ['py-0.375rem px-0', 'flex-1 inline-flex']
        },
        input: ({ props }) => ({
            className: [
                'm-0',
                ' transition-colors duration-200 appearance-none rounded-lg',
                { 'rounded-tr-none rounded-br-none': props.dropdown },
                {
                    'font-sans text-base text-gray-700 dark:text-white/80 bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-blue-900/40 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)] hover:border-blue-500 focus:outline-none':
                        !props.multiple,
                    'font-sans text-base text-gray-700 dark:text-white/80 border-0 outline-none bg-transparent m-0 p-0 shadow-none rounded-none w-full': props.multiple
                }
            ]
        }),
        token: {
            className: ['py-1 px-2 mr-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white/80 rounded-full', 'cursor-default inline-flex items-center']
        },
        dropdownbutton: {
            root: 'rounded-tl-none rounded-bl-none'
        },
        panel: {
            className: ['bg-white text-gray-700 border-0 rounded-md shadow-lg', 'max-h-[200px] overflow-auto', 'bg-white text-gray-700 border-0 rounded-md shadow-lg', 'dark:bg-gray-900 dark:text-white/80']
        },
        list: 'py-3 list-none m-0',
        item: ({ context }) => ({
            className: [
                'cursor-pointer font-normal overflow-hidden relative whitespace-nowrap',
                'm-0 p-3 border-0  transition-shadow duration-200 rounded-none',
                'dark:text-white/80 dark:hover:bg-gray-800',
                'hover:text-gray-700 hover:bg-gray-200',
                {
                    'text-gray-700': !context.focused && !context.selected,
                    'bg-gray-300 text-gray-700 dark:text-white/80 dark:bg-gray-800/90': context.focused && !context.selected,
                    'bg-blue-500 text-blue-700 dark:bg-blue-400 dark:text-white/80': context.focused && context.selected,
                    'bg-blue-50 text-blue-700 dark:bg-blue-300 dark:text-white/80': !context.focused && context.selected
                }
            ]
        }),
        itemgroup: {
            className: ['m-0 p-3 text-gray-800 bg-white font-bold', 'dark:bg-gray-900 dark:text-white/80', 'cursor-auto']
        },
        transition: TRANSITIONS.overlay
    },
    chips: {
        root: ({ props }) => ({
            className: [
                'flex',
                {
                    'opacity-60 select-none pointer-events-none cursor-default': props.disabled
                }
            ]
        }),
        container: {
            className: [
                'm-0 py-1.5 px-3 list-none cursor-text overflow-hidden flex items-center flex-wrap',
                'w-full',
                'font-sans text-base text-gray-600 dark:text-white/70 bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-blue-900/40 transition-colors duration-200 appearance-none rounded-lg',
                'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            ]
        },

        inputtoken: {
            className: ['py-1.5 px-0', 'flex flex-1 inline-flex']
        },
        input: {
            className: ['font-sans text-base text-gray-700 dark:text-white/80 p-0 m-0', 'border-0 outline-none bg-transparent shadow-none rounded-none w-full']
        },
        token: {
            className: ['py-1 px-2 mr-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white/80 rounded-full', 'cursor-default inline-flex items-center']
        },
        removeTokenIcon: 'ml-2'
    },
    colorpicker: {
        root: ({ props }) => ({
            className: [
                'inline-block',
                {
                    'opacity-60 select-none pointer-events-none cursor-default': props.disabled
                }
            ]
        }),
        input: {
            className: [
                'm-0',
                'font-sans text-base text-gray-600 bg-white dark:bg-gray-900 p-3 border border-gray-300 dark:border-blue-900/40 transition-colors duration-200 rounded-lg cursor-pointer',
                'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                'w-8 h-8'
            ]
        },
        panel: ({ props }) => ({
            className: [
                'shadow-md',
                'bg-gray-800 border-gray-900',
                {
                    'relative h-48 w-52': props.inline,
                    'absolute h-48 w-52': !props.inline
                }
            ]
        }),
        selector: 'absolute h-44 w-40 top-2 left-2',
        color: {
            className: 'h-44 w-40',
            style: 'background: linear-gradient(to top, #000 0%, rgb(0 0 0 / 0) 100%), linear-gradient(to right, #fff 0%, rgb(255 255 255 / 0) 100%)'
        },
        colorhandle: {
            className: ['rounded-full border border-solid cursor-pointer h-3 w-3 absolute  opacity-85', 'border-white']
        },
        hue: {
            className: ['h-44 w-6 absolute top-2 left-44 opacity-85'],
            style: 'background: linear-gradient(0deg, red 0, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, red)'
        },
        huehandle: 'border-solid border-2 cursor-pointer h-2 w-8 left-0 -ml-1 -mt-1 opacity-85 absolute',
        transition: TRANSITIONS.overlay
    },
    editor: {
        toolbar: {
            className: ['bg-gray-100 rounded-tr-md rounded-tl-md', 'border border-gray-300 box-border font-sans px-2 py-1']
        },
        formats: {
            className: ['inline-block align-middle', 'mr-4']
        },
        header: {
            className: ['text-gray-700 inline-block float-left text-base font-medium h-6 relative align-middle', 'w-28', 'border-0 text-gray-600']
        }
    },
    //MISC
    badge: {
        root: ({ props }) => ({
            className: [
                'rounded-full p-0 text-center inline-block',
                'bg-blue-500 text-white font-bold',
                {
                    'bg-gray-500 ': props.severity == 'secondary',
                    'bg-green-500 ': props.severity == 'success',
                    'bg-blue-500 ': props.severity == 'info',
                    'bg-orange-500 ': props.severity == 'warning',
                    'bg-purple-500 ': props.severity == 'help',
                    'bg-red-500 ': props.severity == 'danger'
                },
                {
                    'text-xs min-w-[1.5rem] h-[1.5rem] leading-[1.5rem]': props.size == null,
                    'text-lg min-w-[2.25rem] h-[2.25rem] leading-[2.25rem]': props.size == 'large',
                    'text-2xl min-w-[3rem] h-[3rem] leading-[3rem]': props.size == 'xlarge'
                }
            ]
        })
    },
    avatar: {
        root: ({ props, parent }) => ({
            className: [
                'flex items-center justify-center',
                'bg-gray-300 dark:bg-gray-800',
                {
                    'rounded-lg': props.shape == 'square',
                    'rounded-full': props.shape == 'circle'
                },
                {
                    'text-base h-8 w-8': props.size == null || props.size == 'normal',
                    'w-12 h-12 text-xl': props.size == 'large',
                    'w-16 h-16 text-2xl': props.size == 'xlarge'
                },
                {
                    '-ml-4 border-2 border-white dark:border-gray-900': parent.instance.$css !== undefined
                }
            ]
        }),
        image: 'h-full w-full'
    },
    avatargroup: {
        root: 'flex items-center'
    },
    chip: {
        root: {
            className: ['inline-flex items-center', 'bg-gray-200 text-gray-800 rounded-[16px] px-3 dark:text-white/80 dark:bg-gray-900']
        },
        label: 'leading-6 mt-1.5 mb-1.5',
        icon: 'leading-6 mr-2',
        image: {
            className: ['w-9 h-9 ml-[-0.75rem] mr-2', 'rounded-full']
        },
        removeIcon: {
            className: ['ml-2 rounded-md transition duration-200 ease-in-out', 'cursor-pointer leading-6']
        }
    },
    progressbar: {
        root: {
            className: ['overflow-hidden relative', 'border-0 h-6 bg-gray-200 rounded-md dark:bg-gray-800']
        },
        value: ({ props }) => ({
            className: [
                'border-0 m-0 bg-blue-500',
                {
                    'transition-width duration-1000 ease-in-out absolute items-center border-0 flex h-full justify-center overflow-hidden w-0': props.mode !== 'indeterminate',
                    'progressbar-value-animate before:absolute before:top-0 before:left-0 before:bottom-0 before:bg-inherit after:absolute after:top-0 after:left-0 after:bottom-0 after:bg-inherit after:delay-1000': props.mode == 'indeterminate'
                }
            ]
        }),
        label: {
            className: ['inline-flex', 'text-white leading-6']
        }
    },
    progressspinner: {
        root: {
            className: ['relative mx-auto w-28 h-28 inline-block', 'before:block before:pt-full']
        },
        spinner: 'absolute top-0 bottom-0 left-0 right-0 m-auto w-full h-full transform origin-center animate-spin',
        circle: 'text-red-500 progress-spinner-circle'
    },
    skeleton: {
        root: ({ props }) => ({
            className: [
                'overflow-hidden',
                '!mb-2',
                'bg-gray-300 dark:bg-gray-800',
                'after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:content after:w-full after:h-full after:bg-blue-400 after:left-full after:transform after:translate-x-full after:z-10 after:bg-gradient-to-r after:from-transparent after:via-white after:to-transparent animate-pulse',
                {
                    'rounded-md': props.shape !== 'circle',
                    'rounded-full': props.shape == 'circle'
                }
            ]
        })
    },
    tag: {
        root: ({ props }) => ({
            className: [
                'inline-flex items-center justify-center',
                'bg-blue-500 text-white text-xs font-semibold px-2 py-1 ',
                {
                    'bg-gray-500 ': props.severity == 'secondary',
                    'bg-green-500 ': props.severity == 'success',
                    'bg-blue-500 ': props.severity == 'info',
                    'bg-orange-500 ': props.severity == 'warning',
                    'bg-purple-500 ': props.severity == 'help',
                    'bg-red-500 ': props.severity == 'danger'
                },
                {
                    'rounded-md': !props.rounded,
                    'rounded-full': props.rounded
                }
            ]
        }),
        value: 'leading-6',
        icon: 'mr-1 text-sm'
    },
    inplace: {
        display: {
            className: ['p-3 rounded-md transition duration-200 text-gray-700 dark:text-white/80', 'inline cursor-pointer', 'hover:bg-gray-200 hover:text-gray-700 dark:hover:bg-gray-800/80 dark:hover:text-white/80']
        }
    },
    scrolltop: {
        root: ({ props }) => ({
            className: [
                'fixed bottom-20 right-20 flex items-center justify-center',
                'ml-auto',
                {
                    '!bg-blue-500 hover:bg-blue-600 text-white rounded-md h-8 w-8': props.target == 'parent',
                    '!bg-gray-700 hover:bg-gray-800 h-12 w-12 rounded-full text-white': props.target !== 'parent'
                }
            ]
        }),
        transition: {
            enterFromClass: 'opacity-0',
            enterActiveClass: 'transition-opacity duration-150',
            leaveActiveClass: 'transition-opacity duration-150',
            leaveToClass: 'opacity-0'
        }
    },
    terminal: {
        root: {
            className: ['border border-gray-300 p-5', 'bg-gray-900 text-white dark:border-blue-900/40 ', 'h-72 overflow-auto']
        },
        container: 'flex items-center',
        prompt: 'text-yellow-400',
        commandtext: 'flex-1 shrink grow-0 border-0 bg-transparent text-inherit p-0 outline-none'
    },
    blockui: {
        root: 'relative',
        mask: 'bg-black/40'
    },
    //MENU
    breadcrumb: {
        root: {
            className: ['overflow-x-auto', 'bg-white dark:bg-gray-900 border border-gray-300 dark:border-blue-900/40 rounded-md p-4']
        },
        menu: 'm-0 p-0 list-none flex items-center flex-nowrap',
        action: {
            className: [
                'text-decoration-none flex items-center',
                'transition-shadow duration-200 rounded-md text-gray-600 dark:text-white/70',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            ]
        },
        icon: 'text-gray-600 dark:text-white/70',
        separator: {
            className: ['mx-2 text-gray-600 dark:text-white/70', 'flex items-center']
        }
    },
    contextmenu: {
        root: 'py-1 bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 border-none shadow-md rounded-lg w-52',
        menu: {
            className: ['m-0 p-0 list-none', 'outline-none']
        },
        menuitem: 'relative',
        content: ({ context }) => ({
            className: [
                'transition-shadow duration-200 rounded-none',
                'hover:text-gray-700 dark:hover:text-white/80 hover:bg-gray-200 dark:hover:bg-gray-800/80', // Hover
                {
                    'text-gray-700': !context.focused && !context.active,
                    'bg-gray-300 text-gray-700 dark:text-white/80 dark:bg-gray-800/90': context.focused && !context.active,
                    'bg-blue-500 text-blue-700 dark:bg-blue-400 dark:text-white/80': context.focused && context.active,
                    'bg-blue-50 text-blue-700 dark:bg-blue-300 dark:text-white/80': !context.focused && context.active
                }
            ]
        }),
        action: {
            className: ['cursor-pointer flex items-center no-underline overflow-hidden relative', 'text-gray-700 dark:text-white/80 py-3 px-5 select-none']
        },
        icon: 'text-gray-600 dark:text-white/70 mr-2',
        label: 'text-gray-600 dark:text-white/70',
        transition: {
            enterFromClass: 'opacity-0',
            enterActiveClass: 'transition-opacity duration-250'
        }
    },
    dock: {
        root: ({ props }) => ({
            className: [
                'absolute z-1 flex justify-center items-center pointer-events-none',
                {
                    'left-0 bottom-0 w-full': props.position == 'bottom',
                    'left-0 top-0 w-full': props.position == 'top',
                    'left-0 top-0 h-full': props.position == 'left',
                    'right-0 top-0 h-full': props.position == 'right'
                }
            ]
        }),
        container: {
            className: ['flex pointer-events-auto', 'bg-white/10 border-white/20 p-2 border rounded-md']
        },
        menu: ({ props }) => ({
            className: [
                'm-0 p-0 list-none flex items-center justify-center',
                'outline-none',
                {
                    'flex-col': props.position == 'left' || props.position == 'right'
                }
            ]
        }),
        menuitem: ({ props, context, instance }) => ({
            className: [
                'p-2 rounded-md',
                'transition-all duration-200 ease-cubic-bezier-will-change-transform transform ',
                {
                    'origin-bottom hover:mx-6': props.position == 'bottom',
                    'origin-top hover:mx-6': props.position == 'top',
                    'origin-left hover:my-6': props.position == 'left',
                    'origin-right hover:my-6': props.position == 'right'
                },
                {
                    'hover:scale-150': instance.currentIndex === context.index,
                    'scale-125': instance.currentIndex - 1 === context.index || instance.currentIndex + 1 === context.index,
                    'scale-110': instance.currentIndex - 2 === context.index || instance.currentIndex + 2 === context.index
                }
            ]
        }),
        action: {
            className: ['flex flex-col items-center justify-center relative overflow-hidden cursor-default', 'w-16 h-16']
        }
    },
    menu: {
        root: 'py-1 bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 border border-gray-300 dark:border-blue-900/40 rounded-md w-48',
        menu: {
            className: ['m-0 p-0 list-none', 'outline-none']
        },
        content: ({ context }) => ({
            className: [
                'text-gray-700 dark:text-white/80 transition-shadow duration-200 rounded-none',
                'hover:text-gray-700 dark:hover:text-white/80 hover:bg-gray-200 dark:hover:bg-gray-800/80', // Hover
                {
                    'bg-gray-300 text-gray-700 dark:text-white/80 dark:bg-gray-800/90': context.focused
                }
            ]
        }),
        action: {
            className: ['text-gray-700 dark:text-white/80 py-3 px-5 select-none', 'cursor-pointer flex items-center no-underline overflow-hidden relative']
        },
        icon: 'text-gray-600 dark:text-white/70 mr-2',
        submenuheader: {
            className: ['m-0 p-3 text-gray-700 dark:text-white/80 bg-white dark:bg-gray-900 font-bold rounded-tl-none rounded-tr-none']
        },
        transition: TRANSITIONS.overlay
    },
    menubar: {
        root: {
            className: ['p-2 bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-blue-900/40 rounded-md', 'flex items-center relative']
        },
        menu: ({ props }) => ({
            className: [
                'm-0 sm:p-0 list-none',
                'outline-none',
                'sm:flex items-center flex-wrap sm:flex-row sm:top-auto sm:left-auto sm:relative sm:bg-transparent sm:shadow-none sm:w-auto',
                'flex-col top-full left-0',
                'absolute py-1 bg-white dark:bg-gray-900 border-0 shadow-md w-full',
                {
                    'hidden ': !props?.mobileActive,
                    'flex ': props?.mobileActive
                }
            ]
        }),
        menuitem: 'sm:relative sm:w-auto w-full static',
        content: ({ props, context }) => ({
            className: [
                ' transition-shadow duration-200',
                '',
                { 'rounded-md': props.root },
                {
                    'text-gray-700 dark:text-white/80': !context.focused && !context.active,
                    'bg-gray-300 text-gray-700 dark:text-white/80 dark:bg-gray-800/90': context.focused && !context.active,
                    'bg-blue-100 text-blue-700 dark:bg-blue-400 dark:text-white/80': context.focused && context.active,
                    'bg-blue-50 text-blue-700 dark:bg-blue-300 dark:text-white/80': !context.focused && context.active
                },
                {
                    'hover:text-gray-700 dark:hover:text-white/80 hover:bg-gray-200 dark:hover:bg-gray-800/80': !context.active,
                    'hover:bg-blue-200 dark:hover:bg-blue-500': context.active
                }
            ]
        }),
        action: ({ context }) => ({
            className: [
                'select-none',
                'cursor-pointer flex items-center no-underline overflow-hidden relative',
                'py-3 px-5 select-none',
                {
                    'max-[960px]:pl-9': context.level === 1,
                    'max-[960px]:pl-14': context.level === 2
                }
            ]
        }),
        icon: 'mr-2',
        submenuicon: ({ props }) => ({
            className: [
                'max-[960px]:ml-auto',
                {
                    'ml-2': props.root,
                    'ml-auto': !props.root
                }
            ]
        }),
        submenu: ({ props }) => ({
            className: [
                'py-1 bg-white dark:bg-gray-900 border-0  sm:shadow-md sm:w-48',
                'w-full static shadow-none',
                'sm:absolute z-10',
                'm-0 list-none',
                {
                    'sm:absolute sm:left-full sm:top-0': props.level > 1
                }
            ]
        }),
        separator: 'border-t border-gray-300 dark:border-blue-900/40 my-1',
        button: {
            className: [
                'flex sm:hidden w-8 h-8 rounded-full text-gray-600 dark:text-white/80 transition duration-200 ease-in-out',
                'cursor-pointer flex items-center justify-center no-underline',
                'hover:text-gray-700 dark:hover:text-white/80 hover:bg-gray-200 dark:hover:bg-gray-800/80 ',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            ]
        }
    },
    megamenu: {
        root: ({ props }) => ({
            className: [
                'bg-gray-100 dark:bg-gray-900  border border-gray-300 dark:border-blue-900/40  rounded-md',
                'flex relative',
                { 'p-2 items-center': props.orientation == 'horizontal', 'flex-col w-48 p-0 py-1': props.orientation !== 'horizontal' }
            ]
        }),
        menu: {
            className: ['m-0 sm:p-0 list-none relative', 'outline-none', 'flex items-center flex-wrap flex-row top-auto left-auto relative bg-transparent shadow-none w-auto']
        },
        menuitem: ({ props }) => ({
            className: [
                'relative',
                {
                    'w-auto': props.horizontal,
                    'w-full': !props.horizontal
                }
            ]
        }),
        content: ({ props, context }) => ({
            className: [
                'transition-shadow duration-200',
                { 'rounded-md': props.level < 1 && props.horizontal },
                {
                    'text-gray-700 dark:text-white/80': !context.focused && !context.active,
                    'bg-gray-300 text-gray-700 dark:text-white/80 dark:bg-gray-800/90': context.focused && !context.active,
                    'bg-blue-100 text-blue-700 dark:bg-blue-400 dark:text-white/80': context.focused && context.active,
                    'bg-blue-50 text-blue-700 dark:bg-blue-300 dark:text-white/80': !context.focused && context.active
                },
                {
                    'hover:text-gray-700 dark:hover:text-white/80 hover:bg-gray-200 dark:hover:bg-gray-800/80': !context.active,
                    'hover:bg-blue-200 dark:hover:bg-blue-500': context.active
                }
            ]
        }),
        action: {
            className: ['select-none', 'cursor-pointer flex items-center no-underline overflow-hidden relative', 'py-3 px-5 select-none']
        },
        icon: {
            className: 'mr-2'
        },
        submenuicon: ({ props }) => ({
            className: [
                {
                    'ml-2': props.horizontal,
                    'ml-auto': !props.horizontal
                }
            ]
        }),
        panel: ({ props }) => ({
            className: [
                'py-1 bg-white dark:bg-gray-900 border-0 shadow-md w-auto',
                'absolute z-10',
                {
                    'left-full top-0': !props.horizontal
                }
            ]
        }),
        grid: 'flex',
        column: 'w-1/2',
        submenu: {
            className: ['m-0 list-none', 'py-1 w-48']
        },
        submenuheader: {
            className: ['m-0 py-3 px-5 text-gray-700 dark:text-white/80 bg-white dark:bg-gray-900 font-semibold rounded-tr-md rounded-tl-md']
        }
    },
    panelmenu: {
        root: 'w-full md:w-[25rem]',
        panel: 'mb-1',
        header: {
            className: [
                'outline-none',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]' // Focus
            ]
        },
        headercontent: {
            className: [
                'border border-solid border-gray-300 dark:border-blue-900/40 text-gray-700 dark:text-white/80 bg-gray-100 dark:bg-gray-900 rounded-md transition-shadow duration-200',
                'hover:bg-gray-200 dark:hover:bg-gray-800/80  hover:text-gray-700 dark:hover:text-white/80'
            ]
        },
        headeraction: {
            className: ['flex items-center select-none cursor-pointer relative no-underline', 'text-gray-700 dark:text-white/80 p-5 font-bold']
        },
        submenuicon: 'mr-2',
        headericon: 'mr-2',
        menucontent: 'py-1 border border-t-0 border-gray-300 dark:border-blue-900/40 bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 rounded-t-none rounded-br-md rounded-bl-md',
        menu: {
            className: ['outline-none', 'm-0 p-0 list-none']
        },
        content: ({ context }) => ({
            className: [
                'text-gray-700 dark:text-white/80 transition-shadow duration-200 border-none rounded-none',
                'hover:bg-gray-200 dark:hover:bg-gray-800/80  hover:text-gray-700 dark:hover:text-white/80', // Hover
                {
                    'bg-gray-300 text-gray-700 dark:text-white/80 dark:bg-gray-800/90': context.focused
                }
            ]
        }),
        action: {
            className: ['text-gray-700 dark:text-white/80 py-3 px-5 select-none', 'flex items-center cursor-pointer no-underline relative overflow-hidden']
        },
        icon: 'mr-2',
        submenu: 'p-0 pl-4 m-0 list-none',
        transition: TRANSITIONS.toggleable
    },
    steps: {
        root: 'relative',
        menu: 'p-0 m-0 list-none flex',
        menuitem: {
            className: [
                'relative flex justify-center flex-1 overflow-hidden',
                'before:border-t before:border-gray-300 before:dark:border-blue-900/40 before:w-full before:absolute before:top-1/4 before:left-0 before:transform before:-translate-y-1/2'
            ]
        },
        action: {
            className: [
                'inline-flex flex-col items-center overflow-hidden',
                'transition-shadow rounded-md bg-white dark:bg-transparent',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            ]
        },
        step: {
            className: ['flex items-center justify-center', 'text-gray-700 dark:text-white/80 border border-gray-300 dark:border-blue-900/40  bg-white dark:bg-gray-900 w-[2rem] h-[2rem] leading-2rem text-sm z-10 rounded-full']
        },
        label: {
            className: ['block', 'whitespace-nowrap overflow-hidden overflow-ellipsis max-w-full', 'mt-2 text-gray-500 dark:text-white/60']
        }
    },
    tabmenu: {
        root: 'overflow-x-auto',
        menu: {
            className: ['flex m-0 p-0 list-none flex-nowrap', 'bg-white border-solid border-gray-300 border-b-2', 'outline-none no-underline text-base list-none']
        },
        menuitem: 'mr-0',
        action: ({ context, state }) => ({
            className: [
                'cursor-pointer select-none flex items-center relative no-underline overflow-hidden',
                'border-b-2 p-5 font-bold rounded-t-lg ',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[inset_0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                {
                    'border-gray-300 bg-white text-gray-700 hover:bg-white hover:border-gray-400 hover:text-gray-600 dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80 dark:hover:bg-gray-800/80': state.d_activeIndex !== context.index, // Condition-based hover styles.
                    'bg-white border-blue-500 text-blue-500 dark:bg-gray-900 dark:border-blue-300 dark:text-blue-300': state.d_activeIndex === context.index // Condition-based active styles.
                }
            ],
            style: 'top:2px'
        }),
        icon: 'mr-2'
    },
    tieredmenu: {
        root: {
            className: ['py-1 bg-white border border-gray-300 rounded-lg w-[12.5rem]', 'dark:border-blue-900/40 dark:bg-gray-900']
        },
        menu: {
            className: ['outline-none', 'm-0 p-0 list-none']
        },
        menuitem: 'relative',
        content: ({ context }) => ({
            className: [
                'transition-shadow duration-200 border-none rounded-none',
                'hover:bg-gray-200 hover:text-gray-700 dark:hover:text-white/80 dark:hover:bg-gray-800/80', //Hover
                {
                    'text-gray-700': !context.focused && !context.active,
                    'bg-gray-300 text-gray-700 dark:text-white/80 dark:bg-gray-800/90': context.focused && !context.active,
                    'bg-blue-100 text-blue-700 dark:bg-blue-400 dark:text-white/80': context.focused && context.active,
                    'bg-blue-50 text-blue-700 dark:bg-blue-300 dark:text-white/80': !context.focused && context.active
                }
            ]
        }),
        action: ({ context }) => ({
            className: [
                'py-3 px-5 select-none',
                'flex items-center cursor-pointer no-underline relative overflow-hidden',
                {
                    'text-gray-700 dark:text-white/80 hover:text-gray-700 dark:hover:text-white/80 hover:bg-gray-200 dark:hover:bg-gray-800/80': !context.active,
                    'text-blue-600 bg-blue-100': context.active
                }
            ]
        }),
        icon: 'mr-2',
        submenuicon: 'ml-auto',
        separator: 'border-t border-gray-300 my-1 dark:border-blue-900/40',
        submenu: {
            className: ['py-1 bg-white dark:bg-gray-900 border-0 shadow-md min-w-full', 'absolute z-10', 'left-full top-0']
        },
        transition: TRANSITIONS.overlay
    },
    //MEDIA
    image: {
        root: 'relative inline-block',
        button: {
            className: [
                'absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300',
                'bg-transparent text-gray-100',
                'hover:opacity-100 hover:cursor-pointer hover:bg-black hover:bg-opacity-50' //Hover
            ]
        },
        mask: {
            className: ['fixed top-0 left-0 w-full h-full', 'flex items-center justify-center', 'bg-black bg-opacity-90']
        },
        toolbar: {
            className: ['absolute top-0 right-0 flex', 'p-4']
        },
        rotaterightbutton: {
            className: [
                'flex justify-center items-center',
                'text-white bg-transparent w-12 h-12 rounded-full transition duration-200 ease-in-out mr-2',
                'hover:text-white hover:bg-white/10',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
            ]
        },
        rotaterighticon: 'w-6 h-6',
        rotateleftbutton: {
            className: [
                'flex justify-center items-center',
                'text-white bg-transparent w-12 h-12 rounded-full transition duration-200 ease-in-out mr-2',
                'hover:text-white hover:bg-white/10',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
            ]
        },
        rotatelefticon: 'w-6 h-6',
        zoomoutbutton: {
            className: [
                'flex justify-center items-center',
                'text-white bg-transparent w-12 h-12 rounded-full transition duration-200 ease-in-out mr-2',
                'hover:text-white hover:bg-white/10',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
            ]
        },
        zoomouticon: 'w-6 h-6',
        zoominbutton: {
            className: [
                'flex justify-center items-center',
                'text-white bg-transparent w-12 h-12 rounded-full transition duration-200 ease-in-out mr-2',
                'hover:text-white hover:bg-white/10',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
            ]
        },
        zoominicon: 'w-6 h-6',
        closebutton: {
            className: [
                'flex justify-center items-center',
                'text-white bg-transparent w-12 h-12 rounded-full transition duration-200 ease-in-out mr-2',
                'hover:text-white hover:bg-white/10',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
            ]
        },
        closeicon: 'w-6 h-6',
        transition: {
            enterFromClass: 'opacity-0 scale-75',
            enterActiveClass: 'transition-all duration-150 ease-in-out',
            leaveActiveClass: 'transition-all duration-150 ease-in',
            leaveToClass: 'opacity-0 scale-75'
        }
    },
    galleria: {
        root: 'flex flex-col',
        content: 'flex flex-col',
        itemwrapper: 'flex flex-col relative',
        itemcontainer: 'relative flex h-full',
        item: 'flex justify-center items-center h-full w-full',
        thumbnailwrapper: 'flex flex-col overflow-auto shrink-0',
        thumbnailcontainer: {
            className: ['flex flex-row', 'bg-black/90 p-4']
        },
        previousthumbnailbutton: {
            className: [
                'self-center flex shrink-0 justify-center items-center overflow-hidden relative',
                'm-2 bg-transparent text-white w-8 h-8 transition duration-200 ease-in-out rounded-full',
                'hover:bg-white/10 hover:text-white',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
            ]
        },
        thumbnailitemscontainer: 'overflow-hidden w-full',
        thumbnailitems: 'flex',
        thumbnailitem: {
            className: ['overflow-auto flex items-center justify-center cursor-pointer opacity-50', 'flex-1 grow-0 shrink-0 w-20', 'hover:opacity-100 hover:transition-opacity hover:duration-300']
        },
        nextthumbnailbutton: {
            className: [
                'self-center flex shrink-0 justify-center items-center overflow-hidden relative',
                'm-2 bg-transparent text-white w-8 h-8 transition duration-200 ease-in-out rounded-full',
                'hover:bg-white/10 hover:text-white',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
            ]
        },
        indicators: {
            className: ['flex items-center justify-center', 'p-4']
        },
        indicator: 'mr-2',
        indicatorbutton: ({ context }) => ({
            className: [
                'w-4 h-4 transition duration-200 rounded-full',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                {
                    'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600': !context.highlighted,
                    'bg-blue-500 hover:bg-blue-600': context.highlighted
                }
            ]
        }),
        mask: {
            className: ['fixed top-0 left-0 w-full h-full', 'flex items-center justify-center', 'bg-black bg-opacity-90']
        },
        closebutton: {
            className: [
                'absolute top-0 right-0 flex justify-center items-center overflow-hidden m-2',
                'text-white bg-transparent w-12 h-12 rounded-full transition duration-200 ease-in-out',
                'hover:text-white hover:bg-white/10',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
            ]
        },
        closeicon: 'w-6 h-6',
        previousitembutton: {
            className: [
                'inline-flex justify-center items-center overflow-hidden',
                'bg-transparent text-white w-16 h-16 transition duration-200 ease-in-out rounded-md mx-2',
                'fixed top-1/2 mt-[-0.5rem]',
                'left-0',
                'hover:bg-white/10 hover:text-white',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
            ]
        },
        nextitembutton: {
            className: [
                'inline-flex justify-center items-center overflow-hidden',
                'bg-transparent text-white w-16 h-16 transition duration-200 ease-in-out rounded-md mx-2',
                'fixed top-1/2 mt-[-0.5rem]',
                'right-0',
                'hover:bg-white/10 hover:text-white',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]'
            ]
        },
        caption: {
            className: ['absolute bottom-0 left-0 w-full', 'bg-black/50 text-white p-4']
        },
        transition: {
            enterFromClass: 'opacity-0 scale-75',
            enterActiveClass: 'transition-all duration-150 ease-in-out',
            leaveActiveClass: 'transition-all duration-150 ease-in',
            leaveToClass: 'opacity-0 scale-75'
        }
    },
    carousel: {
        root: 'flex flex-col',
        content: 'flex flex-col overflow-auto',
        container: ({ props }) => ({
            className: [
                'flex',
                {
                    'flex-row': props.orientation !== 'vertical',
                    'flex-col': props.orientation == 'vertical'
                }
            ]
        }),
        previousbutton: {
            className: ['flex justify-center items-center self-center overflow-hidden relative shrink-0 grow-0', 'w-8 h-8 text-gray-600 border-0 bg-transparent rounded-full transition duration-200 ease-in-out mx-2']
        },
        itemscontent: 'overflow-hidden w-full',
        itemscontainer: ({ props }) => ({
            className: [
                'flex ',
                {
                    'flex-row': props.orientation !== 'vertical',
                    'flex-col h-full': props.orientation == 'vertical'
                }
            ]
        }),
        item: ({ props }) => ({
            className: [
                'flex shrink-0 grow',
                {
                    'w-1/3': props.orientation !== 'vertical',
                    'w-full': props.orientation == 'vertical'
                }
            ]
        }),
        indicators: {
            className: ['flex flex-row justify-center flex-wrap']
        },
        indicator: 'mr-2 mb-2',
        indicatorbutton: ({ context }) => ({
            className: [
                'w-8 h-2 transition duration-200 rounded-0',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                {
                    'bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600': !context.highlighted,
                    'bg-blue-500 hover:bg-blue-600': context.highlighted
                }
            ]
        })
    },
    tree: {
        root: {
            className: ['max-w-[30rem] md:w-full', 'border border-solid border-gray-300 dark:border-blue-900/40 bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 p-5 rounded-md']
        },
        wrapper: 'overflow-auto',
        container: 'm-0 p-0 list-none overflow-auto',
        node: 'p-1 outline-none',
        content: ({ context, props }) => ({
            className: [
                'flex items-center',
                'rounded-lg transition-shadow duration-200 p-2',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                { 'bg-blue-50 text-blue-600': context.selected },
                { 'cursor-pointer select-none': props.selectionMode == 'single' || props.selectionMode == 'multiple' }
            ]
        }),
        toggler: ({ context }) => ({
            className: [
                'cursor-pointer select-none inline-flex items-center justify-center overflow-hidden relative shrink-0',
                'mr-2 w-8 h-8 border-0 bg-transparent rounded-full transition duration-200',
                'hover:border-transparent focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]',
                {
                    'text-gray-500 dark:text-white/80 hover:bg-gray-200 dark:hover:bg-gray-800/80  hover:text-gray-800 dark:hover:text-white/80': !context.selected,
                    'text-blue-600 hover:bg-white/30': context.selected
                },
                {
                    hidden: context.leaf
                }
            ]
        }),
        checkboxcontainer: 'mr-2',
        checkbox: ({ context, props }) => ({
            className: [
                'cursor-pointer inline-flex relative select-none align-bottom',
                'w-6 h-6',
                'flex items-center justify-center',
                'border-2 w-6 h-6 rounded-lg transition-colors duration-200 text-white text-base dark:text-gray-900',
                {
                    'border-gray-300 bg-white dark:border-blue-900/40 dark:bg-gray-900': !context.checked,
                    'border-blue-500 text-white bg-blue-500 dark:border-blue-400 dark:bg-blue-400': context.checked
                },
                {
                    'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !props.disabled,
                    'cursor-default opacity-60': props.disabled
                }
            ]
        }),
        nodeicon: 'mr-2 text-gray-600 dark:text-white/70',
        subgroup: {
            className: ['m-0 list-none', 'p-0 pl-4']
        },
        filtercontainer: {
            className: ['mb-2', 'relative block w-full']
        },
        input: {
            className: [
                'm-0 p-3 text-base w-full pr-7',
                'font-sans text-gray-600 dark:text-white/70 bg-white dark:bg-gray-900 border border-gray-300 dark:border-blue-900/40 transition-colors duration-200 appearance-none rounded-lg',
                'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]'
            ]
        },
        searchicon: 'absolute top-1/2 -mt-2 right-3 text-gray-600 dark:hover:text-white/70'
    },
    // DATA
    timeline: {
        root: ({ props }) => ({
            className: [
                'flex grow',
                {
                    'flex-col': props.layout === 'vertical',
                    'flex-row flex-1': props.layout === 'horizontal'
                }
            ]
        }),
        event: ({ props, context }) => ({
            className: [
                'flex relative min-h-[70px]',
                {
                    'flex-row-reverse': props.align === 'right' || (props.layout === 'vertical' && props.align === 'alternate' && context.index % 2 === 1),
                    'flex-col flex-1': props.layout === 'horizontal',
                    'flex-col-reverse ': props.align === 'bottom' || (props.layout === 'horizontal' && props.align === 'alternate' && context.index % 2 === 1)
                }
            ]
        }),
        opposite: ({ props, context }) => ({
            className: [
                'flex-1',
                {
                    'px-4': props.layout === 'vertical',
                    'py-4': props.layout === 'horizontal'
                },
                {
                    'text-right': props.align === 'left' || (props.layout === 'vertical' && props.align === 'alternate' && context.index % 2 === 0),
                    'text-left': props.align === 'right' || (props.layout === 'vertical' && props.align === 'alternate' && context.index % 2 === 1)
                }
            ]
        }),
        separator: ({ props }) => ({
            className: [
                'flex items-center flex-initial',
                {
                    'flex-col': props.layout === 'vertical',
                    'flex-row': props.layout === 'horizontal'
                }
            ]
        }),
        marker: 'flex self-baseline w-4 h-4 rounded-full border-2 border-blue-500 bg-white dark:border-blue-300 dark:bg-blue-900/40',
        connector: ({ props }) => ({
            className: [
                'grow bg-gray-300 dark:bg-blue-900/40',
                {
                    'w-[2px]': props.layout === 'vertical',
                    'w-full h-[2px]': props.layout === 'horizontal'
                }
            ]
        }),
        content: ({ props, context }) => ({
            className: [
                'flex-1',
                {
                    'px-4': props.layout === 'vertical',
                    'py-4': props.layout === 'horizontal'
                },
                {
                    'text-left': props.align === 'left' || (props.layout === 'vertical' && props.align === 'alternate' && context.index % 2 === 0),
                    'text-right': props.align === 'right' || (props.layout === 'vertical' && props.align === 'alternate' && context.index % 2 === 1)
                },
                {
                    'min-h-0': props.layout === 'vertical' && context.index === context.count,
                    'grow-0': props.layout === 'horizontal' && context.index === context.count
                }
            ]
        })
    },
    dataview: {
        content: {
            className: [
                'bg-white blue-gray-700 border-0 p-0',
                'dark:bg-gray-900 dark:text-white/80' // Dark Mode
            ]
        },
        grid: 'flex flex-wrap ml-0 mr-0 mt-0 bg-white dark:bg-gray-900',
        header: 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white/80 border-gray-200 dark:border-blue-900/40 border-t border-b p-4 font-bold'
    },
    dataviewlayoutoptions: {
        listbutton: ({ props }) => ({
            className: [
                'items-center cursor-pointer inline-flex overflow-hidden relative select-none text-center align-bottom justify-center border',
                'transition duration-200',
                'w-12 pt-3 pb-3 rounded-lg rounded-r-none',
                props.modelValue === 'list' ? 'bg-blue-500 border-blue-500 text-white dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900' : 'bg-white border-gray-300 text-blue-gray-700 dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80' // highlighted state
            ]
        }),
        gridbutton: ({ props }) => ({
            className: [
                'items-center cursor-pointer inline-flex overflow-hidden relative select-none text-center align-bottom justify-center border',
                'transition duration-200',
                'w-12 pt-3 pb-3 rounded-lg rounded-l-none',
                props.modelValue === 'grid' ? 'bg-blue-500 border-blue-500 text-white dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900' : 'bg-white border-gray-300 text-blue-gray-700 dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80' // highlighted state
            ]
        })
    },
    organizationchart: {
        table: 'mx-auto my-0 border-spacing-0 border-separate',
        cell: 'text-center align-top py-0 px-3',
        node: {
            className: [
                'relative inline-block bg-white border border-gray-300 text-gray-600 p-5',
                'dark:border-blue-900/40 dark:bg-gray-900 dark:text-white/80' // Dark Mode
            ]
        },
        linecell: 'text-center align-top py-0 px-3',
        linedown: {
            className: [
                'mx-auto my-0 w-px h-[20px] bg-gray-300',
                'dark:bg-blue-900/40' //Dark Mode
            ]
        },
        lineleft: ({ context }) => ({
            className: [
                'text-center align-top py-0 px-3 rounded-none border-r border-gray-300',
                'dark:border-blue-900/40', //Dark Mode
                {
                    'border-t': context.lineTop
                }
            ]
        }),
        lineright: ({ context }) => ({
            className: [
                'text-center align-top py-0 px-3 rounded-none',
                'dark:border-blue-900/40', //Dark Mode
                {
                    'border-t border-gray-300': context.lineTop
                }
            ]
        }),
        nodecell: 'text-center align-top py-0 px-3',
        nodetoggler: {
            className: [
                'absolute bottom-[-0.75rem] left-2/4 -ml-3 w-6 h-6 bg-inherit text-inherit rounded-full z-2 cursor-pointer no-underline select-none',
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]' // Focus styles
            ]
        },
        nodetogglericon: 'relative inline-block w-4 h-4'
    },
    orderlist: {
        root: 'flex',
        controls: 'flex flex-col justify-center p-5',
        moveupbutton: {
            root: ({ context }) => ({
                className: [
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900', //Dark Mode
                    {
                        'cursor-default pointer-events-none opacity-60': context.disabled
                    }
                ]
            }),
            label: 'flex-initial w-0'
        },
        movetopbutton: {
            root: ({ context }) => ({
                className: [
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900', //Dark Mode
                    {
                        'cursor-default pointer-events-none opacity-60': context.disabled
                    }
                ]
            }),
            label: 'flex-initial w-0'
        },
        movedownbutton: {
            root: ({ context }) => ({
                className: [
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900', //Dark Mode
                    {
                        'cursor-default pointer-events-none opacity-60': context.disabled
                    }
                ]
            }),
            label: 'flex-initial w-0'
        },
        movebottombutton: {
            root: ({ context }) => ({
                className: [
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900', //Dark Mode
                    {
                        'cursor-default pointer-events-none opacity-60': context.disabled
                    }
                ]
            }),
            label: 'flex-initial w-0'
        },
        container: 'flex-auto',
        header: {
            className: [
                'bg-slate-50 text-slate-700 border border-gray-300 p-5 font-bold border-b-0 rounded-t-md',
                'dark:bg-gray-900 dark:text-white/80 dark:border-blue-900/40' //Dark Mode
            ]
        },
        list: {
            className: [
                'list-none m-0 p-0 overflow-auto min-h-[12rem] max-h-[24rem]',
                'border border-gray-300 bg-white text-gray-600 py-3 px-0 rounded-b-md outline-none',
                'dark:border-blue-900/40 dark:bg-gray-900 dark:text-white/80' //Dark Mode
            ]
        },
        item: ({ context }) => ({
            className: [
                'relative cursor-pointer overflow-hidden',
                'py-3 px-5 m-0 border-none text-gray-600 dark:text-white/80',
                'transition duration-200',
                {
                    'text-blue-700 bg-blue-500/20 dark:bg-blue-300/20': context.active && !context.focused,
                    'text-blue-700 bg-blue-500/30 dark:bg-blue-300/30': context.active && context.focused,
                    'text-gray-600 bg-gray-300 dark:bg-blue-900/40': !context.active && context.focused
                }
            ]
        })
    },
    picklist: {
        root: 'flex',
        sourcecontrols: 'flex flex-col justify-center p-5',
        sourcemoveupbutton: {
            root: ({ context }) => ({
                className: [
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900', //Dark Mode
                    {
                        'cursor-default pointer-events-none opacity-60': context.disabled
                    }
                ]
            }),
            label: 'flex-initial w-0'
        },
        sourcemovetopbutton: {
            root: ({ context }) => ({
                className: [
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900', //Dark Mode
                    {
                        'cursor-default pointer-events-none opacity-60': context.disabled
                    }
                ]
            }),
            label: 'flex-initial w-0'
        },
        sourcemovedownbutton: {
            root: ({ context }) => ({
                className: [
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900', //Dark Mode
                    {
                        'cursor-default pointer-events-none opacity-60': context.disabled
                    }
                ]
            }),
            label: 'flex-initial w-0'
        },
        sourcemovebottombutton: {
            root: ({ context }) => ({
                className: [
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900', //Dark Mode
                    {
                        'cursor-default pointer-events-none opacity-60': context.disabled
                    }
                ]
            }),
            label: 'flex-initial w-0'
        },
        sourcewrapper: 'grow shrink basis-2/4',
        sourceheader: {
            className: [
                'bg-slate-50 text-slate-700 border border-gray-300 p-5 font-bold border-b-0 rounded-t-md',
                'dark:bg-gray-900 dark:text-white/80 dark:border-blue-900/40' //Dark Mode
            ]
        },
        sourcelist: {
            className: [
                'list-none m-0 p-0 overflow-auto min-h-[12rem] max-h-[24rem]',
                'border border-gray-300 bg-white text-gray-600 py-3 px-0 rounded-b-md outline-none',
                'dark:border-blue-900/40 dark:bg-gray-900 dark:text-white/80' //Dark Mode
            ]
        },
        item: ({ context }) => ({
            className: [
                'relative cursor-pointer overflow-hidden',
                'py-3 px-5 m-0 border-none text-gray-600 dark:text-white/80',
                'transition duration-200',
                {
                    'text-blue-700 bg-blue-500/20 dark:bg-blue-300/20': context.active && !context.focused,
                    'text-blue-700 bg-blue-500/30 dark:bg-blue-300/30': context.active && context.focused,
                    'text-gray-600 bg-gray-300 dark:bg-blue-900/40': !context.active && context.focused
                }
            ]
        }),
        buttons: 'flex flex-col justify-center p-5',
        movetotargetbutton: {
            root: ({ context }) => ({
                className: [
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900', //Dark Mode
                    {
                        'cursor-default pointer-events-none opacity-60': context.disabled
                    }
                ]
            }),
            label: 'flex-initial w-0'
        },
        movealltotargetbutton: {
            root: ({ context }) => ({
                className: [
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900', //Dark Mode
                    {
                        'cursor-default pointer-events-none opacity-60': context.disabled
                    }
                ]
            }),
            label: 'flex-initial w-0'
        },
        movetosourcebutton: {
            root: ({ context }) => ({
                className: [
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900', //Dark Mode
                    {
                        'cursor-default pointer-events-none opacity-60': context.disabled
                    }
                ]
            }),
            label: 'flex-initial w-0'
        },
        movealltosourcebutton: {
            root: ({ context }) => ({
                className: [
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900', //Dark Mode
                    {
                        'cursor-default pointer-events-none opacity-60': context.disabled
                    }
                ]
            }),
            label: 'flex-initial w-0'
        },
        targetcontrols: 'flex flex-col justify-center p-5',
        targetmoveupbutton: {
            root: ({ context }) => ({
                className: [
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900', //Dark Mode
                    {
                        'cursor-default pointer-events-none opacity-60': context.disabled
                    }
                ]
            }),
            label: 'flex-initial w-0'
        },
        targetmovetopbutton: {
            root: ({ context }) => ({
                className: [
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900', //Dark Mode
                    {
                        'cursor-default pointer-events-none opacity-60': context.disabled
                    }
                ]
            }),
            label: 'flex-initial w-0'
        },
        targetmovedownbutton: {
            root: ({ context }) => ({
                className: [
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900', //Dark Mode
                    {
                        'cursor-default pointer-events-none opacity-60': context.disabled
                    }
                ]
            }),
            label: 'flex-initial w-0'
        },
        targetmovebottombutton: {
            root: ({ context }) => ({
                className: [
                    'relative inline-flex cursor-pointer user-select-none items-center align-bottom text-center overflow-hidden m-0', // button component
                    'text-white bg-blue-500 border border-blue-500 rounded-md',
                    'transition duration-200 ease-in-out',
                    'justify-center px-0 py-3', // icon only
                    'mb-2', // orderlist button
                    'dark:bg-sky-300 dark:border-sky-300 dark:text-gray-900', //Dark Mode
                    {
                        'cursor-default pointer-events-none opacity-60': context.disabled
                    }
                ]
            }),
            label: 'flex-initial w-0'
        },
        targetwrapper: 'grow shrink basis-2/4',
        targetheader: {
            className: [
                'bg-slate-50 text-slate-700 border border-gray-300 p-5 font-bold border-b-0 rounded-t-md',
                'dark:bg-gray-900 dark:text-white/80 dark:border-blue-900/40' //Dark Mode
            ]
        },
        targetlist: {
            className: [
                'list-none m-0 p-0 overflow-auto min-h-[12rem] max-h-[24rem]',
                'border border-gray-300 bg-white text-gray-600 py-3 px-0 rounded-b-md outline-none',
                'dark:border-blue-900/40 dark:bg-gray-900 dark:text-white/80' //Dark Mode
            ]
        },
        transition: {
            enterFromClass: '!transition-none',
            enterActiveClass: '!transition-none',
            leaveActiveClass: '!transition-none',
            leaveToClass: '!transition-none'
        }
    },
    paginator: {
        root: {
            className: [
                'flex items-center justify-center flex-wrap',
                'bg-white text-gray-500 border-0 px-4 py-2 rounded-md',
                'dark:bg-gray-900 dark:text-white/60 dark:border-blue-900/40' // Dark Mode
            ]
        },
        firstpagebutton: ({ context }) => ({
            className: [
                'relative inline-flex items-center justify-center user-none overflow-hidden leading-none',
                'border-0 text-gray-500  min-w-[3rem] h-12 m-[0.143rem] rounded-md',
                'transition duration-200',
                'dark:text-white', //Dark Mode
                {
                    'cursor-default pointer-events-none opacity-60': context.disabled,
                    'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]': !context.disabled // Focus
                }
            ]
        }),
        previouspagebutton: ({ context }) => ({
            className: [
                'relative inline-flex items-center justify-center user-none overflow-hidden leading-none',
                'border-0 text-gray-500 min-w-[3rem] h-12 m-[0.143rem] rounded-md',
                'transition duration-200',
                'dark:text-white', //Dark Mode
                {
                    'cursor-default pointer-events-none opacity-60': context.disabled,
                    'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]': !context.disabled // Focus
                }
            ]
        }),
        nextpagebutton: ({ context }) => ({
            className: [
                'relative inline-flex items-center justify-center user-none overflow-hidden leading-none',
                'border-0 text-gray-500 min-w-[3rem] h-12 m-[0.143rem] rounded-md',
                'transition duration-200',
                'dark:text-white', //Dark Mode
                {
                    'cursor-default pointer-events-none opacity-60': context.disabled,
                    'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]': !context.disabled // Focus
                }
            ]
        }),
        lastpagebutton: ({ context }) => ({
            className: [
                'relative inline-flex items-center justify-center user-none overflow-hidden leading-none',
                'border-0 text-gray-500 min-w-[3rem] h-12 m-[0.143rem] rounded-md',
                'transition duration-200',
                'dark:text-white', //Dark Mode
                {
                    'cursor-default pointer-events-none opacity-60': context.disabled,
                    'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]': !context.disabled // Focus
                }
            ]
        }),
        pagebutton: ({ context }) => ({
            className: [
                'relative inline-flex items-center justify-center user-none overflow-hidden leading-none',
                'border-0 text-gray-500 min-w-[3rem] h-12 m-[0.143rem] rounded-md',
                'transition duration-200',
                'dark:border-blue-300 dark:text-white', // Dark Mode
                'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', // Focus
                {
                    'bg-blue-50 border-blue-50 text-blue-700 dark:bg-blue-300': context.active
                }
            ]
        }),
        rowperpagedropdown: {
            root: ({ props, state }) => ({
                className: [
                    'inline-flex relative cursor-pointer user-none',
                    'bg-white border rounded-md',
                    'transition duration-200',
                    'h-12 mx-2',
                    'dark:bg-gray-950 dark:border-blue-900/40', //DarkMode
                    {
                        'outline-none outline-offset-0 shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] border-blue-500': state.focused && !props.disabled, //Focus
                        'border-gray-300': !state.focused,
                        'hover:border-blue-500': !props.disabled //Hover
                    }
                ]
            }),
            input: {
                className: [
                    'font-sans text-base text-gray-600 p-3 m-0 rounded-md apperance-none',
                    'block whitespace-nowrap overflow-hidden flex-auto w-[1%] cursor-pointer text-ellipsis border-0 pr-0',
                    'focus:outline-none focus:outline-offset-0',
                    'dark:text-white' //Dark Mode
                ]
            },
            trigger: {
                className: ['flex items-center justify-center shrink-0', 'text-gray-500 dark:text-white w-12 rounded-r-md']
            },
            panel: {
                className: [
                    'bg-white text-gray-600 border-0 rounded-md shadow-[0_2px_12px_rgba(0,0,0,0.1)]',
                    'dark:bg-gray-900 dark:text-white/80 dark:border-blue-900/40' //Dark Mode
                ]
            },
            wrapper: 'overflow-auto',
            list: 'm-0 p-0 py-3 list-none',
            item: ({ context }) => ({
                className: [
                    'relative font-normal cursor-pointer space-nowrap overflow-hidden',
                    'm-0 py-3 px-5 border-none text-gray-600 rounded-none',
                    'transition duration-200',
                    'dark:text-white/80', // Dark Mode
                    {
                        'text-blue-700 bg-blue-50 dark:text-white/80 dark:bg-blue-300': !context.focused && context.selected,
                        'bg-blue-300/40': context.focused && context.selected,
                        'text-gray-600 bg-gray-300 dark:text-white/80 dark:bg-blue-900/40': context.focused && !context.selected
                    }
                ]
            })
        },
        jumptopageinput: {
            root: 'inline-flex mx-2',
            input: {
                className: [
                    'font-sans text-base text-gray-600 p-3 m-0 rounded-md apperance-none',
                    'block whitespace-nowrap overflow-hidden flex-auto w-[1%] cursor-pointer text-ellipsis border border-gray-300 pr-0',
                    'focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] focus:border-blue-300',
                    'dark:text-white dark:bg-gray-950 dark:border-blue-900/40', //Dark Mode
                    'm-0 flex-auto max-w-[3rem]'
                ]
            }
        },
        jumptopagedropdown: {
            root: ({ props, state }) => ({
                className: [
                    'inline-flex relative cursor-pointer user-none',
                    'bg-white border rounded-md',
                    'transition duration-200',
                    'h-12 mx-2',
                    'dark:bg-gray-950 dark:border-blue-900/40', //DarkMode
                    {
                        'outline-none outline-offset-0 shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] border-blue-500': state.focused && !props.disabled, //Focus
                        'border-gray-300': !state.focused,
                        'hover:border-blue-500': !props.disabled //Hover
                    }
                ]
            }),
            input: {
                className: [
                    'font-sans text-base text-gray-600 p-3 m-0 rounded-md apperance-none',
                    'block whitespace-nowrap overflow-hidden flex-auto w-[1%] cursor-pointer text-ellipsis border-0 pr-0',
                    'focus:outline-none focus:outline-offset-0',
                    'dark:text-white' //Dark Mode
                ]
            },
            trigger: {
                className: ['flex items-center justify-center shrink-0', 'text-gray-500 dark:text-white w-12 rounded-r-md']
            },
            panel: {
                className: [
                    'bg-white text-gray-600 border-0 rounded-md shadow-[0_2px_12px_rgba(0,0,0,0.1)]',
                    'dark:bg-gray-900 dark:text-white/80 dark:border-blue-900/40' //Dark Mode
                ]
            },
            wrapper: 'overflow-auto',
            list: 'm-0 p-0 py-3 list-none',
            item: ({ context }) => ({
                className: [
                    'relative font-normal cursor-pointer space-nowrap overflow-hidden',
                    'm-0 py-3 px-5 border-none text-gray-600 rounded-none',
                    'transition duration-200',
                    'dark:text-white/80', // Dark Mode
                    {
                        'text-blue-700 bg-blue-50 dark:text-white/80 dark:bg-blue-300': !context.focused && context.selected,
                        'bg-blue-300/40': context.focused && context.selected,
                        'text-gray-600 bg-gray-300 dark:text-white/80 dark:bg-blue-900/40': context.focused && !context.selected
                    }
                ]
            })
        }
    },
    treetable: {
        root: ({ props }) => ({
            className: [
                'relative',
                {
                    'flex flex-col h-full': props.scrollHeight === 'flex'
                }
            ]
        }),
        loadingoverlay: {
            className: [
                'fixed w-full h-full t-0 l-0 bg-gray-100/40',
                'transition duration-200',
                'absolute flex items-center justify-center z-2',
                'dark:bg-gray-950/40' // Dark Mode
            ]
        },
        loadingicon: 'w-8 h-8',
        header: {
            className: [
                'bg-slate-50 text-slate-700 border border-x-0 border-t-0 border-gray-300 p-4 font-bold',
                'dark:bg-gray-900 dark:text-white/70 dark:border-blue-900/40' // Dark Mode
            ]
        },
        wrapper: ({ props }) => ({
            className: [
                {
                    'relative overflow-auto': props.scrollable,
                    'overflow-x-auto': props.resizableColumns
                }
            ]
        }),
        footer: {
            className: [
                'bg-slate-50 text-slate-700 border border-x-0 border-t-0 border-gray-300 p-4 font-bold',
                'dark:bg-gray-900 dark:text-white/70 dark:border-blue-900/40' // Dark Mode
            ]
        },
        table: 'border-collapse table-fixed w-full',
        thead: ({ props }) => ({
            className: [
                {
                    'block sticky top-0 z-[1]': props.scrollable
                }
            ]
        }),
        tbody: ({ props }) => ({
            className: [
                {
                    block: props.scrollable
                }
            ]
        }),
        tfoot: ({ props }) => ({
            className: [
                {
                    block: props.scrollable
                }
            ]
        }),
        headerrow: ({ props }) => ({
            className: [
                {
                    'flex flex-nowrap w-full': props.scrollable
                }
            ]
        }),
        row: ({ context }) => ({
            className: [
                'transition duration-200',
                'focus:outline focus:outline-[0.15rem] focus:outline-blue-200 focus:outline-offset-[-0.15rem]', // Focus
                context.selected ? 'bg-blue-50 text-blue-700 dark:bg-blue-300 dark:text-white/80' : 'bg-white text-gray-600 dark:bg-gray-900 dark:text-white/80',
                {
                    'hover:bg-gray-300/20 hover:text-gray-600 dark:hover:bg-gray-950': context.selectable && !context.selected, // Hover
                    'flex flex-nowrap w-full': context.scrollable
                }
            ]
        }),
        column: {
            headercell: ({ context }) => ({
                className: [
                    'text-left border-gray-300 border font-bold',
                    'transition duration-200',
                    context.sorted ? 'bg-blue-50 text-blue-700' : 'bg-slate-50',
                    context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4', // Size
                    'dark:border-blue-900/40 dark:text-white/80 dark:bg-gray-900', //Dark Mode
                    {
                        'flex flex-1 items-center': context.scrollable,
                        'flex-initial shrink-0': context.scrollable && context.scrollDirection === 'both' && !context.frozen,
                        'sticky z-[1]': context.scrollable && context.scrollDirection === 'both' && context.frozen,
                        'border-x-0 border-l-0 border-t-0': !context.showGridlines,
                        'overflow-hidden relative bg-clip-padding': context.resizable && !context.frozen
                    }
                ]
            }),
            bodycell: ({ context }) => ({
                className: [
                    'text-left border-gray-300 border',
                    'transition duration-200',
                    context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4', // Size
                    'dark:border-blue-900/40', //Dark Mode
                    {
                        'cursor-pointer': context.selectable,
                        'flex flex-1 items-center': context.scrollable,
                        'flex-initial shrink-0': context.scrollable && context.scrollDirection === 'both' && !context.frozen,
                        sticky: context.scrollable && context.scrollDirection === 'both' && context.frozen,
                        'border-x-0 border-l-0': !context.showGridlines
                    }
                ]
            }),
            rowtoggler: ({ context }) => ({
                className: [
                    'relative inline-flex items-center justify-center align-center cursor-pointer select-none overflow-hidden bg-transparent',
                    'w-8 h-8 border-0 rounded mr-0.5',
                    context.selected ? 'text-blue-700' : 'text-gray-500',
                    'dark:text-white/70' //Dark Mode
                ]
            }),
            sorticon: ({ context }) => ({
                className: ['ml-2', context.sorted ? 'text-blue-700 dark:text-white/80' : 'text-slate-700 dark:text-white/70']
            }),
            sortbadge: {
                className: [
                    'h-[1.143rem] min-w-[1.143rem] leading-[1.143rem] text-blue-700 bg-blue-50 ml-2 rounded-[50%]',
                    'dark:text-white/80 dark:bg-blue-500/40' // Dark Mode
                ]
            },
            columnresizer: 'block absolute top-0 right-0 m-0 w-2 h-full p-0 cursor-col-resize border border-transparent',
            checkboxwrapper: {
                className: ['cursor-pointer inline-flex relative select-none align-bottom', 'w-6 h-6 mr-2']
            },
            checkbox: ({ context }) => ({
                className: [
                    'flex items-center justify-center',
                    'border-2 w-6 h-6 text-gray-600 rounded-lg transition-colors duration-200',
                    context.checked ? 'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400' : 'border-gray-300 bg-white dark:border-blue-900/40 dark:bg-gray-900',
                    {
                        'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !context.disabled
                    }
                ]
            }),
            checkboxicon: ({ context }) => ({
                className: [
                    'w-4 h-4 transition-all duration-200 text-base dark:text-gray-900',
                    {
                        'text-white': context.checked
                    }
                ]
            })
        },
        resizehelper: 'absolute hidden w-px z-10 bg-blue-500 dark:bg-blue-300'
    },
    datatable: {
        root: ({ props }) => ({
            className: [
                'relative',
                {
                    'flex flex-col h-full': props.scrollable && props.scrollHeight === 'flex'
                }
            ]
        }),
        loadingoverlay: {
            className: [
                'fixed w-full h-full t-0 l-0 bg-gray-100/40',
                'transition duration-200',
                'absolute flex items-center justify-center z-2',
                'dark:bg-gray-950/40' // Dark Mode
            ]
        },
        loadingicon: 'w-8 h-8',
        wrapper: ({ props }) => ({
            className: [
                {
                    relative: props.scrollable,
                    'flex flex-col grow h-full': props.scrollable && props.scrollHeight === 'flex'
                }
            ]
        }),
        header: ({ props }) => ({
            className: [
                'bg-slate-50 text-slate-700 border-gray-300 font-bold p-4',
                'dark:border-blue-900/40 dark:text-white/80 dark:bg-gray-900', // Dark Mode
                props.showGridlines ? 'border-x border-t border-b-0' : 'border-y border-x-0'
            ]
        }),
        table: 'w-full border-spacing-0',
        thead: ({ context }) => ({
            className: [
                {
                    'bg-slate-50 top-0 z-[1]': context.scrollable
                }
            ]
        }),
        tbody: ({ instance, context }) => ({
            className: [
                {
                    'sticky z-[1]': instance.frozenRow && context.scrollable
                }
            ]
        }),
        tfoot: ({ context }) => ({
            className: [
                {
                    'bg-slate-50 bottom-0 z-[1]': context.scrollable
                }
            ]
        }),
        footer: {
            className: [
                'bg-slate-50 text-slate-700 border-t-0 border-b border-x-0 border-gray-300 font-bold p-4',
                'dark:border-blue-900/40 dark:text-white/80 dark:bg-gray-900' // Dark Mode
            ]
        },
        column: {
            headercell: ({ context, props }) => ({
                className: [
                    'text-left border-0 border-b border-solid border-gray-300 dark:border-blue-900/40 font-bold',
                    'transition duration-200',
                    context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4', // Size
                    context.sorted ? 'bg-blue-50 text-blue-700' : 'bg-slate-50 text-slate-700', // Sort
                    context.sorted ? 'dark:text-white/80 dark:bg-blue-300' : 'dark:text-white/80 dark:bg-gray-900', // Dark Mode
                    {
                        'sticky z-[1]': props.frozen || props.frozen === '', // Frozen Columns
                        'border-x border-y': context?.showGridlines,
                        'overflow-hidden space-nowrap border-y relative bg-clip-padding': context.resizable // Resizable
                    }
                ]
            }),
            headercontent: 'flex items-center',
            bodycell: ({ props, context }) => ({
                className: [
                    'text-left border-0 border-b border-solid border-gray-300',
                    context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4', // Size
                    'dark:text-white/80 dark:border-blue-900/40', // Dark Mode
                    {
                        'sticky bg-inherit': props.frozen || props.frozen === '', // Frozen Columns
                        'border-x border-y': context?.showGridlines
                    }
                ]
            }),
            footercell: ({ context }) => ({
                className: [
                    'text-left border-0 border-b border-solid border-gray-300 font-bold',
                    'bg-slate-50 text-slate-700',
                    'transition duration-200',
                    context?.size === 'small' ? 'p-2' : context?.size === 'large' ? 'p-5' : 'p-4', // Size
                    'dark:text-white/80 dark:bg-gray-900 dark:border-blue-900/40', // Dark Mode
                    {
                        'border-x border-y': context?.showGridlines
                    }
                ]
            }),
            sorticon: ({ context }) => ({
                className: ['ml-2', context.sorted ? 'text-blue-700 dark:text-white/80' : 'text-slate-700 dark:text-white/70']
            }),
            sortbadge: {
                className: [
                    'flex items-center justify-center align-middle',
                    'rounded-[50%] w-[1.143rem] leading-[1.143rem] ml-2',
                    'text-blue-700 bg-blue-50',
                    'dark:text-white/80 dark:bg-blue-400' // Dark Mode
                ]
            },
            columnfilter: 'inline-flex items-center ml-auto',
            filteroverlay: {
                className: [
                    'bg-white text-gray-600 border-0 rounded-md min-w-[12.5rem]',
                    'dark:bg-gray-900 dark:border-blue-900/40 dark:text-white/80' //Dark Mode
                ]
            },
            filtermatchmodedropdown: {
                root: 'min-[0px]:flex mb-2'
            },
            filterrowitems: 'm-0 p-0 py-3 list-none ',
            filterrowitem: ({ context }) => ({
                className: ['m-0 py-3 px-5 bg-transparent', 'transition duration-200', context?.highlighted ? 'text-blue-700 bg-blue-100 dark:text-white/80 dark:bg-blue-300' : 'text-gray-600 bg-transparent dark:text-white/80 dark:bg-transparent']
            }),
            filteroperator: {
                className: [
                    'px-5 py-3 border-b border-solid border-gray-300 text-slate-700 bg-slate-50 rounded-t-md',
                    'dark:border-blue-900/40 dark:text-white/80 dark:bg-gray-900' // Dark Mode
                ]
            },
            filteroperatordropdown: {
                root: 'min-[0px]:flex'
            },
            filterconstraint: 'p-5 border-b border-solid border-gray-300 dark:border-blue-900/40',
            filteraddrule: 'py-3 px-5',
            filteraddrulebutton: {
                root: 'justify-center w-full min-[0px]:text-sm',
                label: 'flex-auto grow-0',
                icon: 'mr-2'
            },
            filterremovebutton: {
                root: 'ml-2',
                label: 'grow-0'
            },
            filterbuttonbar: 'flex items-center justify-between p-5',
            filterclearbutton: {
                root: 'w-auto min-[0px]:text-sm border-blue-500 text-blue-500 px-4 py-3'
            },
            filterapplybutton: {
                root: 'w-auto min-[0px]:text-sm px-4 py-3'
            },
            filtermenubutton: ({ context }) => ({
                className: [
                    'inline-flex justify-center items-center cursor-pointer no-underline overflow-hidden relative ml-2',
                    'w-8 h-8 rounded-[50%]',
                    'transition duration-200',
                    'hover:text-slate-700 hover:bg-gray-300/20', // Hover
                    'focus:outline-0 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', // Focus
                    'dark:text-white/70 dark:hover:text-white/80 dark:bg-gray-900', // Dark Mode
                    {
                        'bg-blue-50 text-blue-700': context.active
                    }
                ]
            }),
            headerfilterclearbutton: ({ context }) => ({
                className: [
                    'inline-flex justify-center items-center cursor-pointer no-underline overflow-hidden relative',
                    'text-left bg-transparent m-0 p-0 border-none select-none ml-2',
                    {
                        invisible: !context.hidden
                    }
                ]
            }),
            columnresizer: 'block absolute top-0 right-0 m-0 w-2 h-full p-0 cursor-col-resize border border-transparent',
            rowreordericon: 'cursor-move',
            roweditorinitbutton: {
                className: [
                    'inline-flex items-center justify-center overflow-hidden relative',
                    'text-left cursor-pointer select-none',
                    'w-8 h-8 border-0 rounded-[50%]',
                    'transition duration-200',
                    'text-slate-700 border-transparent',
                    'focus:outline-0 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', //Focus
                    'hover:text-slate-700 hover:bg-gray-300/20', //Hover
                    'dark:text-white/70' // Dark Mode
                ]
            },
            roweditorsavebutton: {
                className: [
                    'inline-flex items-center justify-center overflow-hidden relative',
                    'text-left cursor-pointer select-none',
                    'w-8 h-8 border-0 rounded-[50%]',
                    'transition duration-200',
                    'text-slate-700 border-transparent',
                    'focus:outline-0 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', //Focus
                    'hover:text-slate-700 hover:bg-gray-300/20', //Hover
                    'dark:text-white/70' // Dark Mode
                ]
            },
            roweditorcancelbutton: {
                className: [
                    'inline-flex items-center justify-center overflow-hidden relative',
                    'text-left cursor-pointer select-none',
                    'w-8 h-8 border-0 rounded-[50%]',
                    'transition duration-200',
                    'text-slate-700 border-transparent',
                    'focus:outline-0 focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]', //Focus
                    'hover:text-slate-700 hover:bg-gray-300/20', //Hover
                    'dark:text-white/70' // Dark Mode
                ]
            },
            radiobuttonwrapper: {
                className: ['relative inline-flex cursor-pointer select-none align-bottom', 'w-6 h-6']
            },
            radiobutton: ({ context }) => ({
                className: [
                    'flex justify-center items-center',
                    'border-2 w-6 h-6 text-gray-700 rounded-full transition duration-200 ease-in-out',
                    context.checked ? 'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400' : 'border-gray-300 bg-white dark:border-blue-900/40 dark:bg-gray-900',
                    {
                        'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !context.disabled,
                        'cursor-default opacity-60': context.disabled
                    }
                ]
            }),
            radiobuttonicon: ({ context }) => ({
                className: ['transform rounded-full', 'block w-3 h-3 transition duration-200 bg-white dark:bg-gray-900', { 'backface-hidden scale-10 invisible': context.checked === false, 'transform scale-100 visible': context.checked === true }]
            }),
            headercheckboxwrapper: {
                className: ['cursor-pointer inline-flex relative select-none align-bottom', 'w-6 h-6']
            },
            headercheckbox: ({ context }) => ({
                className: [
                    'flex items-center justify-center',
                    'border-2 w-6 h-6 text-gray-600 rounded-lg transition-colors duration-200',
                    context.checked ? 'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400' : 'border-gray-300 bg-white dark:border-blue-900/40 dark:bg-gray-900',
                    {
                        'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !context.disabled,
                        'cursor-default opacity-60': context.disabled
                    }
                ]
            }),
            headercheckboxicon: 'w-4 h-4 transition-all duration-200 text-white text-base dark:text-gray-900',
            checkboxwrapper: {
                className: ['cursor-pointer inline-flex relative select-none align-bottom', 'w-6 h-6']
            },
            checkbox: ({ context }) => ({
                className: [
                    'flex items-center justify-center',
                    'border-2 w-6 h-6 text-gray-600 rounded-lg transition-colors duration-200',
                    context.checked ? 'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400' : 'border-gray-300 bg-white dark:border-blue-900/40 dark:bg-gray-900',
                    {
                        'hover:border-blue-500 dark:hover:border-blue-400 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[inset_0_0_0_0.2rem_rgba(147,197,253,0.5)]': !context.disabled,
                        'cursor-default opacity-60': context.disabled
                    }
                ]
            }),
            checkboxicon: 'w-4 h-4 transition-all duration-200 text-white text-base dark:text-gray-900',
            transition: TRANSITIONS.overlay
        },
        bodyrow: ({ context }) => ({
            className: [
                context.selected ? 'bg-blue-50 text-blue-700 dark:bg-blue-300' : 'bg-white text-gray-600 dark:bg-gray-900',
                context.stripedRows ? (context.index % 2 === 0 ? 'bg-white text-gray-600 dark:bg-gray-900' : 'bg-blue-50/50 text-gray-600 dark:bg-gray-950') : '',
                'transition duration-200',
                'focus:outline focus:outline-[0.15rem] focus:outline-blue-200 focus:outline-offset-[-0.15rem]', // Focus
                'dark:text-white/80 dark:focus:outline dark:focus:outline-[0.15rem] dark:focus:outline-blue-300 dark:focus:outline-offset-[-0.15rem]', // Dark Mode
                {
                    'cursor-pointer': context.selectable,
                    'hover:bg-gray-300/20 hover:text-gray-600': context.selectable && !context.selected // Hover
                }
            ]
        }),
        rowexpansion: 'bg-white text-gray-600 dark:bg-gray-900 dark:text-white/80',
        rowgroupheader: {
            className: ['sticky z-[1]', 'bg-white text-gray-600', 'transition duration-200']
        },
        rowgroupfooter: {
            className: ['sticky z-[1]', 'bg-white text-gray-600', 'transition duration-200']
        },
        rowgrouptoggler: {
            className: [
                'text-left m-0 p-0 cursor-pointer select-none',
                'inline-flex items-center justify-center overflow-hidden relative',
                'w-8 h-8 text-gray-500 border-0 bg-transparent rounded-[50%]',
                'transition duration-200',
                'dark:text-white/70' // Dark Mode
            ]
        },
        rowgrouptogglericon: 'inline-block w-4 h-4',
        resizehelper: 'absolute hidden w-px z-10 bg-blue-500 dark:bg-blue-300'
    },
    // CHART
    chart: {
        root: 'relative'
    }
};
