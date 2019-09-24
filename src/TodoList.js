import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {

  //初始化ES6写法
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      list: []
    }

    //优化bind事件 提升执行效率
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
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

  handleItemDelete(index) {
    //可调试性、性能最优 建议使用副本数据操作
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({list})
  }

  //组件拆分
  getTodoItems() {
    return (
      this.state.list.map((item, index) => {
        return (
          <TodoItem 
            key={index} 
            content={item} 
            index={index} 
            handleDelete={this.handleItemDelete}
          />
        )
      })
    )
  }

  //父子组件数据传输, 父组件通过属性形式传参, 参数类型可以是数值也可以是方法
  render() {
    return (
      <Fragment>
        <div>
          <input placeholder='please input text' value={this.state.text} onChange={this.handleChange} />
          <button className='primary-btn' onClick={this.handleClick}>Add</button>
        </div>
        <ul>{this.getTodoItems()}</ul>
      </Fragment>
    )
  }
}

export default TodoList