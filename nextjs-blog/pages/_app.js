import "../styles/global.css";
const App = ({ Component, pageProps }) => {
  //_app.js파일 생성 styles폴더 안에 global.css파일 생성
  //global.css:page 안에 모든 컴포넌트에 공통되는 스타일을 적용할때 사용한다
  return <Component {...pageProps} />;
};

export default App;
