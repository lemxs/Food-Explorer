import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { OrderHistory } from '../pages/OrderHistory'
import { OrderPage } from '../pages/OrderPage'
import { Edit } from '../pages/Edit'
import { AddDish } from '../pages/AddDish'
import { DeleteDish } from '../pages/DeleteDish'
import { Profile } from '../pages/Profile'


export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/orderhistory" element={<OrderHistory />} />
            <Route path="/orderpage" element={<OrderPage />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/addDish/" element={<AddDish />} />
            <Route path="/delDish/" element={<DeleteDish />} />
            <Route path="/profile" element={<Profile />} />
            {}
        </Routes>
    )
}