import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [index, setIndex] = useState(1);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=12`
    );
    setPhotos(response.data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [index]);

  return (
    <div className="bg-black min-h-screen text-white">

      {/* Navbar */}
      <div className="backdrop-blur-md bg-white/5 border-b border-white/10 py-4 px-6 flex justify-between items-center mb-6 shadow-lg">
        <h1 className="text-2xl font-bold text-amber-400 tracking-wide">
          📸 Gallery
        </h1>
        <p className="text-gray-300 text-sm">Page {index}</p>
      </div>

      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-amber-400 to-yellow-200 bg-clip-text text-transparent mb-8 drop-shadow-md">
        Explore Beautiful Images
      </h1>

      {/* Gallery Grid */}
      <div className="px-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

        {/* Skeleton Loading */}
        {loading &&
          [...Array(12)].map((_, i) => (
            <div
              key={i}
              className="bg-gray-800 h-48 rounded-xl animate-pulse"
            ></div>
          ))}

        {/* Images */}
        {!loading &&
          photos.map((img) => (
            <div
              key={img.id}
              className="relative rounded-xl overflow-hidden group shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer"
            >
              <img
                src={img.download_url}
                alt="gallery"
                className="w-full h-48 object-cover group-hover:scale-110 transition-all duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex justify-center items-center">
                <p className="text-amber-300 font-semibold text-sm">
                  {img.author}
                </p>
              </div>
            </div>
          ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-6 items-center py-8">
        <button
          className="px-6 py-2 rounded-xl bg-gradient-to-r from-gray-600 to-gray-800 text-white font-semibold shadow hover:opacity-90 transition"
          onClick={() => index > 1 && setIndex(index - 1)}
        >
          ⬅ Prev
        </button>

        <span className="text-2xl font-bold bg-amber-400 text-black px-4 py-1 rounded-lg shadow">
          {index}
        </span>

        <button
          className="px-6 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold shadow hover:opacity-90 transition"
          onClick={() => setIndex(index + 1)}
        >
          Next ➜
        </button>
      </div>
    </div>
  );
};

export default App;
