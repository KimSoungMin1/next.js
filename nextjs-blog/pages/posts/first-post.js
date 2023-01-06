import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout";
import Test from "../../components/test";
export default function FirstPost() {
  return (
    <Layout>
      <h2>FirstPost</h2>
      <p>
        <Link href="/">← Back to home</Link>
      </p>
      <Image
        src="/images/profile.jpg"
        width={144}
        height={144}
        alt="Your Name"
      />
      <Test />
    </Layout>
  );
}
