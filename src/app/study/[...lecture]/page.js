const Lecture = ({params}) => {
    const lecture = params?.lecture;
    return(
        <div>
            <h1>Class Details:</h1>
            <ul>
                <li>{`Day of College: ${lecture[0]}`}</li>
                <li>{`Lecture No: ${lecture[1]}`}</li>
            </ul>
        </div>
    )
}

export default Lecture;