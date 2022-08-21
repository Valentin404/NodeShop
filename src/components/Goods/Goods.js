import { useMemo } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { basketAddNew } from "../../redux/basket/basket"
import './Goods.scss'
export const Goods = () => {
const goods = useSelector(state=>state.goods.data)
const dispatch = useDispatch()

    const goodsMemo = useMemo(() => goods.map(good => <div className="goods" key={good._id}>
        <img src={good.img} />
        <button onClick={()=>dispatch(basketAddNew(good))}>order this product</button>
    </div>))

    return <div className='centerContainer'>
        <div className='limitW1000'>
            <main>
                {goodsMemo}
            </main>
        </div>
    </div>
}