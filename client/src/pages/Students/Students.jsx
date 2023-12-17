import React from 'react'
import './students.css'
import { FaUsers } from "react-icons/fa";
import DataTable from '../../components/DataTable/DataTable';
import { Link } from 'react-router-dom';



const Students = () => {

  const students = [
    {
      id: 1,
      name: 'Student 1',
      course: 'Web and Mobile',
      password: '7wy8378'
    },
    {
      id: 2,
      name: 'Student 2',
      course: 'Web and Mobile',
      password: '7wy8378'
    },
    {
      id: 3,
      name: 'Student 3',
      course: 'Web and Mobile',
      password: '7wy8378'
    },

  ]

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 100,
    },
    {
      field: 'name',
      headerName: 'Name',
      sortable: true,
      width: 200,
    },
    {
      field: 'course',
      headerName: 'Course',
      width: 150,
    },
    {
      field: 'password',
      headerName: 'Password',
      width: 200,
    }
  ];








  return (
    <div className="container">
      <div className="topbar">
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <span className="icon">
            <FaUsers />
          </span>
          <h1>Students</h1>
        </div>
        <Link
          className='addbtn'
          to='addstudents'>
          Add
        </Link>
      </div>
      <div className='data-table'>
        <DataTable rowData={students} columns={columns} slug='edit' />
      </div>
    </div >
  )
}

export default Students