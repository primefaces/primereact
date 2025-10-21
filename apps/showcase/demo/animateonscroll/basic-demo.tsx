import { AnimateOnScroll } from 'primereact/animateonscroll';
import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';

export default function BasicDemo() {
    return (
        <div className="card flex flex-col items-center overflow-hidden">
            <div className="flex flex-col items-center gap-2">
                <span className="text-xl font-medium">Scroll Down</span>
                <span className="animate-bounce h-8 w-8 bg-primary text-primary-contrast rounded-full inline-flex items-center justify-center">
                    <i className="pi pi-arrow-down" />
                </span>
            </div>
            <div className="h-[30rem]"></div>
            <div className="flex flex-wrap justify-center gap-8">
                <AnimateOnScroll
                    className="flex flex-col border border-surface shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4"
                    enterClassName="animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000"
                    leaveClassName="animate-leave fade-out-0 animate-duration-100"
                >
                    <div className="rounded-full bg-primary text-primary-contrast w-12 h-12 flex items-center justify-center">
                        <i className="pi pi-user !text-2xl"></i>
                    </div>
                    <span className="text-2xl font-bold">Individual</span>
                    <span className="text-muted-color text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                </AnimateOnScroll>
                <AnimateOnScroll
                    className="flex flex-col border border-surface shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4"
                    enterClassName="animate-enter fade-in-10 animate-duration-1000"
                    leaveClassName="animate-leave fade-out-0 animate-duration-100"
                >
                    <div className="rounded-full bg-primary text-primary-contrast w-12 h-12 flex items-center justify-center">
                        <i className="pi pi-users !text-2xl"></i>
                    </div>
                    <span className="text-2xl font-bold">Team</span>
                    <span className="text-muted-color text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                </AnimateOnScroll>
                <AnimateOnScroll
                    className="flex flex-col border border-surface shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4"
                    enterClassName="animate-enter fade-in-10 slide-in-from-r-8 animate-duration-1000"
                >
                    <div className="rounded-full bg-primary text-primary-contrast w-12 h-12 flex items-center justify-center">
                        <i className="pi pi-building !text-2xl"></i>
                    </div>
                    <span className="text-2xl font-bold">Enterprise</span>
                    <span className="text-muted-color text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                </AnimateOnScroll>
            </div>
            <div className="h-[30rem]"></div>
            <div className="flex flex-wrap justify-center gap-8">
                <AnimateOnScroll
                    className="flex flex-col border border-primary-200 shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4"
                    enterClassName="animate-enter fade-in-10 slide-in-from-t-20 animate-duration-1000"
                    leaveClassName="animate-leave fade-out-0 animate-duration-100"
                >
                    <Avatar shape="circle" size="xlarge">
                        <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                    </Avatar>
                    <span className="text-2xl font-medium">Jenna Thompson</span>
                    <span className="text-muted-color text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                </AnimateOnScroll>
                <AnimateOnScroll
                    className="flex flex-col border border-primary-200 shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4"
                    enterClassName="animate-enter fade-in-10 slide-in-from-b-20 animate-duration-1000"
                    leaveClassName="animate-leave fade-out-0 animate-duration-100"
                >
                    <Avatar shape="circle" size="xlarge">
                        <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" />
                    </Avatar>
                    <span className="text-2xl font-medium">Isabel Garcia</span>
                    <span className="text-muted-color text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                </AnimateOnScroll>
                <AnimateOnScroll
                    className="flex flex-col border border-primary-200 shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4"
                    enterClassName="animate-enter fade-in-10 slide-in-from-t-20 animate-duration-1000"
                    leaveClassName="animate-leave fade-out-0 animate-duration-100"
                >
                    <Avatar shape="circle" size="xlarge">
                        <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" />
                    </Avatar>
                    <span className="text-2xl font-medium">Xavier Mason</span>
                    <span className="text-muted-color text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                </AnimateOnScroll>
            </div>
            <div className="h-[30rem]"></div>
            <div className="flex flex-wrap justify-center gap-8">
                <AnimateOnScroll
                    className="flex flex-col bg-primary text-primary-contrast border-primary shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4"
                    enterClassName="animate-enter fade-in-10 spin-in-45 slide-in-from-t-12 animate-duration-1000"
                    leaveClassName="animate-leave fade-out-0 animate-duration-100"
                >
                    <span className="bg-white/20 text-xl font-medium rounded-xl px-4 py-2">850K</span>
                    <span className="text-2xl font-bold">Customers</span>
                    <span className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                </AnimateOnScroll>
                <AnimateOnScroll
                    className="flex flex-col bg-primary text-primary-contrast border-primary shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4"
                    enterClassName="animate-enter fade-in-10 zoom-in-50 slide-in-from-t-20 animate-duration-1000"
                    leaveClassName="animate-leave fade-out-0 animate-duration-100"
                >
                    <span className="bg-white/20 text-xl font-medium rounded-xl px-4 py-2">$1.5M</span>
                    <span className="text-2xl font-bold">Revenue</span>
                    <span className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                </AnimateOnScroll>
                <AnimateOnScroll
                    className="flex flex-col bg-primary text-primary-contrast border-primary shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4"
                    enterClassName="animate-enter fade-in-10 spin-in-[-45deg] slide-in-from-t-16 animate-duration-1000"
                    leaveClassName="animate-leave fade-out-0 animate-duration-100"
                >
                    <span className="bg-white/20 text-xl font-medium rounded-xl px-4 py-2">140K</span>
                    <span className="text-2xl font-bold">Sales</span>
                    <span className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                </AnimateOnScroll>
            </div>
            <div className="h-[30rem]"></div>
            <div className="flex flex-wrap justify-center gap-8">
                <AnimateOnScroll
                    className="flex flex-col bg-purple-500 text-white border-purple-500 shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4"
                    enterClassName="animate-enter fade-in-10 zoom-in-50 animate-duration-1000"
                    leaveClassName="animate-leave fade-out-0 animate-duration-100"
                >
                    <div className="rounded-full border-2 border-white w-12 h-12 flex items-center justify-center">
                        <i className="pi pi-wifi !text-2xl"></i>
                    </div>
                    <span className="text-2xl font-bold">Bandwidth</span>
                    <span className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                </AnimateOnScroll>
                <AnimateOnScroll
                    className="flex flex-col bg-teal-500 text-white border-teal-500 shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4"
                    enterClassName="animate-enter fade-in-10 zoom-in-75 animate-duration-1000"
                    leaveClassName="animate-leave fade-out-0 animate-duration-1000"
                >
                    <div className="rounded-full border-2 border-white w-12 h-12 flex items-center justify-center">
                        <i className="pi pi-database !text-2xl"></i>
                    </div>
                    <span className="text-2xl font-bold">Storage</span>
                    <span className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                </AnimateOnScroll>

                <AnimateOnScroll
                    className="flex flex-col bg-indigo-500 text-white border-indigo-500 shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4"
                    enterClassName="animate-enter fade-in-10 zoom-in-50 animate-duration-1000"
                    leaveClassName="animate-leave fade-out-0 animate-duration-100"
                >
                    <div className="rounded-full border-2 border-white w-12 h-12 flex items-center justify-center">
                        <i className="pi pi-arrows-v !text-2xl"></i>
                    </div>
                    <span className="text-2xl font-bold">Requests</span>
                    <span className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                </AnimateOnScroll>
            </div>
            <div className="h-[30rem]"></div>
            <div className="flex flex-col items-center gap-8 w-full">
                <AnimateOnScroll
                    enterClassName="animate-enter fade-in-10 slide-in-from-b-16 animate-duration-1000"
                    leaveClassName="animate-leave fade-out-0 animate-duration-100"
                >
                    <div className="text-5xl lg:text-7xl text-center font-bold max-w-lg lg:max-w-3xl text-surface-900 dark:text-surface-50">
                        Discover real-world design inspiration.
                    </div>
                </AnimateOnScroll>
                <AnimateOnScroll
                    enterClassName="animate-enter fade-in-10 slide-in-from-b-16 animate-duration-1000"
                    leaveClassName="animate-leave fade-out-0 animate-duration-100"
                >
                    <div className="max-w-md lg:max-w-2xl text-lg lg:text-xl text-center text-muted-color">
                        Featuring over 400.000 screens and 1,000 iOS, Android & Web apps — New content weekly.
                    </div>
                </AnimateOnScroll>
                <AnimateOnScroll
                    enterClassName="animate-enter fade-in-10 slide-in-from-b-16 animate-duration-1000"
                    leaveClassName="animate-leave fade-out-0 animate-duration-100"
                >
                    <div className="flex items-center justify-center gap-4">
                        <Button size="large" rounded>
                            Join for free
                        </Button>
                        <Button size="large" variant="outlined" rounded severity="secondary">
                            See our plans
                        </Button>
                    </div>
                </AnimateOnScroll>
            </div>
            <div className="h-[15rem]"></div>
        </div>
    );
}
