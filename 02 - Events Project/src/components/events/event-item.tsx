import Link from "next/link";

const EventItem = (props: IProps) => {
  const { title, image, date, location, id } = props;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");

  return (
    <li className="flex shadow-md">
      <img
        className="h-48 w-52 object-cover"
        src={`/${image}`}
        alt={title}
      ></img>

      <div className="flex flex-col p-4 bg-white rounded-lg">
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <div className="mt-2 font-bold">
            <time>{formattedDate}</time>
          </div>
          <div className="mt-2">
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className="mt-5 flex justify-end">
          <Link className="underline text-blue-800" href={`/events/${id}`}>
            Expore Event
          </Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;

interface IProps {
  id: string;
  title: string;
  image: string;
  date: string;
  location: string;
}
