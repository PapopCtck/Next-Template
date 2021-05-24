import { createStore, applyMiddleware, Middleware, Store } from 'redux';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';
import { initSagas } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const loggerMiddleware = createLogger();

const middleware: (SagaMiddleware|Middleware)[] = [sagaMiddleware];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(loggerMiddleware);
}

const configureStore = (preloadedState = {}): Store => {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middleware),
  );
  initSagas(sagaMiddleware);
  return store;
};

export default configureStore;
