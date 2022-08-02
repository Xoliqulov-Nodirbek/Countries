const Header = ({ setInput }) => {
  return (
    <header>
      <div className="container flex items-center justify-between shadow-md py-[24px] px-[22px] bg-stone-200">
        <h1 className="font-[700] text-[24px] leading-8">
          Where in the world?
        </h1>
        <button className="border inline-flex items-center py-[10px] px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Dark Mode
        </button>
      </div>
      <div className="">
        <form
          className="inline-block mt-[70px] ml-[24px] shadow-md"
          method="Post"
          autoComplete="off"
        >
          <input
            onChange={(evt) => {
              setInput(evt.target.value.toLocaleLowerCase());
            }}
            className="input w-[480px] py-[15px] pl-[50px] pr-[20px] rounded-md"
            type="search"
            placeholder="Search for a country..."
            aria-label="Search for a country..."
          />
        </form>
        
      </div>
    </header>
  );
};

export default Header;
