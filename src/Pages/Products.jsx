import { useEffect, useState } from "react";
import { ProductCard } from "../Components/ProductCard";
export const Products = ({ cat }) => {
  const [dbdata, setData] = useState([]);
  const [loading,setLoading]=useState(true);
  const allData = async () => {
    let res = await fetch("http://localhost:3030/data");
    let resp = await res.json();

    if (cat === "men") {
      setData(resp[0].men);
    } else if (cat === "women") {
      setData(resp[0].women);
    } else {
      setData(resp[0].kid);
    }
    // setLoading(false);
  };

  useEffect(() => {
    allData();
    // setLoading(false);
  }, [cat]);
  // if(loading){
  //   return [];
  // }
  return dbdata;
};
