import { useState } from "react";
import searchImages from "./API";
import SearchBar from "./componenets/SearchBar"
import ImageList from "./componenets/ImageList"

function App() {

  const [images, setImages] = useState([])

  const handleSubmit = async (term) => {
    const result = await searchImages(term)

    setImages(result)
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App