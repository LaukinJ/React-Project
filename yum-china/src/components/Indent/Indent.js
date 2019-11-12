import React from 'react'
import { Table } from 'antd';

export default class Indent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            columns:[
                {
                  title: '入货日期',
                  dataIndex: 'name',
                  key: 'name',
                  render: text => <a>{text}</a>,
                  width: 150,
                },
                {
                  title: '类型',
                  dataIndex: 'age',
                  key: 'age',
                  width: 80,
                },
                {
                  title: '订单号',
                  dataIndex: 'address',
                  key: 'address 1',
                  ellipsis: true,
                },
                {
                  title: '订货人员',
                  dataIndex: 'people',
                  key: 'address 2',
                  ellipsis: true,
                },
                {
                  title: '状态',
                  dataIndex: 'condition',
                  key: 'address 3',
                  ellipsis: true,
                },
                {
                  title: '修改',
                  dataIndex: 'address',
                  key: 'address 4',
                  render: (text, record) => (
                    <span>
                        {/* <a>Invite {record.name}</a> */}
                        {/* <Divider type="vertical" /> */}
                        <a>修改</a>
                    </span>
                  )
                },
              ],
              data : [
                {
                  key: '1',
                  name: '2019-11-15',
                  age: '湿货',
                  people:'xxx',
                  condition:'已发送',
                  address: 'PG1511210564651515615',
                  tags: ['nice', 'developer'],
                },
                {
                  key: '2',
                  name: '2019-11-15',
                  age: '冻货',
                  people:'xxx',
                  condition:'已发送',
                  address: 'PG1511210564651515615',
                  tags: ['loser'],
                },
                {
                  key: '3',
                  name: '2019-11-15',
                  age: '干货',
                  people:'xxx',
                  condition:'已发送',
                  address: 'PG1511210564651515615',
                  tags: ['cool', 'teacher'],
                },
              ]
        }
    }
    render(){
        return(
            <Table columns={this.state.columns} dataSource={this.state.data} />
        )
    }
}
