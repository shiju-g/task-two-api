// App.js
import React from "react";
import useApi from "./useApi";
import LoadingComponent from "./LoadingComponent";
import ErrorComponent from "./ErrorComponent";

const apiUrl = "https://dummyjson.com/products/1";

const App = () => {
  const { data, loading, error } = useApi(apiUrl);

  if (loading) {
    return <LoadingComponent />;
  }

  if (error) {
    return <ErrorComponent error={error} />;
  }
  console.log(data,"data")
  return (
    <div className="App">
      <h1>API Data</h1>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div className="card">
        <div>
          <img src={data?.images[0]} alt={data?.title} />
        </div>
        <div className="details">
          <div>
            <h1 className="name">{data?.title}</h1>
            <h2 className="description">{data?.description}</h2>
            <h3 className="brand">{data?.brand}</h3>
          </div>
          <div className="price">
            <h2>RS {data?.price}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
