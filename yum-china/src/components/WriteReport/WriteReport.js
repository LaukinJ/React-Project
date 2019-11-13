import React from 'react'
import { DatePicker, Button } from 'antd';
import './WriteReport.css'

export default class TakeStock extends React.Component {
    onChange(date, dateString) {
        console.log(date, dateString);
    }
    render() {
        const { RangePicker } = DatePicker;
        return (
            <div>
                <RangePicker onChange={this.onChange.bind(this)} />
                <span>
                    <Button id='Write' type="primary">生成周月报</Button>
                </span>
            </div>
        );
    }
}
// const { RangePicker } = DatePicker;
// function onChange(date, dateString) {
//     console.log(date, dateString);
// }
// ReactDOM.render(<RangePicker onChange={onChange} />)