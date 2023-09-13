import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';

const Header = styled.header`
    font-size: 24px;
    font-weight: 600;
    padding-left: 200px;
    padding-right: 200px;

    img {
        margin: auto;
        display: block;
    }

    h2{
        display: flex;
        justify-content: center;
        margin-top : 100px;
    }

    input {
        margin-left : 444px;
        width : 400px;
        height : 50px;
    }

    button{
        margin-left : 20px;
        font-size: 20px;
        height : 50px;
    }
`;

const Nav = styled.nav`
    margin-bottom: 50px;

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

    .search{
        display: inline;
        margin-right: 40px;
        color: #8000FF;
    }

    ul li:hover {
        color: #8000FF;
    }
`;


function Category(){
    const [search, setSearch] = useState("");
    const [inputText, setInputText] = useState("");
    
    const onChange = (e) => {
        setSearch(e.target.value)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setInputText(search);
    };

    return(
        <Header>
            <Nav>
                <ul>
                    <Link to="/" style={{ textDecoration: "none" }}><header>FirstAI</header></Link>
                    <Link to="/category" style={{ textDecoration: "none" }}><li>카테고리</li></Link>
                    <Link to="/nodemap" style={{ textDecoration: "none" }}><li>노드맵</li></Link>
                    <Link to="/search" style={{ textDecoration: "none" }}><li className="search">Search</li></Link>
                </ul>
            </Nav>
            <h2>관련 내용을 입력하세요</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" value={search} onChange={onChange} />
                <button type='submit'>제출하기</button>
            </form>
            <h2>{inputText}</h2>
        </Header>
    );
}

export default Category;