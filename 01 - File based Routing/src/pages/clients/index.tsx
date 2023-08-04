import Link from "next/link";

const ClientsPage = () => {
  const clients: Client[] = [
    { id: "coca-cola", name: "Coca Cola" },
    { id: "pepsi", name: "Pepsi" },
    { id: "budweiser", name: "Budweiser" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{ pathname: "/clients/[id]", query: { id: client.id } }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface Client {
  id: string;
  name: string;
}

export default ClientsPage;
