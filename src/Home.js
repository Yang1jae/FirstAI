import styled from 'styled-components';
import { Link } from 'react-router-dom';

import homepageimg from './homepage.jpg';

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

    ul li:hover {
        color: #8000FF;
    }
`;

function Home(){
    return(
        <Header>
            <Nav>
                <ul>
                    <Link to="/" style={{ textDecoration: "none" }}><header>FirstAI</header></Link>
                    <Link to="/category" style={{ textDecoration: "none" }}><li>카테고리</li></Link>
                    <Link to="/nodemap" style={{ textDecoration: "none" }}><li>노드맵</li></Link>
                    <Link to="/search" style={{ textDecoration: "none" }}><li>Search</li></Link>
                </ul>
            </Nav>
            <img src={homepageimg}/>
        </Header>
    );
}

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Header>
        <Nav>
            <ul>
                <header>FisrtAI</header>
                <li><a href="https://www.naver.com/">카테고리</a></li>
                <li>노드맵</li>
                <li><a>Search</a></li>
            </ul>
        </Nav>
        <img src={homepageimg}/>
    </Header>
);*/

export default Home;