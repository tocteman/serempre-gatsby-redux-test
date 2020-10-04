import {connect} from "react-redux"
import InteractiveMap from "../components/InteractiveMap"

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  }
}

export default connect(
  mapStateToProps,
  null
)(InteractiveMap)