import React from 'react'

class TodoItem extends React.Component {

    handleDelete(index) {
        this.props.delete(index)
    }

    render() {
        return (
            //组件数据传输, 子组件通过props接收参数 
            <div onClick={this.handleDelete.bind(this, this.props.index)}>{this.props.content}</div>
        )
    }
}

export default TodoItem