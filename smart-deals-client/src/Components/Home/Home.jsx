import Hero from "../Page/Hero";
import LatestProducts from "../Page/LatestProducts";

const latestProductsPromise = fetch(
  "https://smart-deals-point.vercel.app/latest-products",
).then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <LatestProducts
        latestProductsPromise={latestProductsPromise}
      ></LatestProducts>
    </div>
  );
};

export default Home;
