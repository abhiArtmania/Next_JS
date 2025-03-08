import studentsData from '../students';
import { notFound } from 'next/navigation';

const studentDetails = ({params}) => {
    const studentDetail = studentsData.find((student)=>student.id === parseInt(params.studentId));
    if(!studentDetail) {
        notFound();
    }
    console.log(studentDetail,"===========studentDetail")
  return (
    <div>
      <h1>Student Details:</h1> 
      <div>{`Name: ${studentDetail.name}`}</div>
      <div>{`Age: ${studentDetail.age}`}</div>
      <div>{`City: ${studentDetail.city}`}</div>
    </div>
  );
}

export default studentDetails;