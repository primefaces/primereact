const TemplatesPage = () => {
    return (
        <div>
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

            <div className="card p-7">
                <div className="flex flex-wrap gap-7">
                    <div className="flex flex-column align-items-center flex-auto">
                        <img src="https://primefaces.org/cdn/primereact/images/team/cagatay.jpg" className="border-circle mb-4" alt="Cagatay Civici" />
                        <span className="mb-2 text-xl font-bold">Çağatay Çivici</span>
                        <span>Founder</span>
                    </div>
                    <div className="flex flex-column align-items-center flex-auto">
                        <img src="https://primefaces.org/cdn/primereact/images/team/mert.jpg" className="border-circle mb-4" alt="Mert Sincan" />
                        <span className="mb-2 text-xl font-bold">Mert Sincan</span>
                        <span>CTO</span>
                    </div>
                    <div className="flex flex-column align-items-center flex-auto">
                        <img src="https://primefaces.org/cdn/primereact/images/team/onur.jpg" className="border-circle mb-4" alt="Onur Şentüre" />
                        <span className="mb-2 text-xl font-bold">Onur Şentüre</span>
                        <span>Design Lead</span>
                    </div>
                    <div className="flex flex-column align-items-center flex-auto">
                        <img src="https://primefaces.org/cdn/primereact/images/team/dilara.jpg" className="border-circle mb-4" alt="Dilara Can" />
                        <span className="mb-2 text-xl font-bold">Dilara Güngenci</span>
                        <span>Business Administration</span>
                    </div>
                    <div className="flex flex-column align-items-center flex-auto">
                        <img src="https://primefaces.org/cdn/primereact/images/team/cetin.jpg" className="border-circle mb-4" alt="Çetin Çakıroğlu" />
                        <span className="mb-2 text-xl font-bold">Çetin Çakıroğlu</span>
                        <span>Front-End Developer</span>
                    </div>
                    <div className="flex flex-column align-items-center flex-auto">
                        <img src="https://primefaces.org/cdn/primereact/images/team/tugce.jpg" className="border-circle mb-4" alt="Tuğçe Küçükoğlu" />
                        <span className="mb-2 text-xl font-bold">Tuğçe Küçükoğlu</span>
                        <span>Front-End Developer</span>
                    </div>
                    <div className="flex flex-column align-items-center flex-auto">
                        <img src="https://primefaces.org/cdn/primereact/images/team/atakan.jpg" className="border-circle mb-4" alt="Atakan Tepe" />
                        <span className="mb-2 text-xl font-bold">Atakan Tepe</span>
                        <span>Front-End Developer</span>
                    </div>
                    <div className="flex flex-column align-items-center flex-auto">
                        <img src="https://primefaces.org/cdn/primereact/images/team/umit.jpg" className="border-circle mb-4" alt="Ümit Çelik" />
                        <span className="mb-2 text-xl font-bold">Ümit Çelik</span>
                        <span>UI/UX Designer</span>
                    </div>
                    <div className="flex flex-column align-items-center flex-auto">
                        <img src="https://primefaces.org/cdn/primereact/images/team/mehmet.jpg" className="border-circle mb-4" alt="Mehmet Çetin" />
                        <span className="mb-2 text-xl font-bold">Mehmet Çetin</span>
                        <span>Front-End Developer</span>
                    </div>
                    <div className="flex flex-column align-items-center flex-auto">
                        <img src="https://primefaces.org/cdn/primereact/images/team/taner.jpg" className="border-circle mb-4" alt="Taner Engin" />
                        <span className="mb-2 text-xl font-bold">Taner Engin</span>
                        <span>Front-End Developer</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TemplatesPage;
