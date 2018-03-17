import { connect } from 'react-redux';
import Staff from './staff';

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
)(Staff);
