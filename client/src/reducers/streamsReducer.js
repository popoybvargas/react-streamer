import utils from 'zv-utils';
/* eslint-disable import/no-anonymous-default-export */
import { FETCH_STREAM, FETCH_STREAMS, CREATE_STREAM, EDIT_STREAM, DELETE_STREAM } from '../actions/types';

export default (state = {}, action) =>
{
  switch (action.type)
  {
    case FETCH_STREAMS: return { ...state, ...utils.mapKeys(action.payload, 'id') };
    case FETCH_STREAM:
    case CREATE_STREAM:
    case EDIT_STREAM: return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM: return utils.omit(state, action.payload);
    default: return state;
  };
};