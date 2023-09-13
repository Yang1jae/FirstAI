import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home';
import Category from './Category';
import NodeMap from './NodeMap';
import Search from './Search';

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="category" element={<Category />} />
                    <Route path="nodemap" element={<NodeMap />} />
                    <Route path="search" element={<Search />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;