import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { IRootState } from '../store/IRootState';
import { cepInit } from '../store/cep/cepActions';
import { addressInitHistory } from '../store/address/addressActions';
import { systemInit } from '@/store/system/systemActions';

const mapStateToProps = ({ systemState }: IRootState) => ({ systemState });

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators({
        systemInit,
        cepInit,
        addressInitHistory,
    },
    dispatch
);

export const AppContainer = connect(mapStateToProps, mapDispatchToProps);
