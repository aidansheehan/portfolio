/**
 * Generic title component
 */
const TitleComponent = (props) => {

    const { text } = props

    return (
        <div className='pt-12 pb-6' >
            <h2 className="text-4xl text-[#A18276] font-playfairDisplay uppercase" >{text}</h2>
        </div>
    );
}

export default TitleComponent;