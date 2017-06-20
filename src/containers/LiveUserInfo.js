/**
 * Created by bookason on 20/06/17.
 */

import { connect } from 'react-redux';
import UserInfo from 'components/UserInfo';


const mapStateToProps = (state) => {
  return {
    value: state.value,
    userId: state.userId,
    userName: state.userName,
    userImg: state.userImg,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {}
};

const LiveUserInfo = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo);

export default LiveUserInfo;