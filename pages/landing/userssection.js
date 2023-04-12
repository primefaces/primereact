const UsersSection = (props) => {
    const colorScheme = props.dark ? 'light' : 'dark';
    const usersData = ['fox', 'airbus', 'mercedes', 'ebay', 'ford', 'vw', 'intel', 'unicredit', 'lufthansa', 'nvidia', 'verizon', 'amex'];

    const getUsersImages = () =>
        usersData.map((name) => ({
            name,
            image: `https://primefaces.org/cdn/primereact/images/landing-new/whouses/${name}-${colorScheme}.svg`
        }));

    const Marquee = ({ users, reverse }) => (
        <div className="marquee-wrapper overflow-hidden flex">
            {Array(3)
                .fill(users)
                .map((users, index) => (
                    <div key={index} className={`marquee${reverse ? ' marquee-reverse' : ''}`}>
                        {users.map((user) => (
                            <div className="w-full" key={user.name}>
                                <img src={user.image} alt={`${user.name}-${colorScheme}`} />
                            </div>
                        ))}
                    </div>
                ))}
        </div>
    );

    const usersImages = getUsersImages();

    const users1 = usersImages.slice(0, 6);
    const users2 = usersImages.slice(6);

    return (
        <section className="landing-users py-8 px-5 lg:px-8">
            <div className="section-header">Who Uses</div>
            <p className="section-detail">
                PrimeTek libraries have reached over
                <span className="font-semibold animated-text relative white-space-nowrap">
                    <span>110 Million Downloads </span>
                </span>
                on npm! Join the PrimeLand community and experience the difference yourself.
            </p>
            <div className="flex justify-content-center align-items-center mt-4">
                <span className="ml-2"> </span>
            </div>
            <div className="logo-section relative w-full md:w-8 mt-6 users-container">
                <div className="fade-left h-6rem w-6rem block absolute top-0 left-0 z-2" style={{ background: 'linear-gradient(to right, var(--home-bg), transparent)' }}></div>
                <Marquee users={users1} />
                <div className="fade-right h-6rem w-6rem block absolute top-0 right-0 z-2" style={{ background: 'linear-gradient(to left, var(--home-bg), transparent)' }}></div>
            </div>
            <div className="logo-section relative w-full md:w-8 mt-2 users-container">
                <div className="fade-left h-6rem w-6rem block absolute top-0 left-0 z-2" style={{ background: 'linear-gradient(to right, var(--home-bg), transparent)' }}></div>
                <Marquee users={users2} reverse />
                <div className="fade-right h-6rem w-6rem block absolute top-0 right-0 z-2" style={{ background: 'linear-gradient(to left, var(--home-bg), transparent)' }}></div>
            </div>
        </section>
    );
};

export default UsersSection;
