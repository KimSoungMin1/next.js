import Link from "next/link";
//next 라우팅 pages에 작성된 컴포넌트
const Test = () => {
  return (
    <div>
      <h1>Test</h1>
      <Link href={"/About"}>About</Link>
    </div>
  );
};

export default Test;
