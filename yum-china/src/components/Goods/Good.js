import React from 'react'
import { Table, Tag } from 'antd';

export default class Goods extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    title: '日期',
                    dataIndex: 'name',
                    key: 'name',
                    render: text => <a>{text}</a>,
                },
                {
                    title: '拨出餐厅',
                    dataIndex: 'age',
                    key: 'age',
                },
                {
                    title: '拨入餐厅',
                    dataIndex: 'address',
                    key: 'address',
                },
                {
                    title: '备注',
                    key: 'tags',
                    dataIndex: 'tags',
                    render: tags => (
                        <span>
                            {tags.map(tag => {
                                let color = tag.length > 5 ? 'geekblue' : 'green';
                                if (tag === 'loser') {
                                    color = 'volcano';
                                }
                                return (
                                    <Tag color={color} key={tag}>
                                        {tag.toUpperCase()}
                                    </Tag>
                                );
                            })}
                        </span>
                    ),
                },
                {
                    title: '删除',
                    key: 'action',
                    render: (text, record) => (
                        <span>
                            {/* <a>Invite {record.name}</a> */}
                            {/* <Divider type="vertical" /> */}
                            <a>Delete</a>
                        </span>
                    ),
                },
            ],
            data: [
                {
                    key: '1',
                    name: '2019-11-12',
                    age: 'GZH263',
                    address: 'GZH241',
                    tags: ['对方需求'],
                },
                {
                    key: '2',
                    name: '2019-11-11',
                    age: 'GZH279',
                    address: 'GZH241',
                    tags: ['打错调拨，补打'],
                },
                {
                    key: '3',
                    name: '2019-11-10',
                    age: 'GZH279',
                    address: 'GZH241',
                    tags: ['对方需求'],
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
