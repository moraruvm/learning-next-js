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
    <li>
      <img src={`/${image}`} alt={title}></img>
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>{formattedDate}</time>
          </div>
          <div>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div>
          <Link href={`/events/${id}`}>Expore Event</Link>
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
