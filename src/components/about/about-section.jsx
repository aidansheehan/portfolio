/**
 * Generic about text component
 */
const AboutSectionComponent = (props) => {

    //Destructure props
    const { text } = props

    return (
        <p className='leading-loose mb-4'>
            {text}
        </p>
    )
}

export default AboutSectionComponent;