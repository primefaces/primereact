import Image from 'next/image';

export default function IntroDemo() {
    return (
        <div>
            <div className="doc-intro">
                <p>
                    <a href="https://www.primetek.com.tr"> PrimeTek </a> is a world renowned vendor of popular UI Component suites including <a href="https://primefaces.org"> PrimeFaces </a>, <a href="https://primeng.org"> PrimeNG </a>,
                    <a href="https://primereact.org"> PrimeReact </a> and
                    <a href="https://primevue.org"> PrimeVue </a>. All the members in our team are full time employees of PrimeTek who share the same passion and vision for open source to create awesome UI libraries.
                </p>
            </div>

            <div className="card p-20">
                <div className="flex flex-wrap gap-20">
                    <div className="flex flex-col items-center flex-auto">
                        <Image src="https://primefaces.org/cdn/primevue/images/team/cagatay.jpg" width={150} height={150} className="rounded-full mb-6" alt="Cagatay Civici" />
                        <span className="mb-2 text-xl font-bold">Çağatay Çivici</span>
                        <span>Founder</span>
                    </div>
                    <div className="flex flex-col items-center flex-auto">
                        <Image src="https://primefaces.org/cdn/primevue/images/team/mert.jpg" width={150} height={150} className="rounded-full mb-6" alt="Mert Sincan" />
                        <span className="mb-2 text-xl font-bold">Mert Sincan</span>
                        <span>CTO</span>
                    </div>
                    <div className="flex flex-col items-center flex-auto">
                        <Image src="https://primefaces.org/cdn/primevue/images/team/onur.jpg" width={150} height={150} className="rounded-full mb-6" alt="Onur Şentüre" />
                        <span className="mb-2 text-xl font-bold">Onur Şentüre</span>
                        <span>Design Lead</span>
                    </div>
                    <div className="flex flex-col items-center flex-auto">
                        <Image src="https://primefaces.org/cdn/primevue/images/team/dilara.jpg" width={150} height={150} className="rounded-full mb-6" alt="Dilara Can" />
                        <span className="mb-2 text-xl font-bold">Dilara Güngenci</span>
                        <span>Business Administration</span>
                    </div>
                    <div className="flex flex-col items-center flex-auto">
                        <Image src="https://primefaces.org/cdn/primevue/images/team/cetin.jpg" width={150} height={150} className="rounded-full mb-6" alt="Çetin Çakıroğlu" />
                        <span className="mb-2 text-xl font-bold">Çetin Çakıroğlu</span>
                        <span>Front-End Developer</span>
                    </div>
                    <div className="flex flex-col items-center flex-auto">
                        <Image src="https://primefaces.org/cdn/primevue/images/team/tugce.jpg" width={150} height={150} className="rounded-full mb-6" alt="Tuğçe Küçükoğlu" />
                        <span className="mb-2 text-xl font-bold">Tuğçe Küçükoğlu</span>
                        <span>Front-End Developer</span>
                    </div>
                    <div className="flex flex-col items-center flex-auto">
                        <Image src="https://primefaces.org/cdn/primevue/images/team/atakan.jpg" width={150} height={150} className="rounded-full mb-6" alt="Atakan Tepe" />
                        <span className="mb-2 text-xl font-bold">Atakan Tepe</span>
                        <span>Front-End Developer</span>
                    </div>
                    <div className="flex flex-col items-center flex-auto">
                        <Image src="https://primefaces.org/cdn/primevue/images/team/mehmet.jpg" width={150} height={150} className="rounded-full mb-6" alt="Mehmet Çetin" />
                        <span className="mb-2 text-xl font-bold">Mehmet Çetin</span>
                        <span>Front-End Developer</span>
                    </div>
                    <div className="flex flex-col items-center flex-auto">
                        <Image src="https://primefaces.org/cdn/primevue/images/team/taner.jpg" width={150} height={150} className="rounded-full mb-6" alt="Taner Engin" />
                        <span className="mb-2 text-xl font-bold">Taner Engin</span>
                        <span>Front-End Developer</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
