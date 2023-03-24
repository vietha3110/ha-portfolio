import { Link } from "react-scroll";

const About = () => {
    return (
        <div
            name='about'
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                    </p>
                </div>
                <p className="text-xl mt-20">
                    I'm an aspiring full-stack software engineer based in Greater Seattle Area, WA. I've recently graduated from App Academy where I have developed core competencies in JavaScript, Python, React, Redux, Node, Express, SQL, SQLAlchemy, Flask, and Postgres. In addition, I've had the opportunity to work on a wide range of projects, including building full-stack web applications, developing algorithms, and working with data structures. By the way, check out my <Link to="portfolio" smooth duration={500} style={{fontWeight:"600", cursor:"pointer"}}>projects.</Link>
                </p>
                <br />
                <p className="text-xl">
                    Prior to pursuing a career as a Software Engineer, I had 7+ years of experience working with tech startups and scale-ups in the fintech, e-commerce, and e-logistics industries. In these roles, I gained expertise in product operations and maagement, strategy planning, and data analysis.
                </p>
            </div>
        </div>
    )
}

export default About;
