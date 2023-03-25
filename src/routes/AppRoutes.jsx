import { Navigate, Route, Routes } from 'react-router-dom';
import { Callback } from '../components/callback/callback';
import Layout from '../components/layout';
import { Episodes } from '../views/Episodes';
import Home from '../views/Home';
import { Library } from '../views/Library';
import { Liked } from '../views/Liked';
import { Playlist } from '../views/Playlist';
import { Queue } from '../views/Queue';
import Search from '../views/Search/Search';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/search?/:querySearch" element={<Search />} />
                <Route path="/library" element={<Library />} />
                <Route path="/collection/tracks" element={<Liked />} />
                <Route path="/collection/episodes" element={<Episodes />} />
                <Route path="/artist/:id" element={<Episodes />} />
                <Route path="/album/:id" element={<Episodes />} />
                <Route path="/playlist/:id" element={<Playlist />} />
                <Route path="/queue" element={<Queue />} />
                <Route path="/callback" element={<Callback />} />
            </Route>

            <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
    );
};
