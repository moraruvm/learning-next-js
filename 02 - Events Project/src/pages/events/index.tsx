import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "dummyData";

const EventsPage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
};

export default EventsPage;
