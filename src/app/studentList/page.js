import Link from "next/link";
import studentsData from './students';

const StudentList = () => {
    
    return (
        <div>
            <h1>Student List</h1>
            <ul>
                {studentsData.map((student,index)=>{
                    return(
                        <li key={index}>
                            <Link href={`/studentList/${student.id}`}>{student.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default StudentList;