import { Link, useNavigate } from "react-router-dom";

import Button from '../../components/button';

export default function TP2() {

  const navigate = useNavigate();

  return (
    <div className='questions'>
      <h1>TP2</h1>
      <ul>
        <li><Link to={'/tp2/01'}>Exercício 01</Link></li>
        <li><Link to={'/tp2/02'}>Exercício 02</Link></li>
        <li><Link to={'/tp2/03'}>Exercício 03</Link></li>
        <li><Link to={'/tp2/04'}>Exercício 04</Link></li>
        <li><Link to={'/tp2/05'}>Exercício 05</Link></li>
        <li><Link to={'/tp2/06'}>Exercício 06</Link></li>
        <li><Link to={'/tp2/07'}>Exercício 07</Link></li>
        <li><Link to={'/tp2/08'}>Exercício 08</Link></li>
        <li><Link to={'/tp2/09'}>Exercício 09</Link></li>
        <li><Link to={'/tp2/10'}>Exercício 10</Link></li>
        <li><Link to={'/tp2/11'}>Exercício 11</Link></li>
        <li><Link to={'/tp2/12'}>Exercício 12</Link></li>
        <li><Link to={'/tp2/13'}>Exercício 13</Link></li>
        <li><Link to={'/tp2/14'}>Exercício 14</Link></li>
        <li><Link to={'/tp2/15'}>Exercício 15</Link></li>
        <li><Link to={'/tp2/16'}>Exercício 16</Link></li>
      </ul>

      <Button title={'Voltar'} action={() => navigate(-1)}/>
        
    </div>
  );
};