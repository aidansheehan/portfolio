import CTAComponent from './cta';

/**
 * Introduction component
 */
const IntroductionComponent = () => {

    return (
        <div className='h-screen bg-red-500'>
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