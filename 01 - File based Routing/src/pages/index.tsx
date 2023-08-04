import Link from "next/link";

export const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
