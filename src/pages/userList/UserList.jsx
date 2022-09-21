import './userList.css'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {userRows} from '../../dummyData'
import {Link} from "react-router-dom";
import { useState } from 'react';



export default function UserList() {
  const [data,setData] = useState(userRows)

  const handleDelete = (id)=>{
    setData(data.filter((item)=> item.id !== id));
  }

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'user', headerName: 'User', width: 200, renderCell:(params)=>{
      return(
        <div className="userListUser">
          <img className="userListImg" src={params.row.avatar} alt="" />
          {params.row.username}
        </div>
      )
  
    } },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      width: 160,
    },
    {
      field:"action",
      headerName:"Action",
      width: 150,
      renderCell:(params)=>{
        return(
          <>
          <Link to={"/user/" + params.row.id}>
            <button className="useListEdit">Edit</button>
          </Link>
          
          <DeleteOutlineIcon className="useListDelete"  onClick={()=>handleDelete(params.row.id)}/>
          </>
        )
      }
    }
  ];
  return (
    <div className='userList'>
      <DataGrid
        disableSelectionOnClick
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}