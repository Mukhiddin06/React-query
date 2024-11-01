import { Table } from 'antd'
import React from 'react'

const columuns = [
    {
        title:"ID",
        dataIndex:"id"
    },
    {
        title:"Name",
        dataIndex:"name"
    },
    {
        title:"Surname",
        dataIndex:"surname"
    },
    {
        title:"Age",
        dataIndex:"age"
    },
    {
        title:"Action",
        dataIndex:"action"
    },
]

function CustomTable({data}) {
  return (
    <Table columns={columuns} dataSource={data}/>
  )
}

export default CustomTable