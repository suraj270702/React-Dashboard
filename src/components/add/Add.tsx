import React from 'react'
import './add.scss'
import { GridColDef } from '@mui/x-data-grid'


type Props ={
    slug : string,
    columns: GridColDef[],
    setOpen : React.Dispatch<React.SetStateAction<boolean>>
}
const Add = (props : Props) => {
  return (
    <div className='add'>
        <div className="modal">
            <span className="close" onClick={()=>props.setOpen(false)}>X</span>
            <h1>Add A {props.slug}</h1>
            <form>
                {
                    props.columns.filter((item)=>item.field !== "id" && item.field !== "avatar")
                    .map
                    ((col,i)=>(
                        <div className="item">
                            <label>{col.headerName}</label>
                            <input type={col.type} placeholder={col.field} />
                        </div>
                    ))
                }
            
            </form>
            <button>ADD</button>
        </div>
    </div>
  )
}

export default Add