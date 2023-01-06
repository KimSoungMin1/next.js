import Link from "next/link";
const About = () => {
  return (
    <div>
      <h1>About 페이지 입니다</h1>
      <Link href={"/"}>홈으로 이동</Link>
      <Link href={"/About"}>About으로 이동</Link>
      <Link href={"/user/profile"}>profile 이동</Link>
    </div>
  );
};

export default About;
