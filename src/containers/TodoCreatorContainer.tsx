import {connect} from "react-redux"
import TodoCreator from "../components/TodoCreator"
import {createTodo} from "../state/actions"

const mapDispatchToProps = {
  createTodo
}

export default connect(
  null,
  mapDispatchToProps
)(TodoCreator)