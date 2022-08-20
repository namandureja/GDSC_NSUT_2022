import React from 'react';
import "./team.css";
import { useParams, Navigate } from 'react-router-dom';
import Departments from "./Departments.json";
import DepartmentUtility from "./DepartmentUtility";


export default function Department() {
  const { department } = useParams();

  if (department === "all-departments") {
    return (
      <>
      <DepartmentUtility department="web-development" />
      <DepartmentUtility department="app-development" />
      <DepartmentUtility department="competitive-programming" />
      <DepartmentUtility department="machine-learning" />
      <DepartmentUtility department="graphics" />
      <DepartmentUtility department="content" />
      <DepartmentUtility department="operations" />
      </>
    )
  }

  else if (department in Departments) {
    return <DepartmentUtility department={department} />
  }

  else return ( <Navigate to="/team" replace={true} /> )
}
