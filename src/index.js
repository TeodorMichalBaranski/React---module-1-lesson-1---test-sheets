import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import Post from 'components/Post';

const name = 'Buy tacos';
function foo(a) {
  return a;
}
// const element = <span>Moj span</span>;
const imgUrl =
  'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640';
const price = '99 kr';
//--------------------------------------------
function Test() {
  return (
    <button type="button" className="testCss">
      Buy more tacos
    </button>
  );
}
// const Header = () => <header> User nr1</header>;
// const Main = function () {
//   return <main>Content of the post</main>;
// };
// function Post() {
//   return (
//     <div>
//       <Header />
//       <Main />
//       <footer> Like IT!!!</footer>
//     </div>
//   );
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div id="myID" className="class1">
      <div className="containerImg">
        <img src={imgUrl} alt="tacos with lime" width="500px" />
      </div>
      <h1> {name.toUpperCase()}</h1>
      <p>My contetn</p>
      {foo(<p>moja funkcja foo</p>)}
      <p>{price} </p>
      <button type="button">Buy me</button>
      <p>---------End of 1rts part of index.js--------</p>
      <Test />
      <p>=============End of Test element================</p>
      <Post />
      <p>----------------End of Post element------------</p>
      <App />
      <p>+++++++++++++++End of APP element++++++++</p>
    </div>
  </React.StrictMode>
);
