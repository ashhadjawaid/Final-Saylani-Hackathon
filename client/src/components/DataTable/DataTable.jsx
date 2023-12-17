import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { LiaEdit } from "react-icons/lia";
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './datatable.css'



const DataTable = ({ rowData, columns, slug }) => {
    const actionColumn = [
        {
            field: 'action', headerName: 'Actions', width: 200,
            renderCell: (params) => {
                return (
                    slug === 'edit' ? (

                        <div className='action-container'>
                            <Link
                                className='action'
                                to={`${params.row.id}`} >
                                <LiaEdit />
                            </Link>
                            <button
                                className='action'
                                onClick={() => console.log('hey')} >
                                <FaEye />
                            </button>
                        </div>


                    )
                        :

                        slug === 'details' ? (
                            <Link to={`${params.row.id}`} >
                                <button className='detail-button'>
                                    Details
                                </button>
                            </Link>
                        )

                            : null
                )
            }
        },
    ]

    console.log(rowData)
    return (

        <DataGrid

            style={{ width: '100%', height: "80%", padding: '0px', backgroundColor: "transparent", color: '#000000', fontSize: '0.8rem', border: 'none' }}
            slots={{ toolbar: GridToolbar }}
            slotProps={{
                toolbar: {
                    showQuickFilter: false,
                    quickFilterProps: { debounceMs: 800 },
                }
            }}


            disableRowSelectionOnClick
            disableColumnFilter
            disableDensitySelector
            disableColumnSelector



            rows={rowData}
            columns={slug ? [...columns, ...actionColumn] : columns}
            initialState={{
                pagination: {
                    paginationModel: {
                        pageSize: 10,
                    },
                }
            }}
            pageSizeOptions={[5]}
        />

    )
}

export default DataTable