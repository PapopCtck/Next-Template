import { Action } from './interfaces';
import Type from './types';
import commonConstant from '../common/commonConstant';

export const fetchGetData = (): Action => ({
  type: Type.DATA_API,
  resTypes: Type.GET_DATA_ASYNC,
  url: 'https://reqres.in/api/users',
  data: { page: 2 },
  method: 'GET',
});

export const fetchGetUserByLine = (lineId: string): Action => ({
  type: Type.GET_LINE_PROFILE.START,
  resTypes: Type.GET_LINE_PROFILE,
  url: `${commonConstant.envDomainApi}/api/users/line/${lineId}`,
  method: 'GET',
});


export default {
  fetchGetData,
  fetchGetUserByLine,
};
