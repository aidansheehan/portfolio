/**
 * Skill-bar component
 */
const SkillBarComponent = (props) => {

    const { name, percentage, color } = props;

    return (
        <div className='w-full my-2'>
            <div className='mb-3 font-playfairDisplay' >{name}</div>
            <div className='w-full h-[3px] bg-secondary rounded-md'>
                <div className='h-full rounded-md' style={{backgroundColor: color, width: `${percentage}%`}} ></div>
            </div>
        </div>
    )

}

export default SkillBarComponent;