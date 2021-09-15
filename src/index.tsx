import ReactDOM from 'react-dom'

import App from './App'
import 'antd/dist/antd.css'
import './assets/index.css'
import { Provider } from 'react-redux'
import { Loader } from './components/ui'
import * as serviceWorker from './serviceWorker'
import { persistor, store } from './store/store'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<Loader />}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
serviceWorker.unregister()
