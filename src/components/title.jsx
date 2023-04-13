/**
 * Generic title component
 */
const TitleComponent = (props) => {

    const { text } = props

    return (
        <div className='pt-12 pb-6' >
            <h2 className="text-3xl text-accent font-playfairDisplay uppercase" >{text}</h2>
        </div>
    );
}

export default TitleComponent;