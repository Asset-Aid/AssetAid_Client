import { useEffect } from "react";
// import axios from "axios";

const useFetchViewCount = (type: 'deposit' | 'saving' | 'card', id: number | null) => {
  useEffect(() => {
    if (id === null) return;

    const fetchViewCount = async () => {
      let url = "";

      switch (type) {
        case "deposit":
          url = `/view/deposit/${id}`;
          break;
        case "saving":
          url = `/view/saving/${id}`;
          break;
        case "card":
          url = `/view/card/${id}`;
          break;
        default:
          return;
      }

      console.log(`View count would be fetched for ${type} (ID: ${id}): ${url}`);
      // try {
      //   const response = await axios.get(url);
      //   console.log(`View count fetched for ${type} (ID: ${id}):`, response.data);
      // } catch (error) {
      //   console.error(`Failed to fetch view count for ${type} (ID: ${id}):`, error);
      // }
    };

    fetchViewCount();
  }, [type, id]);
};

export default useFetchViewCount;
