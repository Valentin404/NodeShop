import { useMemo } from 'react';
import './App.css';
import './app.scss';
import {  useDispatch, useSelector } from "react-redux";
import { Loading } from './loading/Loading';
import { Goods } from './components/Goods/Goods';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import ReactModal from 'react-modal';
import { basketClose, basketMinusCount, basketPlusCount, basketRemove } from './redux/basket/basket';
function App() {
  const {loadingGoods,isOpen,basketGoods,order} = useSelector(state=>({
    loadingGoods : state.goods.data.length,
    isOpen : state.basket.isOpen,
    basketGoods:state.basket.data,
    order : state.basket.order
  }))
  
  const dispatch = useDispatch()
  
  const basketGoodsMemo = useMemo(()=>basketGoods.map(goods=><div className='goodsInBasket' key={goods._id}>
    <img src={goods.img}/>
    <p className='price'>
      price :  {goods.price}
    </p>
    <p>
     count : 
     <span onClick={()=>dispatch(basketMinusCount(goods._id))}>-</span> 
      {goods.count} 
     <span onClick={()=>dispatch(basketPlusCount(goods._id))}>+</span>
    </p>
    <button onClick={()=>dispatch(basketRemove(goods._id))}>remove</button>
  </div>))

if(loadingGoods == 0) return <Loading />
  return (
    <div className="App">
      <Header />
      <Goods />
      <Footer/>
      <ReactModal
      isOpen={isOpen}
      ariaHideApp={false}
      className="ReactModal"
      >
        <div className="Modal">
          
        <button className='close' onClick={()=>dispatch(basketClose())}>X</button>
        <h3>{order}</h3>
        <div className='basketGoods'>
            {basketGoodsMemo.length == 0 
              ? <p className='cartIsEmpty'>cart is empty</p>
              : basketGoodsMemo
             }
        </div>

        </div>
      </ReactModal>
    </div>
  );
}


// function mapStatetoProps(state) {
//   return {
//    loadingGoods: state.goods.length,
//   };
// }

// export default connect(mapStatetoProps,{connectInBack})(App);
export default App;
