import React from 'react';
import { Provider } from 'react-redux';
import WyloApp from './components/WyloApp';
import store from './redux/store';
import './styles/index.css'; // Ensure fonts.css is imported



function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <WyloApp />
            </div>
        </Provider>
    );
}

export default App;
