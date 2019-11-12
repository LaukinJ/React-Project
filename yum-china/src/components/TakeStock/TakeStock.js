import React from 'react'
import { Table, Button, InputNumber } from 'antd';


export default class TakeStock extends React.Component {
    constructor(props) {
        super(props);
        this.onSelectChange = this.onSelectChange.bind(this);
        this.state = {
            columns: [
                {
                    title: '序列号',
                    dataIndex: 'num',
                },
                {
                    title: '产品名',
                    dataIndex: 'name',
                },
                {
                    title: '生产商',
                    dataIndex: 'age',
                },
                {
                    title: '数量',
                    dataIndex: 'address',
                },
            ],
            selectedRowKeys: [], // Check here to configure the default column
            loading: false,
            data: this.setData(),
        }
    };
    setData = () => {
        let data = []
        for (let i = 0; i < 46; i++) {
            data.push({
                key: i,
                num: `PG125967${i}`,
                name: `xxxxxxxxx`,
                age: `xxxxxxxxx`,
                address: <InputNumber />,
            });
        }
        return data
    };
    start = () => {
        this.setState({ loading: true });
        // ajax request after empty completing
        setTimeout(() => {
            this.setState({
                selectedRowKeys: [],
                loading: false,
            });
        }, 1000);
    };
    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    };
    render() {
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div>
                <div style={{ marginBottom: 16 }}>
                    <Button type="primary" onClick={this.start.bind(this)} disabled={!hasSelected} loading={loading}>
                        保存
                    </Button>
                    <span style={{ marginLeft: 8 }}>
                        {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                    </span>
                </div>
                <Table rowSelection={rowSelection} columns={this.state.columns} dataSource={this.state.data} />
            </div>
        );
    }
}
// const columns = [
//     {
//         title: 'Name',
//         dataIndex: 'name',
//     },
//     {
//         title: 'Age',
//         dataIndex: 'age',
//     },
//     {
//         title: 'Address',
//         dataIndex: 'address',
//     },
// ];

// const data = [];
// for (let i = 0; i < 46; i++) {
//     data.push({
//         key: i,
//         name: `Edward King ${i}`,
//         age: 32,
//         address: `London, Park Lane no. ${i}`,
//     });
// }

// class App extends React.Component {
//     state = {
//         selectedRowKeys: [], // Check here to configure the default column
//         loading: false,
//     };

//     start = () => {
//         this.setState({ loading: true });
//         // ajax request after empty completing
//         setTimeout(() => {
//             this.setState({
//                 selectedRowKeys: [],
//                 loading: false,
//             });
//         }, 1000);
//     };

//     onSelectChange = selectedRowKeys => {
//         console.log('selectedRowKeys changed: ', selectedRowKeys);
//         this.setState({ selectedRowKeys });
//     };

//     render() {
//         const { loading, selectedRowKeys } = this.state;
//         const rowSelection = {
//             selectedRowKeys,
//             onChange: this.onSelectChange,
//         };
//         const hasSelected = selectedRowKeys.length > 0;
//         return (
//             <div>
//                 <div style={{ marginBottom: 16 }}>
//                     <Button type="primary" onClick={this.start} disabled={!hasSelected} loading={loading}>
//                         Reload
//           </Button>
//                     <span style={{ marginLeft: 8 }}>
//                         {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
//                     </span>
//                 </div>
//                 <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
//             </div>
//         );
//     }
// }

// ReactDOM.render(<App />, mountNode);