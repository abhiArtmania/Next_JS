import Link from "next/link";

const About = () => {
    console.log(process.env.SERVER_PASSWORD,"===================")
    return (
        <div>
            <h1>About</h1>
        </div>
    );
}

export default About;