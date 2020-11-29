// import { getArticles} from '../src/apiProvider/apiProvider'; 

// function helloWorld() {

//     const data = getArticles('fashion').
//         then((resultList) => console.log(resultList.data)).
//         catch(function (error) {
//             // handle error
//             console.log(error);
//         });
//     let element = document.createElement('div');

//     element.innerHTML = 'Hello world';

//     return element;
// }

// document.body.appendChild(helloWorld());
import 'regenerator-runtime/runtime'
import React from "react";
import ReactDOM from "react-dom";
import  Articles  from '../src/components/Articles';
import './index.css';

const App = () => {
  return (<Articles/>);
};

ReactDOM.render(<App />, document.querySelector("#root"));
