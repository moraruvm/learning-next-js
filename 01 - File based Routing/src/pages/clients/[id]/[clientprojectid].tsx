import { useRouter } from "next/router";

const ClientProjectPage = () => {
  const router = useRouter();

  const projectId = router.query["clientprojectid"];
  const clientId = router.query["id"];

  return (
    <h1 className="text-3xl font-bold underline">
      Project {projectId} page for client {clientId}
    </h1>
  );
};

export default ClientProjectPage;
