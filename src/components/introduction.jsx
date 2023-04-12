import CTAComponent from './cta';

/**
 * Introduction component
 */
const IntroductionComponent = () => {

    return (
         <div className='font-playfairDisplay h-screen bg-[#4E598C] md:h-[700px] text-[#F5F5F5]'>
            <section className='px-5 h-full flex flex-col justify-center content-center'>
                <p className='text-xl'>Hello, I'm</p>
                <h2 className='text-5xl' >Aidan Sheehan</h2>
                <h1 className='text-2xl' >Freelance Web Developer in Brighton</h1>
                <CTAComponent />
                <div className='h-1/2'>
                    I will be an image one day.
                </div>
            </section>
        </div>
    )
}

export default IntroductionComponent;