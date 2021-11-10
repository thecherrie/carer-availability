
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card/Card";
import TopBar from "./components/TopBar/TopBar";
import Scheduler from "./components/Scheduler/Scheduler";


function App() {

  const [carers, setCarers] = useState();
  const [loading, setLoading] = useState(true);
  const [scheduling, setScheduling] = useState(null, false)

  useEffect(() => {
    const url = "https://ceracare.github.io/carers.json"
    axios.get(url).then(
      data => {
        setCarers(data.data.carers)
        setLoading(false)
      })
  }, [])

  console.log(carers)


  return (
    <>
      {scheduling ? <Scheduler name={scheduling} setScheduling={(name, val) => setScheduling(name, val)} /> : null}
      <TopBar />
      <div className="mainCardContainer">
        {

          loading ? <h1>Loading...</h1> :
            carers.map(carer => {
              return <Card setScheduling={(name, val) => setScheduling(name, val)}
                name={carer.name}
                slots={carer.slots}
                image={carer.photo} />
            })
        }
      </div>
    </>
  );
}

export default App;
