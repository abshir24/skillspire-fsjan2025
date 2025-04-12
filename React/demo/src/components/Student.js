import {useParams} from 'react-router-dom';

function Student(){
    const { id } = useParams();

    const students = [
        {
            id: 1,
            name: "Jason",
        },
        {
            id: 2,
            name: "Hussain",
        },
        {
            id: 3,
            name: "Vasyl",
        },
        {
            id: 4,
            name: "Mikel",
        },
        {
            id: 5,
            name: "Ja'Corey",
        }
    ];

    const student = students.find(student => student.id === parseInt(id));

    return (
        <div>
            <h1>Student Details</h1>
            <div>
                    <h3>Id: {student.id}</h3>
                    <h3>Name: {student.name}</h3>
            </div>
        </div>
    )
}

export default Student;