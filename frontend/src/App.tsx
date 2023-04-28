import "./App.scss";
import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getImages } from "./services/images";
import { API } from "./const";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Carousel from "./components/Carousel/Carousel";

function App() {
  const [isGallery, setIsGallery] = useState(true);

  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: [API.GET_TODOS],
    queryFn: getImages,
  });

  console.log(data);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="container">
      <div className="header-container">
        <p className="select-view">
          Select view:
          <span
            className={isGallery ? "active" : ""}
            onClick={() => setIsGallery(true)}
          >
            Gallery
          </span>
          <span
            className={!isGallery ? "active" : ""}
            onClick={() => setIsGallery(false)}
          >
            Carousel
          </span>
        </p>

        <div className="btn add-image"></div>
      </div>

      {isGallery ? (
        <ImageGallery images={data || []} />
      ) : (
        <Carousel images={data || []} />
      )}
    </div>
  );
}

export default App;
