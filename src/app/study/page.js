import lecture from './lectures.js';
import style from './lectures.css';
import Link from 'next/link';

const Study = () => {
  return(
    <div>
        <h1>All Lectures of college:</h1>
        <div className="lectures-container">
            {lecture.map((lec,index)=>(
                <div key={index} className='item'>
                    <div>{`Lecture no: ${lec.lectureNo}`}</div>
                    <div>{`Day: ${lec.day}`}</div>
                    <div>{`Subject: ${lec.subject}`}</div>
                    <Link href={`study/${lec.day}/${lec.lectureNo}`}>Details</Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Study;