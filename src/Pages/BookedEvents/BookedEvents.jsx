import { useContext, useEffect, useState } from "react";
import { getStoredData } from "../../Utilities/storage";
import BookedCard from "./BookedCard";
import AuthContext from "../../Contexts/AuthContext";

const BookedEvents = () => {
  const [userEventsData, setUserEventsData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const { user } = useContext(AuthContext);

  //fetch the events data from local storage:
  useEffect(() => {
    const getUserEventsData = getStoredData();
    const getSpecificUserEventsData = getUserEventsData.filter((userEventData) => userEventData.userEmail === user?.email);
    if (getSpecificUserEventsData.length) {
      setUserEventsData(getSpecificUserEventsData);
    }
  }, [user?.email]);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className={userEventsData?.length ? "" : `h-[80vh] flex flex-col justify-center items-center`}>
          {userEventsData?.length ? (
            <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 gap-8">
              {showAll
                ? userEventsData?.map((userEvent, idx) => (
                    <BookedCard key={idx} userEvent={userEvent} />
                  ))
                : userEventsData
                    ?.slice(0, 3)
                    .map((userEvent, idx) => (
                      <BookedCard key={idx} userEvent={userEvent} />
                    ))}
            </div>
          ) : (
            <h1 className="text-3xl font-bold text-gray-700">
              You did not booked any event, yet!
            </h1>
          )}
          <div className={`mt-8 text-center ${userEventsData?.length ? "block" : "hidden"}`}>
            {userEventsData.length > 3 && (
              <button className="btn btn-sm bg-blue-600 text-white rounded-full hover:bg-blue-500"
                onClick={() => setShowAll(!showAll)}>
                {showAll ? "See Less" : "See More"}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookedEvents;
