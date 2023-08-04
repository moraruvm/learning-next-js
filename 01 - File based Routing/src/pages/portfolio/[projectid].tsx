import { useRouter } from "next/router";

const PortfolioProjectPage = () => {
  const router = useRouter();

  return (
    <h1 className="text-3xl font-bold underline">
      Portfolio Page for Project {router.query["projectid"]}
    </h1>
  );
};

export default PortfolioProjectPage;
