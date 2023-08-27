import React from 'react';

import {Routes , Route} from 'react-router-dom'
import { Home } from './pages/home';
import About from './pages/about';
import { RouterLayout } from './common/RouterLayout';


export const AppRouter : React.FC<{}> = () => {

    return (
        <Routes>
            <Route path='/' element={<RouterLayout/>}>
                <Route path='/home' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/*' element={<Home/>} />
            </Route>
        </Routes>
    )
}