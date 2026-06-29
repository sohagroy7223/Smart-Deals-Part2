import Hero from "../Page/Hero";
import LatestProducts from "../Page/LatestProducts";

const latestProductsPromise = fetch(
  "https://smart-deals-point-11r9jx0nu-sohagroy7223-3827s-projects.vercel.app/latest-products",
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
