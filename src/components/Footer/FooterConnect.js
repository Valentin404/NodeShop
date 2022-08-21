import { connect } from "react-redux";
import { Footer } from "./Footer"




//  const FooterConnect = () => {


//     return <Footer/>
// }

function mapStatetoProps({goods}) {
    return {
          goods
    };
  }

export default connect(mapStatetoProps,
    //{removeTodo, changeTextForTodo, changeIsPacked, addTodo,changeIsLoading,changeTextInput}
    )(Footer);
