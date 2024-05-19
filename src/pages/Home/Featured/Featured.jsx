import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import FeaturedImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        subHeading="check it out"
        heading="Feature Item"
      ></SectionTitle>
      <div className="md:flex justify-center bg-slate-500 bg-opacity-60 items-center pb-20 pt-12 px-36">
        <div>
          <img src={FeaturedImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where can i get same?</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur, quisquam in fuga, officia quae sequi autem aspernatur
            nostrum vero tempore harum fugit obcaecati perferendis laboriosam
            molestias dignissimos voluptas magni laborum.
          </p>
          <button className="btn btn-outline border-0 border-b-4 border-white mt-4 text-white">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
