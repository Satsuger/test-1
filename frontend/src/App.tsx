import "./App.scss";
import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getImages } from "./services/images";
import { API } from "./const";
import ImageGallery from "./components/ImageGallery/ImageGallery";

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
      {/* Header  */}

      {isGallery ? <ImageGallery images={data || []} /> : <></>}
    </div>
  );
}

export default App;
