import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { IRootState } from '@/store/IRootState';
import { systemChangeDarkMode } from '@/store/system/systemActions';

const mapStateToProps = ({ systemState }: IRootState) => ({ systemState });

const mapDispatchToProps = (dispatch: any) =>
    bindActionCreators({
        changeDarkMode: systemChangeDarkMode
    },
    dispatch
);

export const HomeScreenContainer = connect(mapStateToProps, mapDispatchToProps);
