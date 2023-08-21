import React, { createContext, useState, useEffect } from "react";

import model1 from "src/assets/images/shop/Rectangle 61.png";
import model2 from "src/assets/images/shop/Rectangle 58.png";
import model3 from "src/assets/images/shop/Rectangle 65.png";
import model4 from "src/assets/images/shop/Rectangle 27.png";
import model4Thumbnail1 from "src/assets/images/shop/Rectangle 27 (1).png";
import model4Thumbnail2 from "src/assets/images/shop/Rectangle 27 (2).png";
import model5 from "src/assets/images/shop/Rectangle 63.png";
import model6 from "src/assets/images/shop/Rectangle 66.png";
import model7 from "src/assets/images/shop/Rectangle 62.png";
import model8 from "src/assets/images/shop/Rectangle 60.png";

import homeModel1 from "src/assets/images/home/Rectangle 26.png";
import homeModel2 from "src/assets/images/home/Rectangle 37.png";
import homeModel3 from "src/assets/images/home/Rectangle 38.png";
import homeModel4 from "src/assets/images/home/Rectangle 39.png";


export const DataContext = createContext();
export default function DataProvider(props) {
  const [products, setProducts] = useState([
    {
      _id: "01",
      title: "Fur Tote Dress",
      alt: "A splash model in a stunning outfit",
      images: [model1, model4Thumbnail1, model4Thumbnail2],

      description:
        "A line dress with dropped shoulder line. V_shaped neckline emphasizes the beauty of the necks.",
      colors: ["#432525", "#24212D", "Black", "yellowgreen"],
      sizes: ["XS", "S", "M", "L", "XL"],
      price: 30000,
      count: 1,
    },
    {
      _id: "02",
      title: "Fur Tote Dress",
      alt: "A splash model in a stunning outfit",
      images: [model2, model4Thumbnail1, model4Thumbnail2],

      description:
        "A line dress with dropped shoulder line. V_shaped neckline emphasizes the beauty of the necks.",
      colors: ["#6B76ED", "#f3f3f3", "Black", "brown"],
      sizes: ["XS", "S", "M", "L", "XL"],
      price: 40000,
      count: 1,
    },
    {
      _id: "03",
      title: "Tees Ball Gown",
      alt: "A splash model in a stunning outfit",
      images: [model3, model4Thumbnail1, model4Thumbnail2],

      description:
        "A line dress with dropped shoulder line. V_shaped neckline emphasizes the beauty of the necks.",
      colors: ["#830106", "#FDDFA0", "#f3f3f3", "#030200"],
      sizes: ["XS", "S", "M", "L", "XL"],
      price: 10000,
      count: 1,
    },
    {
      _id: "04",
      title: "Lina Tee short Dress",
      alt: "A splash model in a stunning outfit",
      images: [model4, model4Thumbnail1, model4Thumbnail2],

      description:
        "A line dress with dropped shoulder line. V_shaped neckline emphasizes the beauty of the necks.",
      colors: ["#C2825D", "#6784fd", "Black"],
      sizes: ["XS", "S", "M", "L", "XL"],
      price: 17000,
      count: 1,
    },
    {
      _id: "05",
      title: "Tees Ball Gown",
      alt: "A splash model in a stunning outfit",
      images: [model5, model4Thumbnail1, model4Thumbnail2],

      description:
        "A line dress with dropped shoulder line. V_shaped neckline emphasizes the beauty of the necks.",
      colors: ["#C8AA9C", "#AB1407", "Black"],
      sizes: ["XS", "S", "M", "L", "XL"],
      price: 20000,
      count: 1,
    },
    {
      _id: "06",
      title: "Tees Ball Gown",
      alt: "A splash model in a stunning outfit",
      images: [model6, model4Thumbnail1, model4Thumbnail2],

      description:
        "A line dress with dropped shoulder line. V_shaped neckline emphasizes the beauty of the necks.",
      colors: ["#55778B", "#f6f6f6", "Black"],
      sizes: ["XS", "S", "M", "L", "XL"],
      price: 12000,
      count: 1,
    },
    {
      _id: "07",
      title: "Strapless Dress",
      alt: "A splash model in a stunning outfit",
      images: [model7, model4Thumbnail1, model4Thumbnail2],

      description:
        "A line dress with dropped shoulder line. V_shaped neckline emphasizes the beauty of the necks.",
      colors: ["#A4D9E0", "#8E6B04", "Black"],
      sizes: ["XS", "S", "M", "L", "XL"],
      price: 7000,
      count: 1,
    },
    {
      _id: "08",
      title: "Dim Floral Dress",
      alt: "A splash model in a stunning outfit",
      images: [model8, model4Thumbnail1, model4Thumbnail2],

      description:
        "A line dress with dropped shoulder line. V_shaped neckline emphasizes the beauty of the necks.",
      colors: ["#EFE7E0", "#676A71", "#B99781", "Black"],
      sizes: ["XS", "S", "M", "L", "XL"],
      price: 19000,
      count: 1,
    },
  ]);

  // HOMEPAGE PRODUCT
  const [homeProducts, setHomeProducts] = useState([
    {
      _id: "09",
      title: "Clauras Montani Playsuit",
      alt: "A splash model in a stunning outfit",
      images: [homeModel1, model4Thumbnail1, model4Thumbnail2],

      description:
        "A line dress with dropped shoulder line. V_shaped neckline emphasizes the beauty of the necks.",
      colors: ["#7D9198", "#590806", "Black", "#84573E"],
      sizes: ["XS", "S", "M", "L", "XL"],
      price: 50000,
      count: 1,
    },
    {
      _id: "10",
      title: "Clauras Montani Jumpsuit",
      alt: "A splash model in a stunning outfit",
      images: [homeModel2, model4Thumbnail1, model4Thumbnail2],

      description:
        "A line dress with dropped shoulder line. V_shaped neckline emphasizes the beauty of the necks.",
      colors: ["#050507", "#79868E", "#A2A094"],
      sizes: ["XS", "S", "M", "L", "XL"],
      price: 52000,
      count: 1,
    },
    {
      _id: "11",
      title: "Short Casual MIni Gown",
      alt: "A splash model in a stunning outfit",
      images: [homeModel3, model4Thumbnail1, model4Thumbnail2],

      description:
        "A line dress with dropped shoulder line. V_shaped neckline emphasizes the beauty of the necks.",
      colors: ["#CBCBCBC", "#EBC1AB", "BLACK", "#030200"],
      sizes: ["XS", "S", "M", "L", "XL"],
      price: 12000,
      count: 1,
    },
    {
      _id: "12",
      title: "Kims corperate wear",
      alt: "A splash model in a stunning outfit",
      images: [homeModel4, model4Thumbnail1, model4Thumbnail2],

      description:
        "A line dress with dropped shoulder line. V_shaped neckline emphasizes the beauty of the necks.",
      colors: ["#5E7876", "Yellow", "Black"],
      sizes: ["XS", "S", "M", "L", "XL"],
      price: 75000,
      count: 1,
    },
  ]);


  // ADD TO CART FOR SHOP PAGE
  const addCart = (id) => {
    const check = cart.every((item) => {
      return item._id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product._id === id;
      });
      setCart([...cart, ...data]);
    } else {
      alert("The product has been added to cart.");
    }
  };

  // ADD TO CART FOR HOME PAGE
  const addHomeCart = (id) => {
    const check = cart.every((item) => {
      return item._id !== id;
    });
    if (check) {
      const data = homeProducts.filter((homeProduct) => {
        return homeProduct._id === id;
      });
      setCart([...cart, ...data]);
    } else {
      alert("The product has been added to cart.");
    }
  };

  // LOCAL STORAGE PERSIST
  const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
  const [cart, setCart] = useState(cartFromLocalStorage);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const value = {
    products: [products, setProducts],
    homeProducts: [homeProducts, setHomeProducts],
    cart: [cart, setCart],
    addCart: addCart,
    addHomeCart: addHomeCart,
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
}
