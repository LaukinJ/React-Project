import React from 'react'
import { Table } from 'antd';

export default class GoodsSingle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    title: '日期',
                    dataIndex: 'name',
                    render: text => <a>{text}</a>,
                },
                {
                    title: '订单号',
                    dataIndex: 'age',
                },
                {
                    title: '签收人',
                    dataIndex: 'address',
                    key: 'address',
                },
                {
                    title: '订单详情',
                    key: 'tags',
                    dataIndex: 'tags',
                    render: (text, record) => (
                        <span>
                            {/* <a>Invite {record.name}</a> */}
                            {/* <Divider type="vertical" /> */}
                            <a>详情</a>
                        </span>
                    ),
                },
                {
                    title: '物流评价',
                    key: 'action',
                    render: (text, record) => (
                        <span>
                            {/* <a>Invite {record.name}</a> */}
                            {/* <Divider type="vertical" /> */}
                            <a>评价</a>
                        </span>
                    ),
                },
            ],
            data: [
                {
                    key: '1',
                    name: '2019-11-12',
                    age: 'PG1954149884898498261984',
                    address: '候萨利',

                },
                {
                    key: '2',
                    name: '2019-11-11',
                    age: 'PG195498841561261591591',
                    address: '韩家常',

                },
                {
                    key: '3',
                    name: '2019-11-10',
                    age: 'PG195498841561261591591',
                    address: '李劳美',

                },
            ]

        }
    }
    render() {
        return (
            <Table columns={this.state.columns} dataSource={this.state.data} />
        )
    }
}
