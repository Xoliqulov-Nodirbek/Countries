import { useState, useEffect } from "react";
import { Card } from "../cardItem/cardItem";
import { List } from "../cardList/cardList";
import Loader from "../../assets/images/loader.gif";

const Countryes = ({ inputText }) => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/subregion/asia")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    setFilter(true)
    if(inputText === ""){
      setFilter(false)
    }
  }, [inputText])

  const filteredData = data.filter(evt => {
    if(inputText === "") {
      return evt
    } else{
      return evt.name.common.toLowerCase().includes(inputText)
    }
  })

  return (
    <>
      <List>
        {data.length ? (
          (filter ? filteredData : data).map((e) => (
              <Card
                title={e.name.common}
                img={e.flags.png}
                population={e.population}
                region={e.region}
                capital={e.capital}
              />
            ))
        ) : (
          <div className="w-screen h-screen flex items-center justify-center">
            <img
              className="w-[200px] h-[200px] flex items-center justify-center object-cover rounded-[50%]"
              src={Loader}
              alt="Loader"
            />
          </div>
        )}
      </List>
    </>
  );
};

export default Countryes;
