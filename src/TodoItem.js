import React, { Component } from 'react'

class TodoItem extends Component {

    constructor(props) {
        //继承
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete() {
        // this.props.delete(index)
        const { handleDelete, index } = this.props
        handleDelete(index)
    }

    render() {
        //ES6结构赋值
        const { content } = this.props
        return (
            //组件数据传输, 子组件通过props接收参数 
            <div onClick={this.handleDelete}>{content}</div>
        )
    }
}

export default TodoItem