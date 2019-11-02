import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { IRootState } from '../../../../store/IRootState';
import { addressDelete } from '../../../../store/address/addressActions';

const mapStateToProps = ({ addressState }: IRootState) => ({ addressState });

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators({
        addressDelete
    },
    dispatch
);

export const AddressSearchSceneTabContainer = connect(mapStateToProps, mapDispatchToProps);
