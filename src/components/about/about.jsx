import AboutSectionComponent from "./about-section";

/**
 * About Component
 */
const AboutComponent = () => {

    const ABOUT_TEXTS = [
        "Hi, I'm Aidan Sheehan. I'm a frontend software engineer and freelance web developer based in Brighton, UK. From small business sites to complex web applications, I specialize in creating custom solutions that meet the unique needs of each client.",
        "With extensive professional expertise in JavaScript, React, and Redux, I pride myself on delivering high-quality, well-structured code that meets project goals. Whether you're looking for help building a new site or need assistance with an existing one, I'm here to collaborate with you and bring your ideas to life.",
        "When I'm not coding, you can find me exploring new languages, reading, or playing guitar. I'm always excited to take on new challenges and work with clients who are passionate about their ideas. Let's create something amazing together!"
    ];

    return (
        <div id='about' className='px-5'>

            <div className='pt-12 pb-6 text-4xl'>
                <h2>About</h2>
            </div>

            {
                ABOUT_TEXTS.map((t_, i_) => (
                    <AboutSectionComponent key={i_} text={t_} />
                ))
            }

        </div>
    )
}

export default AboutComponent;