import { useParams } from "react-router-dom";
import Heading from "../../Components/Heading/Heading";
import PageBanner from "../../Components/PageBanner/PageBanner";
import { useContext, useEffect, useState } from "react";
import EventCard from "./EventCard";
import { setStoreData } from "../../Utilities/storage";
import toast from "react-hot-toast";
import AuthContext from "../../Contexts/AuthContext";

const Event = () => {
  const [event, setEvent] = useState({});
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  //find the event:
  useEffect(() => {
    fetch("/EventsData.json")
      .then((res) => res.json())
      .then((data) => {
        const findEvent = data.find((dataObj) => dataObj?._id === parseInt(id));
        if (findEvent) {
          setEvent(findEvent);
        }
      });
  }, [id]);

  //event booking handler:
  const bookedEvent = () => {
    //Making User Data with Event Details:
    const userData = {
      id: event?._id,
      eventName: event?.event_name,
      eventType: event?.event_type,
      eventImage: event?.event_image,
      ticketPrice: event?.ticket_price,
      date: event?.date,
      location: event?.location,
      animation: event?.animation,
      userEmail: user?.email,
    };
    
    //set data to LS:
    setStoreData(userData);
    toast.success(`You've booked ${userData.eventName} event Successfully!`, {
      position: "bottom-center",
      style: {
        padding: "4px",
      },
    });
  };

  return (
    <>
      <PageBanner>
        <Heading text={event.event_type}></Heading>
      </PageBanner>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <EventCard event={event} bookedEvent={bookedEvent} />
        </div>
      </section>
    </>
  );
};

export default Event;
