import { connect } from "react-redux";
import { Header } from "./Header"




//  const HeaderConnect = ({goods}) => {


//     return <Header/>
// }

function mapStatetoProps({goods}) {
    return {
    //  goods
    };
  }

export default connect(mapStatetoProps,
    )(Header);
