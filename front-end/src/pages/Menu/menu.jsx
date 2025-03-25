import Navbar from '../../components/Navbar/navbar';
import { IoMdAddCircleOutline } from 'react-icons/io';
const Menu = () => {
  var a = ['luch', 'breakfast', 'suppur'];
  return (
    <>
      <Navbar />
      <div className="h-[311px] bg-[url(./assets/Rectangle.png)]"></div>
      <div className="h-[79px] bg-[url(./assets/Rectangle1.png)] flex justify-center text-center items-center gap-8 oswald font-semibold text-lg">
        {a.map(items => {
          return (
            <div className="text-white bg-black w-[114px] h-[50px] flex justify-center items-center border-2 border-blue-500 cursor-pointer">
              {items}
            </div>
          );
        })}
        <div className=" flex justify-center items-center rounded-full gap-2">
          <IoMdAddCircleOutline className="text-blue-600 text-5xl" />
        </div>
      </div>
      <div className="h-[672px] bg-[url(./assets/Rectangle2.png)] flex justify-center items-center oswald">
        <div className="md:h-[416px] w-[1140px] bg-black text-white flex flex-col gap-8 items-center">
          <div className="mt-14 text-[50px] font-semibold [text-shadow:3px_0px_0px_hsla(345,100%,50%,1)]">
            BRUNCH COCKTAIL
          </div>
          <div className="w-[90%] grid md:grid-cols-2 gap-8">
            <div>
              <h1 className="text-2xl tracking-[3%]">
                CINNAMON TOAST CRUNCH..........................$16
              </h1>
              <h3 className="kelly-slab text-lg">
                Skrewball peanut butter whiskey, vanilla extract, Amaretto,
                Baileys, egg white, cinnamon
              </h3>
            </div>
            <div>
              <h1 className="text-2xl tracking-[3%]">
                CINNAMON TOAST CRUNCH..........................$16
              </h1>
              <h3 className="kelly-slab text-lg">
                Skrewball peanut butter whiskey, vanilla extract, Amaretto,
                Baileys, egg white, cinnamon
              </h3>
            </div>
            <div>
              <h1 className="text-2xl tracking-[3%]">
                CINNAMON TOAST CRUNCH..........................$16
              </h1>
              <h3 className="kelly-slab text-lg">
                Skrewball peanut butter whiskey, vanilla extract, Amaretto,
                Baileys, egg white, cinnamon
              </h3>
            </div>
            <div>
              <h1 className="text-2xl tracking-[3%]">
                CINNAMON TOAST CRUNCH..........................$16
              </h1>
              <h3 className="kelly-slab text-lg">
                Skrewball peanut butter whiskey, vanilla extract, Amaretto,
                Baileys, egg white, cinnamon
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Menu;
