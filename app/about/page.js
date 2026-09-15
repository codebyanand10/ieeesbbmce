export const metadata = {
    title: "About Us | IEEE SB BMCE",
    description: "Learn about IEEE SB BMCE, Baselios Mathews II College of Engineering, our history, vision, and mission.",
};

export default function AboutPage() {
    return (
        <div className="main">
            <h1 className="about-head">About Us</h1>

            <div className="bmce-grid">
                <img className="bmce-img" src="/assets/bmce-building.webp" alt="BMCE Campus" />
                <div className="bmce-content">
                    <h2>Baselios Mathews II College of Engineering (BMCE)</h2>
                    <p>
                        The noble commitment to serve humanity through the elixir of technical education has led us to establish this institute par excellence we believe we can impregnate students the zeal and vigor that we ourselves are endowed with. We strive to meet the standards of technical excellence and creativity and to provide the opportunities in this global village.
                        <br /><br />
                        Baselios Mathews II College of Engineering (BMCE) is named after its founder, the late H H Moran Mar Baselios Marthoma Mathews II, the sixth Catholicons of the East and the Malankara Metropolitan of Malankara Orthodox Church. He was also the first Chairman of the institution. This renowned college is managed by Dr. C T Eapen Trust under Malankara Orthodox Syrian Church. The institution started functioning in 2002 with the monumental objective of promoting academic excellence and competence in students, especially in the fast-growing global domain of Engineering and Technology. Located in the picturesquely beautiful Muthupilakadu in Sasthamcotta in the Kollam district of Kerala, the college stands out for its magnificent buildings and ultra-modern Infrastructure; a fascinating blend of architectural excellence and functional values. Affiliated to the University of Kerala and later to APJ Abdul Kalam Technological University, this self-financed institute currently provides 6 AICTE-approved UG courses.
                    </p>
                </div>
            </div>

            <div className="sbbmce-grid">
                <div className="sbbmce-content">
                    <h2>IEEE SB BMCE</h2>
                    <p>
                        The IEEE Student Branch at Baselios Mathews II College of Engineering (BMCE) was officially formed in 2022 and became fully active in 2023. Under the dedicated guidance of our faculty advisor and the hard work of our founding members, the branch quickly established itself as a vibrant community.
                        <br /><br />
                        Our first-ever Executive Committee (Ex-Com) for the 2023-2025 term laid the foundation for all our future activities and initiatives. While we are a relatively new branch, our members are already actively engaged in various IEEE events and workshops, showcasing their talent and dedication.
                        <br /><br />
                        Currently, the branch is primarily focused on the Computer Society, providing a platform for students to delve deeper into the world of computing, software, and technology. We are committed to fostering technical knowledge, professional growth, and a strong sense of community among our members.
                    </p>
                </div>
                <img className="sbbmce-img" src="/assets/bmce-building.webp" alt="IEEE SB BMCE" />
            </div>

            <h1 className="vis-mis-head">Our Vision & Mission</h1>
            <div className="vis-mis-grid">
                <div className="vis-mis-item">
                    <h1>Vision</h1>
                    <p>
                        To be a hub of innovation and technical excellence at BMCE, fostering a community of skilled and empowered student engineers ready to tackle global challenges.
                    </p>
                </div>
                <div className="vis-mis-item">
                    <h1>Mission</h1>
                    <p>
                        Our mission is to create a vibrant learning environment that:
                        <br /><br />
                        ● Connects students with cutting-edge technology and industry trends.<br />
                        ● Provides opportunities for hands-on projects, skill development, and professional networking.<br />
                        ● Prepares students for success in a competitive world through mentorship and peer-to-peer learning.
                    </p>
                </div>
            </div>
        </div>
    );
}
