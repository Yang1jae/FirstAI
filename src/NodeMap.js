import styled from 'styled-components';
import { Link } from 'react-router-dom';

import nodemapimg from './nodemap.png';

const Header = styled.header`
    font-size: 24px;
    font-weight: 600;
    padding-left: 200px;
    padding-right: 200px;

    img {
        margin: auto;
        display: block;
    }
`;

const Nav = styled.nav`
    margin-bottom: 150px;

    ul {
        margin: 0;
        padding: 0;
        margin-top: 30px;
        color: #000000;
    }

    ul header {
        display: inline;
        margin-right: 800px;
        font-size: 36px;
        color: #8000FF;
    }

    ul li {
        display: inline;
        margin-right: 40px;
        color: #000000;
    }

    .nodemap{
        display: inline;
        margin-right: 40px;
        color: #8000FF;
    }

    ul li:hover {
        color: #8000FF;
    }
`;

function Category(){
    return(
        <Header>
            <Nav>
                <ul>
                    <Link to="/" style={{ textDecoration: "none" }}><header>FirstAI</header></Link>
                    <Link to="/category" style={{ textDecoration: "none" }}><li>카테고리</li></Link>
                    <Link to="/nodemap" style={{ textDecoration: "none" }}><li className="nodemap">노드맵</li></Link>
                    <Link to="/search" style={{ textDecoration: "none" }}><li>Search</li></Link>
                </ul>
            </Nav>
            <img src={nodemapimg}/>
        </Header>
    );
}

export default Category;