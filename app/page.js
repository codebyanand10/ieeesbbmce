export default function HomePage() {
    return (
        <div className="main">
            <div className="big-title-div">
                <h1 className="big-title">IEEE STUDENT BRANCH</h1>
                <h2 className="small-title">Baselios Mathews II College of Engineering</h2>
            </div>

            <div className="about-div">
                <h1 className="about-title">About IEEE</h1>
                <div className="about-grid">
                    <div className="about-what">
                        <h1>What is IEEE?</h1>
                        <p>
                            IEEE is the world’s largest technical professional
                            organization and is a public charity dedicated to
                            advancing technology for the benefit of humanity.
                            A recognized global leader in fostering world-
                            changing technologies, IEEE has been helping
                            drive technology forward for over 140 years.
                        </p>
                    </div>
                    <div className="about-item">
                        <h1>Mission</h1>
                        <p>
                            IEEE’s core purpose is to foster
                            technological innovation and excellence
                            for the benefit of humanity.
                        </p>
                    </div>
                    <div className="about-item">
                        <h1>Vision</h1>
                        <p>
                            IEEE will be essential to the global
                            technical community and to technical
                            professionals everywhere, and
                            be universally recognized for the
                            contributions of technology and of
                            technical professionals in improving
                            global conditions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
