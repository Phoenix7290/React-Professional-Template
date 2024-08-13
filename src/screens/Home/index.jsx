import { Link } from "react-router-dom";

export default function Home() {

    return (
        <div className="container">
            <h1>Testes de Performance</h1>
            <ul>
                <li className="option"><Link to={'/tp1'}>TP1</Link></li>
                <li className="option"><Link to={'/tp2'}>TP2</Link></li>
            </ul>
        </div>
    );
};