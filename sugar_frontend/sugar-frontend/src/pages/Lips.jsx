import { useState } from "react";
import sugarPlayBig_image from "../assets/images/sugarPlay/sugarPlayBig_image.avif";
import Page from "../components/Page";
import axios from "axios";

const Lips = () => {
  const [cat, setCat] = useState("Lips");

  async function fetchData(cat) {
    try {
      const res = await axios({
        method: "get",
        url: `https://sugar-cosmetics-clone.onrender.com/product/item?limit=12&category=${cat}`,
      });
      return res.data.item;
    } catch (error) {
      console.log(`Error occurred ${error}`);
    }
  }

  return (
    <section>
      <Page
        bgImage={sugarPlayBig_image}
        pageName={"Lips Products"}
        fetchData={fetchData}
        cat={cat}
        setCat={setCat}
      />
    </section>
  );
};

export { Lips };
