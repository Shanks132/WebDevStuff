import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <h1>Hello to the Home Page</h1>
      <ul>
        <Link href={"/news"}>News</Link>
      </ul>
    </>
  );
}
