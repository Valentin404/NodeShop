import { connect } from "react-redux";
import { R_add_product } from "../../redux/products/products";
import { Goods } from "./Goods"


function mapStatetoProps({goods}) {
    return {
         goods
    };
  }
export default connect(mapStatetoProps,
  {R_add_product}
    )(Goods);
