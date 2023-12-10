import React, { useEffect, useState } from "react";
import "./carItem.css";
import { Params, useParams, useSearchParams } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
const ItemDetail = () => {
  const data = useAppSelector((state) => state.starWarData.data);

  console.log(data);
  const param: Params = useParams();

  let [searchParams] = useSearchParams();

  let category = searchParams.get("category");
  let item;
  const [starTtem, setItem] = useState<
    Film | Character | Vehicle | null | undefined
  >(null);
  useEffect(() => {
    if (category === "vehicles") {
      item = data.find((dataItem: Vehicle) => {
        return dataItem?.name === param.id;
      });
      setItem(item);
      console.log(item);
    }
    if (category === "films") {
      item = data.find((dataItem: Film) => {
        return dataItem?.title === param.id;
      });
      setItem(item);
      console.log(item);
    }
    if (category === "people") {
      item = data.find((dataItem: Character) => {
        return dataItem?.name === param.id;
      });
      setItem(item);
      console.log(item);
    }
  }, [param.id]);

  if (!starTtem) {
    return (
      <h1>
        Api does not provide any unique field to find data .It does not provide
        id field on it.So data is stored in redux store and here state is
        finding using param name.If you come here by url .this message will be
        shown.
      </h1>
    );
  }

  if (category === "vehicles") {
    return (
      <div className="container1">
        <h1>Vehicle Information</h1>

        <div className="property">
          <span>Name:</span>
          <span>{(starTtem as Vehicle).name}</span>
        </div>

        <div className="property">
          <span>Model:</span>
          <span>{(starTtem as Vehicle).model}</span>
        </div>
        <div className="property">
          <span>manufacturer:</span>
          <span>{(starTtem as Vehicle).manufacturer}</span>
        </div>
        <div className="property">
          <span>vehicle class:</span>
          <span>{(starTtem as Vehicle).vehicle_class}</span>
        </div>

        <div className="property">
          <span>URL:</span>
          <span>
            <a href="https://swapi.dev/api/vehicles/4/" target="_blank">
              Vehicle Details
            </a>
          </span>
        </div>
      </div>
    );
  }
  if (category === "people") {
    return (
      <div className="container1">
        <h1>Character Information</h1>

        <div className="property">
          <span>Name:</span>
          <span>{(starTtem as Character).name}</span>
        </div>

        <div className="property">
          <span>Height:</span>
          <span>{(starTtem as Character).height}</span>
        </div>

        <div className="property">
          <span>Mass:</span>
          <span>{(starTtem as Character).mass}</span>
        </div>
        <div className="property">
          <span>Skin Color:</span>
          <span>{(starTtem as Character).skin_color}</span>
        </div>

        <div className="property">
          <span>URL:</span>
          <span>
            <a href="https://swapi.dev/api/vehicles/4/" target="_blank">
              Vehicle Details
            </a>
          </span>
        </div>
      </div>
    );
  }
  if (category === "films") {
    return (
      <div className="container1">
        <h1>Film Information</h1>

        <div className="property">
          <span>Title:</span>
          <span>{(starTtem as Film).title}</span>
        </div>

        <div className="property">
          <span>Director :</span>
          <span>{(starTtem as Film).director}</span>
        </div>
        <div className="property">
          <span>Producer :</span>
          <span>{(starTtem as Film).producer}</span>
        </div>

        <div className="property">
          <span>URL:</span>
          <span>
            <a href="https://swapi.dev/api/vehicles/4/" target="_blank">
              Vehicle Details
            </a>
          </span>
        </div>
      </div>
    );
  }

  return (
    <h1>
      Api does not provide any unique field to find data .It does not provide id
      field on it.So data is stored in redux store and here state is finding
      using param name.If you come here by url .this message will be shown.
    </h1>
  );
};

export default ItemDetail;
