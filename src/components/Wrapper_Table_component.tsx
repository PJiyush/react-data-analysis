import React from 'react'
import TableComponent from './Table_component'
import DataObject from '../interface/Data'

interface WrapperTableComponentProps {
    data: DataObject[]
}


function Wrapper_Table_component({data}:WrapperTableComponentProps) {
    console.log(data)
    return (
        <div className="div_Table_component">
            <TableComponent />
        </div>
    )
}

export default Wrapper_Table_component