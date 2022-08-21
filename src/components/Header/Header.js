import { useDispatch } from 'react-redux'
import { basketOpen } from '../../redux/basket/basket';
import './Header.scss'

export const Header = () => {
   const dispatch = useDispatch();

      
    return <div className='centerContainer headerBg'>
    <div className='limitW1000'>
        <header>
            <h2>LOGO</h2>
            <button onClick={()=>dispatch(basketOpen())}>Order</button>
        </header>
    </div>
    </div>
}