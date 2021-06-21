/* eslint-disable consistent-return */
import axios from 'axios';

import {
  FETCH_ADVERT_DATA,
  saveAdvert,
} from 'src/actions';

const advert = (store) => (next) => (action) => {
  const state = store.getState();
  switch (action.type) {
    case FETCH_ADVERT_DATA:
      axios
        .get(`http://localhost:6050/api${window.location.pathname}`)
        .then((res) => state.dispatch(saveAdvert(res.data)));
      break;
    default:
      next(action);
  }
};

export default advert;
