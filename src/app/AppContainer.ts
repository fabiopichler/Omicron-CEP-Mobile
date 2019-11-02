import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { IRootState } from '../store/IRootState';
import { cepInit } from '../store/cep/cepActions';
import { addressInitHistory } from '../store/address/addressActions';

const mapStateToProps = ({  }: IRootState) => ({  });

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators({
        cepInit,
        addressInitHistory
    },
    dispatch
);

export const AppContainer = connect(mapStateToProps, mapDispatchToProps);
