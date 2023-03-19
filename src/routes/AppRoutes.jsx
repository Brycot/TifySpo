import { Navigate, Route, Routes } from 'react-router-dom';
import { Callback } from '../components/callback/callback';
import Layout from '../components/layout';
import Home from '../views/Home';
import Search from '../views/Search/Search';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/search?/:querySearch" element={<Search />} />
                <Route path="/library" element={<Search />} />
                <Route path="/callback" element={<Callback />} />
            </Route>

            <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
    );
};
