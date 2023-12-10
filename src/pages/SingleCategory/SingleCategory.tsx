
import { Params, useParams } from "react-router-dom";
import Hero from "../../components/hero/Hero";
import useFetch from "../../hooks/useFetch";
import PeopleItem from "../../components/item/People";
import FilmItem from "../../components/item/FilmItem";
import VehicleItem from "../../components/item/VehicleItem";
const SingleCategory = () => {
  const param: Params = useParams();
  console.log(param);
  const { data, loading, error } = useFetch(
    `https://swapi.dev/api/${param?.id}`
  );
  console.log(data, loading, error);
  if (error) {
    alert("some thing went wrong");
  }
  return (
    <div>
      {data && (
        <>
          <Hero />

          <h1 style={{ color: "black", textAlign: "center" }}> {param?.id}</h1>
          <div className="cardContainer">
            {data?.map((item, ind) => {
              return (
                <>
                  {param?.id === "vehicles" && (
                    <VehicleItem key={ind} item={item as Vehicle} />
                  )}
                  {param?.id === "films" && <FilmItem key={ind} item={item as Film} />}
                  {param?.id === "people" && (
                    <PeopleItem key={ind} item={item as Character} />
                  )}
                </>
              );
            })}
          </div>
        </>
      )}
      {loading && (
        <h1 style={{ color: "black", textAlign: "center" }}>Loading....</h1>
      )}
    </div>
  );
};

export default SingleCategory;
