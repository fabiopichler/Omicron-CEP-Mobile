import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { IRootState } from '../../../../store/IRootState';
import { checkCep } from '../../../../store/cep/cepActions';

const mapStateToProps = ({ cepState }: IRootState) => ({ cepState });

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators({
        checkCep
    },
    dispatch
);

export const CepFormContainer = connect(mapStateToProps, mapDispatchToProps);
