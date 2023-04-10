
/**
 * Header component
 */
const HeaderComponent = () => {

    return (
        <header className='grid grid-cols-2 h-8 justify-center align-middle' >

            <div>
                LOGO
            </div>

            <section className='flex lg:hidden justify-end' >

                <div className='space-y-2 pr-5' >
                    <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                    <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                    <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                </div>

                <div className='absolute top-8' >
                    <ul className="flex flex-col items-center justify-between" >
                        <li>
                            <a href='#'>About</a>
                        </li>
                        <li>
                            <a href='#'>Experience</a>
                        </li>
                        <li>
                            <a href='#'>Contact</a>
                        </li>

                    </ul>
                </div>

            </section>


            <div className='flex justify-end gap-3 pr-5 hidden' >
                <a href='#'>
                    About
                </a>

                <a href='#'>
                    Experience
                </a>

                <a href='#'>
                    Contact
                </a>
            </div>

        </header>
    )
}

export default HeaderComponent;