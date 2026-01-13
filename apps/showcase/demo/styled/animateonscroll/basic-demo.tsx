import { AnimateOnScroll } from '@primereact/ui/animateonscroll';
import { Button } from '@primereact/ui/button';

export default function BasicDemo() {
    return (
        <div className="flex flex-col items-center overflow-hidden">
            <div className="flex flex-col items-center gap-4">
                <div className="text-2xl font-medium">Scroll Down</div>
                <div className="animate-bounce h-8 w-8 bg-primary text-primary-contrast rounded-full inline-flex items-center justify-center">
                    <i className="pi pi-arrow-down" />
                </div>
            </div>
            <div className="h-[45rem]"></div>
            <div className="flex flex-col items-center gap-8 w-full">
                <AnimateOnScroll
                    enterClassName="animate-enter fade-in-10 slide-in-from-b-16 animate-duration-1000"
                    leaveClassName="animate-leave fade-out-0 animate-duration-100"
                >
                    <div className="text-5xl lg:text-[4rem] text-center font-bold max-w-lg lg:max-w-3xl text-surface-900 dark:text-surface-50 ">
                        Discover real-world design inspiration.
                    </div>
                </AnimateOnScroll>
                <AnimateOnScroll
                    enterClassName="animate-enter fade-in-10 slide-in-from-b-16 animate-duration-1000"
                    leaveClassName="animate-leave fade-out-0 animate-duration-100"
                >
                    <div className="max-w-md lg:max-w-md text-base lg:text-lg text-center text-muted-color">
                        Featuring over 400.000 screens and 1,000 iOS, Android & Web apps — New content weekly.
                    </div>
                </AnimateOnScroll>
                <AnimateOnScroll
                    enterClassName="animate-enter fade-in-10 slide-in-from-b-16 animate-duration-1000"
                    leaveClassName="animate-leave fade-out-0 animate-duration-100"
                >
                    <div className="flex items-center justify-center gap-4 font-semibold">
                        <Button size="large" rounded>
                            Join for free
                        </Button>
                        <Button size="large" variant="outlined" rounded severity="primary">
                            See our plans
                            <span className="bg-surface-200 dark:bg-surface-800 size-6 inline-flex items-center justify-center rounded-full">
                                <i className="pi pi-arrow-right font-bold! text-sm!"></i>
                            </span>
                        </Button>
                    </div>
                </AnimateOnScroll>
            </div>
            <div className="h-[15rem]"></div>
        </div>
    );
}
