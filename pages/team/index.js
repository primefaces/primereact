import React from 'react';

const TemplatesPage = () => {
    return (
        <div className="content-section">
            <div className="doc-intro">
                <h1>Meet the Team</h1>
                <p>
                    <a href="https://www.primetek.com.tr" className="text-primary hover:underline font-medium">
                        PrimeTek
                    </a>{' '}
                    is a world renowned vendor of popular UI Component suites including{' '}
                    <a href="https://primefaces.org" className="text-primary hover:underline font-medium">
                        PrimeFaces
                    </a>
                    ,{' '}
                    <a href="https://primeng.org" className="text-primary hover:underline font-medium">
                        PrimeNG
                    </a>
                    ,{' '}
                    <a href="https://primereact.org" className="text-primary hover:underline font-medium">
                        PrimeReact
                    </a>{' '}
                    and{' '}
                    <a href="https://primevue.org" className="text-primary hover:underline font-medium">
                        PrimeVue
                    </a>
                    . All the members in our team are full time employees of PrimeTek who share the same passion and vision for open source to create awesome UI libraries.
                </p>
            </div>

            <div className="card p-8">
                <div className="flex flex-wrap gap-8">
                    <div className="flex flex-column align-items-center flex-auto">
                        <img src="/images/team/cagatay.jpg" className="border-circle mb-4" alt="Cagatay Civici" />
                        <span className="mb-2 text-xl font-bold">Çağatay Çivici</span>
                        <span>Founder</span>
                    </div>
                    <div className="flex flex-column align-items-center flex-auto">
                        <img src="/images/team/mert.jpg" className="border-circle mb-4" alt="Mert Sincan" />
                        <span className="mb-2 text-xl font-bold">Mert Sincan</span>
                        <span>CTO</span>
                    </div>
                    <div className="flex flex-column align-items-center flex-auto">
                        <img src="/images/team/onur.jpg" className="border-circle mb-4" alt="Onur Şentüre" />
                        <span className="mb-2 text-xl font-bold">Onur Şentüre</span>
                        <span>Design Lead</span>
                    </div>
                    <div className="flex flex-column align-items-center flex-auto">
                        <img src="/images/team/dilara.jpg" className="border-circle mb-4" alt="Dilara Can" />
                        <span className="mb-2 text-xl font-bold">Dilara Güngenci</span>
                        <span>Business Administration</span>
                    </div>
                    <div className="flex flex-column align-items-center flex-auto">
                        <img src="/images/team/cetin.jpg" className="border-circle mb-4" alt="Çetin Çakıroğlu" />
                        <span className="mb-2 text-xl font-bold">Çetin Çakıroğlu</span>
                        <span>Front-End Developer</span>
                    </div>
                    <div className="flex flex-column align-items-center flex-auto">
                        <img src="/images/team/tugce.jpg" className="border-circle mb-4" alt="Tuğçe Küçükoğlu" />
                        <span className="mb-2 text-xl font-bold">Tuğçe Küçükoğlu</span>
                        <span>Front-End Developer</span>
                    </div>
                    <div className="flex flex-column align-items-center flex-auto">
                        <img src="/images/team/atakan.jpg" className="border-circle mb-4" alt="Atakan Tepe" />
                        <span className="mb-2 text-xl font-bold">Atakan Tepe</span>
                        <span>Front-End Developer</span>
                    </div>
                    <div className="flex flex-column align-items-center flex-auto">
                        <img src="/images/team/kerem.jpg" className="border-circle mb-4" alt="Kerem Yıldan" />
                        <span className="mb-2 text-xl font-bold">Kerem Yıldan</span>
                        <span>UI/UX Designer</span>
                    </div>
                    <div className="flex flex-column align-items-center flex-auto">
                        <img src="/images/team/ulas.jpg" className="border-circle mb-4" alt="Ulaş Turan" />
                        <span className="mb-2 text-xl font-bold">Ulaş Turan</span>
                        <span>Front-End Developer</span>
                    </div>
                    <div className="flex flex-column align-items-center flex-auto">
                        <img src="/images/team/bugra.jpg" className="border-circle mb-4" alt="Buğra Beydüz" />
                        <span className="mb-2 text-xl font-bold">Buğra Beydüz</span>
                        <span>Front-End Developer</span>
                    </div>
                    <div className="flex flex-column align-items-center flex-auto">
                        <img src="/images/team/bahadir.jpg" className="border-circle mb-4" alt="Bahadır Sofuoğlu" />
                        <span className="mb-2 text-xl font-bold">Bahadır Sofuoğlu</span>
                        <span>Front-End Developer</span>
                    </div>
                    <div className="flex flex-column align-items-center flex-auto">
                        <img src="/images/team/aliriza.jpg" className="border-circle mb-4" alt="Alirıza Gücal" />
                        <span className="mb-2 text-xl font-bold">Ali Rıza Gücal</span>
                        <span>Front-End Developer</span>
                    </div>
                    <div className="flex flex-column align-items-center flex-auto">
                        <img src="/images/team/olgu.jpg" className="border-circle mb-4" alt="Olgu Başak" />
                        <span className="mb-2 text-xl font-bold">Olgu Başak</span>
                        <span>Java Web Developer</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TemplatesPage;
