import TitleComponent from "../title"
import ExperienceComponent from "./experience";
import SkillBarComponent from "./skill-bar";

/**
 * Component to display skills & experience
 */
const SkillsComponent = () => {

    const EXPERIENCE_CONSTANT = [
        {
            role: 'Software Developer',
            company: '1x2Network',
            dates: '2021 - Current',
            description: 'Award-winning soft gaming content production studio.'
        }
    ]

    const SKILLS_CONSTANT = [
        {
            name: 'React',
            percentage: 90,
            color: '#E63462'
        },
        {
            name: 'Redux',
            percentage: 85,
            color: '#748B75'
        },
        {
            name: 'Next.js',
            percentage: 65,
            color: '#CE84AD'
        },
        {
            name: 'Node.js',
            percentage: 50,
            color: '#44633F'
        }
    ]

    return (
        <div className='CONTENT'>
            <TitleComponent text='skills & experience' />

            <div className='flex flex-col items-center md:flex-row-reverse' >

                <div className='flex flex-col w-full px-6 pb-4 md:w-1/2 md:pb-0'>
                        {
                            SKILLS_CONSTANT.map((s_, i_) => (
                                <SkillBarComponent key={i_} name={s_.name} percentage={s_.percentage} color={s_.color} />
                            ))
                        }
                    </div>

                <div className='flex flex-col w-full px-6 pb-4 md:w-1/2 md:pb-0'>
                        {
                            EXPERIENCE_CONSTANT.map((e_, i_) => (
                                <ExperienceComponent key={i_} role={e_.role} company={e_.company} dates={e_.dates} description={e_.description} />
                            ))
                        }
                    </div>

                </div>

        </div>
    )
}

export default SkillsComponent;