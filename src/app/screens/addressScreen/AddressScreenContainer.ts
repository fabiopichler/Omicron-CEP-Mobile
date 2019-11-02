import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { IRootState } from '../../../store/IRootState';
import { checkByAddress } from '../../../store/address/addressActions';

const mapStateToProps = ({ addressState }: IRootState) => ({ addressState });

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators({
        onCheckByAddress: checkByAddress
    },
    dispatch
);

export const AddressScreenContainer = connect(mapStateToProps, mapDispatchToProps);
