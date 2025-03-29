function ChildComponent(props){
    console.log(props)
    return <div>
        <h3>Child Component below:</h3>
        <p>First Name: { props.firstName }</p>
        <p>Last Name: { props.lastName }</p>
        <p>Age: {props.age}</p>
    </div>
}

export default ChildComponent