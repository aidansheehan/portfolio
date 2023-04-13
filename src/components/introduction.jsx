import CTAComponent from './cta';

/**
 * Introduction component
 */
const IntroductionComponent = () => {

    return (
         <div className='h-screen bg-bgPrimary md:h-[700px] text-secondary'>
            <section className='px-5 h-full flex flex-col md:flex-row justify-center content-center'>

                <div className='flex flex-col md:justify-center' >
                    <p className='text-xl mt-6'>Hello, I'm</p>
                    <h2 className='text-5xl mt-2 font-playfairDisplay uppercase' >Aidan Sheehan</h2>
                    <h1 className='text-3xl mt-6' >A Freelance Web Developer in Brighton</h1>
                    <CTAComponent />
                </div>

                <div className='h-1/2'>
                    I will be an image one day.
                </div>
            </section>
        </div>
    )
}

export default IntroductionComponent;