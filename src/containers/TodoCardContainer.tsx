import {connect} from "react-redux"
import TodoCard from "../components/TodoCard"
import {UPDATE_TODO, DELETE_TODO} from "../state/constants"
import {updateTodo, deleteTodo} from "../state/actions"

const mapStateToProps = ( state, ownProps ) => {
  return { todo:state.todos.filter((todo:Todo)=> todo.id === ownProps.id)[0] }
}

const mapDispatchToProps =  {
  updateTodo,
  deleteTodo
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoCard)