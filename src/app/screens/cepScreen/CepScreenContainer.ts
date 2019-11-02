import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { IRootState } from '../../../store/IRootState';
import { cepDelete } from '../../../store/cep/cepActions';

const mapStateToProps = ({ cepState }: IRootState) => ({ cepState });

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators({
        cepDelete
    },
    dispatch
);

export const CepScreenContainer = connect(mapStateToProps, mapDispatchToProps);
