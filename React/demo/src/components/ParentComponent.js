import ChildComponent from "./ChildComponent"

function ParentComponent(){
    return <div>
        <h2>This is the parent component</h2>

        <ChildComponent firstName={ "Forrest" }  lastName={ "Gump" } age={35} />
    </div>
}

export default ParentComponent