import { useState } from 'react';

/**
 * Header component
 */
const HeaderComponent = () => {

    //Whether menu expanded
    const [ menuExpanded, setMenuExpanded ] = useState(false);

    //Toggle menu expanded
    const toggleMenuExpanded = () => setMenuExpanded(!menuExpanded);

    return (
        <header className='grid grid-cols-2 h-12 items-center sticky top-0 bg-[#F5F5F5]' >

            <div className='pl-5 text-[#A18276]'>
                LOGO
            </div>

            <section className='flex md:hidden justify-end' >

                <button className='space-y-2 pr-5' onClick={toggleMenuExpanded} >
                    <span className="block h-0.5 w-8 animate-pulse bg-[#A18276]"></span>
                    <span className="block h-0.5 w-8 animate-pulse bg-[#A18276]"></span>
                    <span className="block h-0.5 w-8 animate-pulse bg-[#A18276]"></span>
                </button>

                <div className={`absolute top-12 w-full z-10 h-screen bg-white ${menuExpanded ? 'block' : 'hidden'}`} >
                    <ul className="flex flex-col items-center justify-between" >
                        <li>
                            <a onClick={toggleMenuExpanded} href='#about'>About</a>
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


            <div className='justify-end gap-3 pr-5 hidden md:flex' >
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