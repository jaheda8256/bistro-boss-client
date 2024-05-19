const Card = ({ card }) => {
  const { name, image_url, ingredients } = card;
  return (
    <div>
      <div className="max-w-lg text-center p-4 shadow-md dark:bg-gray-50 dark:text-gray-800">
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={image_url}
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl font-semibold dark:text-violet-600">
                {name}
              </h3>
            </a>
            <p className="leading-snug dark:text-gray-600">{ingredients}</p>
          </div>
          <button className="btn btn-outline flex items-center justify-center w-full border-0 border-b-4 border-black mt-4 text-black">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
