import Layout from "../components/Layout";
import PictureBox from "../components/PicureBox";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import LonelyHeartForm from "../components/LonelyHeartForm";

const reducers = {
  form: formReducer
};
const reducer = combineReducers(reducers);
let store = createStore(
  reducer
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default class Index extends React.Component {
  submit = values => {
    window.alert(JSON.stringify(values, null, 4));
  };

  render() {
    return (
      <Provider store={store}>
        <Layout>
          <div id="header-section">
            <PictureBox />
            <p id="header-tag-line">
              {" "}
              Join the <br />
              lonely
              <br /> hearts
              <br /> club
            </p>
          </div>
          <LonelyHeartForm onSubmit={this.submit} />

          <style global jsx>{`
            #header-section {
              display: grid;
              grid-template-columns: 1fr 1fr;
            }
            #header-tag-line {
              color: white;
              text-align: center;
              font-size: 3rem;
              margin-block-start: 0em;
              margin-block-end: 0em;
              margin-inline-start: 0px;
              margin-inline-end: 0px;
            }
            #question-section {
              display: grid;
            }
          `}</style>
        </Layout>
      </Provider>
    );
  }
}
