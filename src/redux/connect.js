// import session from "../seesion/session"
import api from '../api/api'
import { basketAddLllProductsSession } from './basket/basket';
import { goodsAdd } from "./goods/goods"
import { creatID } from './user/user';

export const connectInBack = () => dispatch => {

    api.getSession().then((data) => {
        const ui = data?.user?.ui
        if (ui) {
            dispatch(creatID(ui))
            dispatch(basketAddLllProductsSession(data.user.data))
        } else {
            api.setSessionFirst().then(res => {
                console.log(res);
                
                dispatch(creatID(res.user.ui))
            })
        }

    });



    api.getGoods()
        .then(data => dispatch(goodsAdd(data)))
        .catch((err) => console.log(err));


    // api.setSession([]).then(res => {
    //         // dispatch(creatID(res.user.ui))
    //         console.log(res);
    // });
    // api.getSessionSet([]).then(res => {
    //         // dispatch(creatID(res.user.ui))
    //         console.log(res);
    // })

}

