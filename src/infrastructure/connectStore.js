import { connect } from 'react-redux';

export const toPojo = arg => Object.assign({}, arg);

export const connectDirect = () => connect(toPojo);