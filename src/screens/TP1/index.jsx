import { Link, useNavigate } from "react-router-dom";

import Button from '../../components/button';

export default function TP1() {

  const navigate = useNavigate();

  return (
    <div className='questions'>
      <h1>TP1</h1>
      <ul>
        <li><Link to={'/tp1/01'}>Exercício 01</Link></li>
        <li><Link to={'/tp1/02'}>Exercício 02</Link></li>
        <li><Link to={'/tp1/03'}>Exercício 03</Link></li>
        <li><Link to={'/tp1/04'}>Exercício 04</Link></li>
        <li><Link to={'/tp1/05'}>Exercício 05</Link></li>
        <li><Link to={'/tp1/06'}>Exercício 06</Link></li>
        <li><Link to={'/tp1/07'}>Exercício 07</Link></li>
        <li><Link to={'/tp1/08'}>Exercício 08</Link></li>
        <li><Link to={'/tp1/09'}>Exercício 09</Link></li>
        <li><Link to={'/tp1/10'}>Exercício 10</Link></li>
        <li><Link to={'/tp1/11'}>Exercício 11</Link></li>
        <li><Link to={'/tp1/12'}>Exercício 12</Link></li>
        <li><Link to={'/tp1/13'}>Exercício 13</Link></li>
        <li><Link to={'/tp1/14'}>Exercício 14</Link></li>
        <li><Link to={'/tp1/15'}>Exercício 15</Link></li>
        <li><Link to={'/tp1/16'}>Exercício 16</Link></li>
      </ul>

      <Button title={'Voltar'} action={() => navigate(-1)}/>
        
    </div>
  );
};