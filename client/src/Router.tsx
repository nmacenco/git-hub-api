import React from 'react';

import {Routes , Route} from 'react-router-dom'
import { Commits } from './pages/commits';
import { Profile } from './pages/profile';
import { RouterLayout } from './common/RouterLayout';


export const AppRouter : React.FC<{}> = () => {

    return (
        <Routes>
            <Route path='/' element={<RouterLayout/>}>
                <Route path='/' element={<Profile/>} />
                <Route path='/commits' element={<Commits/>} />
                <Route path='/*' element={<Profile/>} />
            </Route>
        </Routes>
    )
}