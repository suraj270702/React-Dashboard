import React,{useState} from 'react'
import { DataGrid, GridColDef, GridValueGetterParams,GridToolbar } from '@mui/x-data-grid';
import { products, userRows } from '../../data';
import Add from '../../components/add/Add';
import DataTable from '../../components/datatable/DataTable';
import './products.scss'

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 150,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 200,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 150,
    type: "boolean",
  },
];

const Products = () => {
  const [open,setOpen] = useState(false)
  return (
    <div className='users'>
      <div className="info">
        <h1>Products</h1>
        <button onClick={()=>setOpen(true)}>Add New Products</button>
      </div>
       <DataTable slug="users" columns ={columns} rows={products}/>
       {open && <Add slug='Product' columns={columns} setOpen ={setOpen} />}
    </div>
  )
}

export default Products