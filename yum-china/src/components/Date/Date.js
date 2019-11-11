import React from 'react'
import { Calendar, Badge } from 'antd';
import './Date.css'
export default class Date extends React.Component {
  constructor(props) {
    super(props);
    this.getListData = this.getListData.bind(this);
    this.getMonthData = this.getMonthData.bind(this);
  }
  getListData(value) {
    let listData;
    switch (value.date()) {
      case 13:
        listData = [
          { type: 'warning', content: '进货日(22:00-00:30)' }
        ];
        break;
      case 15:
        listData = [
          { type: 'warning', content: '进湿货(22:00-00:30)' },
          { type: 'sucess', content: '新产品上市' },
        ];
        break;
      case 17:
        listData = [
          { type: 'warning', content: '进货日(22:00-00:30)' },
          { type: 'success', content: '周盘' },
        ];
        break;
      case 20:
        listData = [
          { type: 'warning', content: '进货日(22:00-00:30)' }
        ];
        break;
      case 22:
        listData = [
          { type: 'warning', content: '进湿货(22:00-00:30)' },
        ];
        break;
      case 24:
        listData = [
          { type: 'waring', content: '进货日(22:00-00:30)' },
          { type: 'success', content: '周盘' },
        ];
        break;
      default:
    }
    return listData || [];
  }
  dateCellRender(value) {
    const listData = this.getListData(value);
    return (
      <ul className="events">
        {listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }
  getMonthData(value) {
    if (value.month() === 8) {
      return 1394;
    }
  }
  monthCellRender(value) {
    const num = this.getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  }
  render() {
    return (
      <Calendar dateCellRender={this.dateCellRender.bind(this)} monthCellRender={this.monthCellRender.bind(this)} />
    )
  }
}

// function getListData(value) {
//   let listData;
//   switch (value.date()) {
//     case 8:
//       listData = [
//         { type: 'warning', content: 'This is warning event.' },
//         { type: 'success', content: 'This is usual event.' },
//       ];
//       break;
//     case 10:
//       listData = [
//         { type: 'warning', content: 'This is warning event.' },
//         { type: 'success', content: 'This is usual event.' },
//         { type: 'error', content: 'This is error event.' },
//       ];
//       break;
//     case 15:
//       listData = [
//         { type: 'warning', content: 'This is warning event' },
//         { type: 'success', content: 'This is very long usual event。。....' },
//         { type: 'error', content: 'This is error event 1.' },
//         { type: 'error', content: 'This is error event 2.' },
//         { type: 'error', content: 'This is error event 3.' },
//         { type: 'error', content: 'This is error event 4.' },
//       ];
//       break;
//     default:
//   }
//   return listData || [];
// }

// function dateCellRender(value) {
//   const listData = getListData(value);
//   return (
//     <ul className="events">
//       {listData.map(item => (
//         <li key={item.content}>
//           <Badge status={item.type} text={item.content} />
//         </li>
//       ))}
//     </ul>
//   );
// }

// function getMonthData(value) {
//   if (value.month() === 8) {
//     return 1394;
//   }
// }

// function monthCellRender(value) {
//   const num = getMonthData(value);
//   return num ? (
//     <div className="notes-month">
//       <section>{num}</section>
//       <span>Backlog number</span>
//     </div>
//   ) : null;
// }

// ReactDOM.render(
//   <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />,
//   mountNode,
// );