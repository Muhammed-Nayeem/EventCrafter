const getStoredData = () => {
  const eventsData = localStorage.getItem("events-store");
  if (eventsData) {
    return JSON.parse(eventsData);
  }
  return [];
};

const setStoreData = (eventData) => {
  const prevStoreData = getStoredData();
  const currentStoreData = [...prevStoreData, eventData];
  const stringifyStoreData = JSON.stringify(currentStoreData);
  localStorage.setItem("events-store", stringifyStoreData);
};

export { getStoredData, setStoreData };
