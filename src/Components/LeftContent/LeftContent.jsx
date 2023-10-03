import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import moment from "moment";
import img_1 from '../../assets/1.png'
import img_2 from '../../assets/2.png'
import img_3 from '../../assets/3.png'

import {
 FaCalendar
} from "react-icons/fa";

const LeftContent = () => {
     const [categories, setCategory] = useState([])

     useEffect(()=>{
        fetch('categories.json')
        .then(res=> res.json())
        .then(data => setCategory(data))
     },[])
    
    //  console.log(categories)
    return (
      <div>
        <h1 className="font-bold">All Category</h1>
        <div>
          {categories.map((category) => (
            <NavLink
              to={`/category/${category.id}`}
              key={category.id}
              className="block p-3"
            >
              {category.name}
            </NavLink>
          ))}
        </div>

        <div className="space-y-3 mt-7">
          <img className="w-full" src={img_1} alt="" />
          <h1 className="font-bold">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h1>
          <div className="flex gap-3 items-center">
            <h1 className="font-bold">Sports</h1>
            <FaCalendar></FaCalendar>
            {moment().format("LL")}
          </div>
        </div>
        <div className="space-y-3 mt-7">
          <img className="w-full" src={img_2} alt="" />
          <h1 className="font-bold">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h1>
          <div className="flex gap-3 items-center">
            <h1 className="font-bold">Sports</h1>
            <FaCalendar></FaCalendar>
            {moment().format("LL")}
          </div>
        </div>
        <div className="space-y-3 mt-7">
          <img className="w-full" src={img_3} alt="" />
          <h1 className="font-bold">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </h1>
          <div className="flex gap-3 items-center">
            <h1 className="font-bold">Sports</h1>
            <FaCalendar></FaCalendar>
            {moment().format("LL")}
          </div>
        </div>
      </div>
    );
};

export default LeftContent;