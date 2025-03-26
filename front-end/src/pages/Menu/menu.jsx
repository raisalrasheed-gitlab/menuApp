import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/footer';
import { IoMdAddCircleOutline } from 'react-icons/io';
import axios from '../../utils/axios';
import { useState, useEffect } from 'react';

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [details, setDetails] = useState();
  const [sid, setSId] = useState();
  const [hide, setHide] = useState(false);
  const [seek, setSeek] = useState(false);
  const [addI, setAddI] = useState({ name: '', description: '', price: '' });
  const [addM, setAddM] = useState({ name: '', description: '' });
  useEffect(() => {
    getMenu();
  }, []);
  const getMenu = async () => {
    const dbResponse = await axios.get('/menu');
    setMenu(dbResponse.data);
  };
  const detail = async id => {
    const dbResponse = await axios.get(`/menu/${id}`);
    setDetails(dbResponse.data);
    setSId(id);
  };
  const onAdd = async () => {
    const dbResponse = await axios.post(`/menu/${sid}/item`, addI);
    setHide(!hide);
    detail(sid);
  };
  const onAddM = async () => {
    const dbResponse = await axios.post('/menu/', addM);
    console.log(dbResponse);
    getMenu();
    setSeek(!seek);
  };
  return (
    <>
      <Navbar />
      <div className="h-[231px] md:h-[311px] bg-[url(./assets/Rectangle.png)] oswald flex flex-col justify-center items-center">
        <div className="text-white text-[50px] md:text-[75px] font-semibold [text-shadow:3px_0px_0px_hsla(345,100%,50%,1)]">
          MENU
        </div>
        <h2 className="text-white md:w-[400px] kelly-slab md:ext-lg text-center ">
          Please take a look at our menu featuring food, drinks, and brunch. If
          you'd like to place an order, use the "Order Online" button located
          below the menu.
        </h2>
      </div>
      <div className="md:h-[79px] bg-[url(./assets/Rectangle1.png)] md:flex justify-items-center grid grid-cols-3 justify-center text-center items-center gap-2 md:gap-8 oswald font-semibold text-sm md:text-lg relative p-5">
        {menu.map(items => {
          return (
            <div
              className="text-white bg-black w-[72px] md:w-[114px] h-[50px] flex justify-center items-center border-2 border-blue-500 cursor-pointer p-2"
              onClick={() => {
                detail(items._id);
              }}
            >
              {items.name}
            </div>
          );
        })}
        <div className=" flex justify-center items-center rounded-full gap-2">
          <IoMdAddCircleOutline
            className="text-blue-600 text-3xl md:text-5xl"
            onClick={() => {
              setSeek(!seek);
            }}
          />
        </div>
        {seek ? (
          <div className="bg-white w-[250px] z-1 md:w-[500px] flex flex-col absolute gap-4 text-left p-2">
            <h2 className="text-center font-semibold text-2xl underline">
              Add items
            </h2>
            Name:
            <input
              type="text"
              className="bg-blue-500 h-8"
              onChange={e => {
                setAddM({ ...addM, name: e.target.value });
              }}
            ></input>
            Description:
            <input
              type="text"
              className="bg-blue-500 h-8"
              onChange={e => {
                setAddM({ ...addM, description: e.target.value });
              }}
            ></input>
            <div className="flex gap-2">
              <button
                className="bg-red-700 p-2"
                onClick={() => {
                  setSeek(!seek);
                }}
              >
                Cancel
              </button>
              <button className="bg-green-700 p-2" onClick={onAddM}>
                Submit
              </button>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className="h-[535px] md:h-[672px] bg-[url(./assets/Rectangle2.png)] flex justify-center items-center oswald">
        <div className="md:min-h-[416px] w-[1140px] border-2 bg-black text-white flex flex-col gap-8 items-center relative p-2 pb-4">
          {details ? (
            <div
              className="absolute md:right-10 md:top-10 right-5 top-5"
              onClick={() => {
                setHide(!hide);
              }}
            >
              <IoMdAddCircleOutline className="text-3xl md:text-5xl" />
            </div>
          ) : (
            ''
          )}
          {hide ? (
            <div className="bg-white z-1 text-black w-[300px] md:w-[600px] flex flex-col gap-2 p-10 absolute top-10 ">
              <h2 className="text-center font-semibold text-2xl underline">
                Add items
              </h2>
              Name:
              <input
                type="text"
                className="bg-blue-500 h-10"
                onChange={e => {
                  setAddI({ ...addI, name: e.target.value });
                }}
              ></input>
              Price:
              <input
                type="text"
                className="bg-blue-500 h-10"
                onChange={e => {
                  setAddI({ ...addI, price: e.target.value });
                }}
              ></input>
              Description:
              <input
                type="text"
                className="bg-blue-500 h-10"
                onChange={e => {
                  setAddI({ ...addI, description: e.target.value });
                }}
              ></input>
              <div className="flex gap-2">
                <button
                  className="bg-red-700 p-2"
                  onClick={() => {
                    setHide(!hide);
                  }}
                >
                  Cancel
                </button>
                <button className="bg-green-700 p-2" onClick={onAdd}>
                  Submit
                </button>
              </div>
            </div>
          ) : (
            ''
          )}
          <div className="mt-7 md:mt-14 text-[30px] md:text-[50px] font-semibold [text-shadow:3px_0px_0px_hsla(345,100%,50%,1)]">
            {details?.description}
          </div>
          <div className="w-[90%] grid md:grid-cols-2 gap-8 justify-center">
            {details?.items?.map(item => {
              return (
                <div>
                  <h1 className="text-lg md:text-2xl tracking-[3%] ">
                    {item.name}..........................Rs: {item.price}
                  </h1>
                  <h3 className="kelly-slab text-sm md:text-lg">
                    {item.description}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Menu;
