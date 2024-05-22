
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import FoodCards from "../../Shared/FoodCards/FoodCards";

const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const OrderTab = ({ items }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };

  // Split items into chunks of 6
  const chunks = chunkArray(items, 6);
  console.log(chunks);

  return (
    <div className="">
      <Swiper
       pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        {chunks.map((chunk, chunkIndex) => (
          <SwiperSlide key={chunkIndex}>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
              {chunk.map((item) => (
                <FoodCards key={item._id} item={item}></FoodCards>
              ))}
            </div>
          </SwiperSlide>
        ))}

        {/* <SwiperSlide>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {items.map((item) => (
              <FoodCard key={item._id} item={item}></FoodCard>
            ))}
             </div>
          </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default OrderTab;