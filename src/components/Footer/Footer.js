import { useMemo } from "react"
import { useSelector } from "react-redux"
import './Footer.scss'
export const Footer = () => {
    const goods = useSelector(state=>state.goods.data)
    const goodsMemo = useMemo(()=>goods.map(good=><div className="goods" key={good._id}>
    <img src={good.img} />
</div>))

    return  <div className='centerContainer footerBottom'>
    <div className='limitW1000 dontLimit'>
        <footer>
        {goodsMemo}
        </footer>
    </div>
    </div>
}