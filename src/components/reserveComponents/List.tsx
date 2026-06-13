'use client'

import { useEffect, useState } from "react";
import Filter from "./Filter";


const List = ({data} : {data : string}) => {
    const [ResList, setResList] = useState();

    useEffect(() => {
        setResList(data)
    }, []);
  return (
    <div>
        <Filter setResList={setResList}/>
    </div>
  )
}

export default List