import { ArrowDown, ArrowsV, Building, Database, Wifi } from '@primeicons/react';
import { User } from '@primeicons/react/user';
import { Users } from '@primeicons/react/users';
import { AnimateOnScroll } from '@primereact/ui/animateonscroll';
import { Avatar } from '@primereact/ui/avatar';

export default function EnterLeaveDemo() {
    return (
        <div className="flex flex-col items-center overflow-hidden">
            <div className="flex flex-col items-center gap-4">
                <div className="text-2xl font-medium">Scroll Down</div>
                <div className="animate-bounce h-8 w-8 bg-primary text-primary-contrast rounded-full inline-flex items-center justify-center">
                    <ArrowDown />
                </div>
            </div>
            <div className="h-[30rem]"></div>
            <div className="flex flex-wrap justify-center gap-8">
                <AnimateOnScroll
                    className="flex flex-col border border-surface shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4"
                    enterClassName="animate-enter fade-in-10 slide-in-from-l-8 animate-duration-1000"
                    leaveClassName="animate-leave fade-out-0 animate-duration-100"
                >
                    <div className="rounded-full bg-primary text-primary-contrast w-12 h-12 flex items-center justify-center">
                        <User className="!text-2xl"></User>
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
                        <Users className="!text-2xl"></Users>
                    </div>
                    <span className="text-2xl font-bold">Team</span>
                    <span className="text-muted-color text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                </AnimateOnScroll>
                <AnimateOnScroll
                    className="flex flex-col border border-surface shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4"
                    enterClassName="animate-enter fade-in-10 slide-in-from-r-8 animate-duration-1000"
                >
                    <div className="rounded-full bg-primary text-primary-contrast w-12 h-12 flex items-center justify-center">
                        <Building className="!text-2xl"></Building>
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
                    <Avatar.Root shape="circle" size="xlarge">
                        <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" />
                    </Avatar.Root>
                    <span className="text-2xl font-medium">Jenna Thompson</span>
                    <span className="text-muted-color text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                </AnimateOnScroll>
                <AnimateOnScroll
                    className="flex flex-col border border-primary-200 shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4"
                    enterClassName="animate-enter fade-in-10 slide-in-from-b-20 animate-duration-1000"
                    leaveClassName="animate-leave fade-out-0 animate-duration-100"
                >
                    <Avatar.Root shape="circle" size="xlarge">
                        <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png" />
                    </Avatar.Root>
                    <span className="text-2xl font-medium">Isabel Garcia</span>
                    <span className="text-muted-color text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                </AnimateOnScroll>
                <AnimateOnScroll
                    className="flex flex-col border border-primary-200 shadow-lg justify-center items-center max-w-80 rounded-2xl p-8 gap-4"
                    enterClassName="animate-enter fade-in-10 slide-in-from-t-20 animate-duration-1000"
                    leaveClassName="animate-leave fade-out-0 animate-duration-100"
                >
                    <Avatar.Root shape="circle" size="xlarge">
                        <Avatar.Image src="https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png" />
                    </Avatar.Root>
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
                        <Wifi className="text-2xl!" />
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
                        <Database className="text-2xl!" />
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
                        <ArrowsV className="text-2xl!" />
                    </div>
                    <span className="text-2xl font-bold">Requests</span>
                    <span className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                </AnimateOnScroll>
            </div>
            <div className="h-[15rem]"></div>
        </div>
    );
}
