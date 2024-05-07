import axios from "axios";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import { useEffect, useState } from "react";

const Home = () => {
  const [tutorials, setTutorials] = useState([]);
  // const URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";
  const getTutorials = async () => {
    const res = await axios(process.env.REACT_APP_URL);
    setTutorials(res.data);
  };

  useEffect(() => {
    getTutorials();
  }, []);

  return (
    <div>
      <AddTutorial getTutorials={getTutorials} />
      <TutorialList tutorials={tutorials} getTutorials={getTutorials} />
    </div>
  );
};

export default Home;
