/**
 * Created by Administrator on 2016/10/10.
 */

import dva from 'dva';
export default {
  namespace: 'products',
  state: [],
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },
};
