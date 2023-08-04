import EventDetailsPage from "@/pages/events/[eventId]";
import { IEvent } from "dummyData";
import EventItem from "./event-item";

const EventList = (props: IProps) => {
  const { items } = props;

  return (
    <ul className="mt-24 flex flex-col items-center gap-4">
      {items.map((e) => (
        <EventItem
          key={e.id}
          id={e.id}
          title={e.title}
          location={e.location}
          image={e.image}
          date={e.date}
        ></EventItem>
      ))}
    </ul>
  );
};

export default EventList;

interface IProps {
  items: IEvent[];
}
