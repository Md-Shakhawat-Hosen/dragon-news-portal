
import { useEffect } from "react";
import { useState } from "react";
import { FaBookmark, FaShareAlt, FaEye } from "react-icons/fa";
const MiddleContent = () => {
     const [news, setNews] = useState([])
     useEffect(()=>{
        fetch('news.json')
        .then(res=> res.json())
        .then (data => setNews(data))
     },[])
    return (
      <div>
        {news.slice(0, 5).map((newSingle) => (
          <div key={newSingle._id} className="mb-5">
            <div className="bg-slate-200 p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    className="w-[70px] h-[70px] rounded-full"
                    src={newSingle.author.img}
                    alt=""
                  />
                  <div>
                    <h1>{newSingle.author.name}</h1>
                    <h1>{newSingle.author.published_date}</h1>
                  </div>
                </div>

                <div className="flex text-4xl gap-2">
                  <FaBookmark></FaBookmark>
                  <FaShareAlt></FaShareAlt>
                </div>
              </div>
            </div>

            <div className="p-5">
              <div className="space-y-3">
                <h1 className="font-bold text-3xl">{newSingle.title}</h1>
                <img className="w-full" src={newSingle.image_url} alt="" />
                <p>{newSingle.details}</p>
                <h1 className="text-orange-600 font-bold">Read More</h1>
                <hr />
              </div>
              <div className="flex justify-between items-center mt-6">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />

                  <div className="ml-3">{newSingle.rating.number}</div>
                </div>

                <div className="flex gap-2 items-center">
                  <FaEye></FaEye>
                  <h1>{newSingle.total_view}</h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
};

export default MiddleContent;