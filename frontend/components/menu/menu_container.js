import { connect } from 'react-redux';
import Menu from './menu';

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
)(Menu);
