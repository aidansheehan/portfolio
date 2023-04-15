/**
 * Component to display work experience
 */
const ExperienceComponent = (props) => {

    const { role, company, dates, description } = props;

    return (
        <div className='bg-secondary flex flex-col p-5 rounded-md'>
            <h3 className='font-playfairDisplay mb-2'>{role}</h3>
            <section>
                <div>{company}</div>
                <div>{dates}</div>
            </section>
            <section>
                <p>
                    {description}
                </p>
            </section>

        </div>
    )
}

export default ExperienceComponent;