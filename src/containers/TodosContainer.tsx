import {connect} from "react-redux"
import TodosPresenter from "../components/TodosPresenter"


const mapStateToProps = state => {
  return {todos: state?.todos}
}

export default connect(
  mapStateToProps,  
  null
)(TodosPresenter)