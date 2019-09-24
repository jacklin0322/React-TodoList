import React from 'react'
import TodoItem from './TodoItem'

class TodoList extends React.Component {

  //初始化ES6
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      list: []
    }
  }

  handleClick(){
    if(this.state.text === '') return false
    this.setState({
      list: [...this.state.list, this.state.text],
      text: ''
    })
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  // handleItemClick(index) {
  //   console.log(index)
  //   const list = [...this.state.list]
  //   list.splice(index, 1)
  //   //可调试性、性能最优 建议使用副本数据操作
  //   this.setState({list})
  // }

  handleItemDelete(index) {
    console.log(index)
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({list})
  }

  //父子组件数据传输, 父组件通过属性形式传参, 参数类型可以是数值也可以是方法
  render() {
    
    return (
      <div>
        <div>
          <input placeholder='please input text' value={this.state.text} onChange={this.handleChange.bind(this)} />
          <button onClick={this.handleClick.bind(this)}>Add</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              // return <li key={index} onClick={this.handleItemClick.bind(this, index)}>{item}</li>
              //组件拆分
              return <TodoItem key={index} content={item} index={index} delete={this.handleItemDelete.bind(this)}/>
            })
          }
        </ul>
      </div>
    )
  }
}

export default TodoList