import studentsData from '../students';
import { notFound } from 'next/navigation';

const studentDetails = ({params}) => {
    const studentDetail = studentsData.find((student)=>student.id === parseInt(params.studentId));
    if(!studentDetail) {
        notFound();
    }
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

export async function generateStaticParams() {
    return studentsData.map((student)=>{
      return {
        studentId: student.id.toString()
      }
    });
}