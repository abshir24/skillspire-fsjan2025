function ListRenderer(){
   let fruits = ["Apple", "Banana", "Orange","Guava","Papaya","Coconut"]


   return <div>
        <ul>
            {
                fruits.map((fruit)=>(
                    <li>{ fruit }</li>
                ))
            }
        </ul>

        
   </div>
}

export default ListRenderer