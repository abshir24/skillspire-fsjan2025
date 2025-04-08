function Students(){
    let students = [
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
    ]

    return <div>
        <ul>
            {
                students.map((student) =>(
                    <li>
                        <h3>Id: {student.id}</h3>
                        <h3>Name: {student.name}</h3>
                    </li>
                ))
            }
        </ul>
    </div>

}

export default Students