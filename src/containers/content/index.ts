import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { IRootState } from '../../store/reducers';
import { getUsersPending } from '../../store/actions/users.action';
import { Content } from './content';


const mapStateToProps = (state: IRootState) => ({
    search: state.search,
    users: state.users
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getUsers: () => dispatch(getUsersPending())
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
