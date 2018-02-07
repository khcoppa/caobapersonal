import { connect } from 'react-redux';
import Home from './home';

const mapStateToProps = state => {
  return {
    user: state.session.currentUser
  }
};

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
