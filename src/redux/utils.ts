import * as R from 'ramda';
import { createSelector } from 'reselect';
import {
  applyMiddleware,
  bindActionCreators,
  compose,
  createStore,
  Reducer,
} from 'redux';

import { APP_NAME } from 'src/constants';

// Follow the standard of ducks-redux-reducer:
// https://github.com/erikras/ducks-modular-redux
const getActionWrapper =
  (moduleName: string, widgetName: string) => (actionName: string) =>
    `${[moduleName, widgetName, actionName].join('/')}`;

export const wrapWithModule = R.curry(getActionWrapper)(APP_NAME);

export const getModuleSelector = (key: string) =>
  createSelector(
    (state: any) => state[key],
    (module) => module
  );

export const configureStore = (options: {
  rootReducer: Reducer<any, any>;
  rootSaga?: any;
  initialState?: any;
}) => {
  const { customMiddlewares, initialState, isSupportDevtool, rootReducer } =
    R.mergeDeepLeft(
      {
        initialState: (window as any).INITIAL_STATE || {},
        customMiddlewares: [],
        isSupportDevtool: true,
      },
      options
    );

  // ref: https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup
  const composeEnhancers = isSupportDevtool
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

  const middlewares: any[] = [];

  // add static middlewares like redux-saga/redux-thunk
  // const sagaMiddleware = createSagaMiddleware();
  // middlewares.push(sagaMiddleware);

  const middleware = composeEnhancers(
    applyMiddleware(...middlewares.concat(customMiddlewares))
  );

  const store = createStore(rootReducer, initialState, middleware);

  // run any static middlewares like redux-saga/redux-thunk
  // sagaMiddleware.run(rootSaga);

  return store;
};

export const bindActionCreatorsCurried = (actions = {}) =>
  R.applySpec({
    actions: R.curry(bindActionCreators)(actions),
  });
