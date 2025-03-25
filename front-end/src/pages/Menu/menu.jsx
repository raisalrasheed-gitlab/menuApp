import Navbar from '../../components/Navbar/navbar';
const Menu = () => {
  return (
    <>
      <Navbar />
      <div className="h-[311px] bg-[url(./assets/Rectangle.png)]"></div>
      <div className="h-[79px] bg-[url(./assets/Rectangle1.png)] flex justify-center text-center items-center gap-8 oswald font-semibold text-lg">
        <div className="text-white bg-black w-[114px] h-[50px] flex justify-center items-center">
          Food
        </div>
        <div className="text-white bg-black w-[114px] h-[50px] flex justify-center items-center">
          Drink
        </div>
        <div className="text-white bg-black w-[114px] h-[50px] flex justify-center items-center">
          Brunch
        </div>
      </div>
    </>
  );
};
export default Menu;
