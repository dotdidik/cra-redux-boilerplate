import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../redux/store';
import AppRouter from './appRouter';

const store = configureStore()

class AppRouterRedux extends React.Component {
    render(){
        return (
            <Provider store={store}>
                <AppRouter />
            </Provider>
        )
    }
}

export default AppRouterRedux;