import { useRouter } from "next/router";

const ClientProjectsPage = () => {
  const router = useRouter();

  const clientId = router.query["id"];

  const loadProject = () => {
    // load data...
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: clientId, clientprojectid: "project-a" },
    });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Projects page for client {router.query["id"]}
      </h1>
      <button onClick={loadProject}>Load Project A</button>
    </div>
  );
};

export default ClientProjectsPage;
