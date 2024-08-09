import { useEffect, useState } from "react";
import { ProductCard } from "../Components/ProductCard";

export const Products = ({ cat }) => {
  const [dbdata, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const allData = async () => {
    try {
      const response = await fetch('/api/userData');
      const data = await response.json();

      if (cat === "men") {
        setData(data.men);
      } else if (cat === "women") {
        setData(data.women);
      } else {
        setData(data.kid);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    allData();
  }, [cat]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {dbdata.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};
