import { useEffect, useState } from "react";
import Header from "./Header";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function handleNotInterested(id) {
    const newtours = tours.filter((tour) => tour.id !== id);
    setTours(newtours);
  }
  useEffect(
    function () {
      async function fetchData() {
        const res = await fetch(url);
        const data = await res.json();
        setTours(data);
        setIsLoading(false);
      }
      fetchData();
      console.log(tours);
    },

    []
  );

  return (
    <main>
      <Header />
      {isLoading ? (
        <div className="loading"></div>
      ) : (
        <Tours data={tours} handleNotInterested={handleNotInterested} />
      )}
    </main>
  );
};
export default App;
