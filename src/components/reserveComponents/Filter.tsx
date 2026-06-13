import axios from "axios"
import { useState } from "react";


const Filter = ({setResList}) => {
    const [SearchQuery, setSearchQuery] = useState('');

    const getFiltered = async (name) =>{
        const rest = await axios.get(`kjdhfkjqehdk${name}`)
        setResList(rest.data)
    }
  return (
    <div>
        <input type="text" onChange={e => setSearchQuery(e.target.value)} />
        <button onClick={()=>getFiltered(SearchQuery)}>click</button>
    </div>
  )
}

export default Filter