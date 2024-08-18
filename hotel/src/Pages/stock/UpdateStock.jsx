import React, { useState } from "react";
import AdminHeader from "../../Components/AdminHeaader/AdminHeader";
import configuredUrl from "../../../utils/request/request";

export default function UpdateStock() {
  const [formdata, setFormData] = useState({
    quantity: 0,
  });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.id]: e.target.value });
  };

  const [getcategoryvalu, setcategoryvalue] = useState("MOMOS");
  const handleselect = (e) => {
    setcategoryvalue(e.target.value);
  };
  const [setallfielderror, setsetallfielderror] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    setSuccess(false);
    if (getcategoryvalu === "" || selectoption === "") {
      setsetallfielderror("Please fill all the fields");
      return;
    }
    // Handle form submission logic here
    // url="http://localhost:8000/stock/addStock"
    const { data } = configuredUrl.post("/stock/addStock", {
      ...formdata,
    });

    if (data.success) {
      setSuccess(true);
      setError(false);
      setFormData({ quantity: 0 });
    } else {
      setSuccess(false);
      setError(true);
    }
  };
  const [selectoption, setselectOption] = useState("");

  const handleselectoptionsvalue = (e) => {
    setselectOption(e.target.value);
  };
  console.log(selectoption);
  return (
    <>
      <AdminHeader />

      <div className="min-h-screen bg-gray-100 text-gray-800 flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-semibold mb-6 text-orange-600">
            Update Stock Here
          </h1>
          <form className="flex flex-col" onSubmit={handlesubmit}>
            {/* <label className="mb-2 text-gray-700">Enter Stock Name</label>
            <input
              type="text"
              className="mb-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              id="name"
              value={formdata.name}
              onChange={handleChange}
            /> */}
            <label className="mb-2 text-gray-700">Select Stock Name</label>
            <select
              className="mb-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              onChange={handleselect}
            >
              <option value="MOMOS">MOMOS</option>
              <option value="ALUTIKKA">ALUTIKKA</option>
              <option value="FRIES">FRIES</option>
              <option value="FRUITS">FRUITS</option>
              <option value="MAGGI">MAGGI</option>
              <option value="MILK">MILK</option>
              <option value="CURD">CURD</option>
              <option value="CHEESE">CHEESE</option>
              <option value="SAUCE">SAUCE</option>
              <option value="WATERBOTTILE">WATER BOTTILE</option>
              <option value="SODA">SODA</option>
              <option value="CURSH">CURSH</option>
              <option value="DRY FRUITS">DRY FRUITS</option>
              <option value="OIL">OIL</option>
              <option value="PANEER">PANEER</option>
              <option value="AMULICECREAM">AMUL ICE CREAM</option>
              <option value="DAIRYRICHICECREAM">DAIRY RICH ICE CREAMS</option>
              <option value="OTHERS">OTHERS</option>
            </select>

            <label className="mb-2 text-gray-700">Select Stock Type</label>

            {getcategoryvalu === "MOMOS" ? (
              <select
                onChange={handleselectoptionsvalue}
                className="mb-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option>SELECT TYPE</option>
                <option value="VEGMOMOS">VEG MOMOS</option>
                <option value="SCHEZWANMOMOS">SCHEZWAN MOMOS</option>
                <option value="MUSHROOMMOMOS">MUSHROOM MOMOS</option>
                <option value="FRIES">PANEER MOMOS</option>
                <option value="CORNCHEESMOMOS">CORN CHEES MOMOS</option>
                <option value="MAGGI">PANNER MOMOS</option>
              </select>
            ) : (
              ""
            )}

            {getcategoryvalu === "SODA" ? (
              <select
                onChange={handleselectoptionsvalue}
                className="mb-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option>SELECT TYPE</option>
                <option value="SODA">SODA</option>
              </select>
            ) : (
              ""
            )}
            {getcategoryvalu === "CURD" ? (
              <select
                onChange={handleselectoptionsvalue}
                className="mb-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option>SELECT TYPE</option>
                <option value="CURD">CURD</option>
              </select>
            ) : (
              ""
            )}
            {getcategoryvalu === "MILK" ? (
              <select
                onChange={handleselectoptionsvalue}
                className="mb-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option>SELECT TYPE</option>
                <option value="MILK">MILK</option>
              </select>
            ) : (
              ""
            )}
            {getcategoryvalu === "CHEESE" ? (
              <select
                onChange={handleselectoptionsvalue}
                className="mb-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option>SELECT TYPE</option>
                <option value="CHEESE">CHEESE</option>
              </select>
            ) : (
              ""
            )}
            {getcategoryvalu === "PANEER" ? (
              <select
                onChange={handleselectoptionsvalue}
                className="mb-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option>SELECT TYPE</option>
                <option value="PANEER">PANEER</option>
              </select>
            ) : (
              ""
            )}
            {getcategoryvalu === "OIL" ? (
              <select
                onChange={handleselectoptionsvalue}
                className="mb-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option>SELECT TYPE</option>
                <option value="OIL">OIL</option>
              </select>
            ) : (
              ""
            )}
            {getcategoryvalu === "WATERBOTTILE" ? (
              <select
                onChange={handleselectoptionsvalue}
                className="mb-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option>SELECT TYPE</option>
                <option value="WATERBOTTILE">WATER BOTTILE</option>
              </select>
            ) : (
              ""
            )}
            {getcategoryvalu === "MAGGI" ? (
              <select
                onChange={handleselectoptionsvalue}
                className="mb-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option>SELECT TYPE</option>
                <option value="MAGGIE">MAGGI</option>
              </select>
            ) : (
              ""
            )}
            {getcategoryvalu === "ALUTIKKA" ? (
              <select
                onChange={handleselectoptionsvalue}
                className="mb-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option>SELECT TYPE</option>
                <option value="ALUTIKKA">ALUTIKKA</option>
              </select>
            ) : (
              ""
            )}
            {getcategoryvalu === "AMULICECREAM" ? (
              <select
                onChange={handleselectoptionsvalue}
                className="mb-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option>SELECT TYPE</option>
                <option value="CHOCOLATE">CHOCOLATE</option>
                <option value="BUTTERSCOTCH">BUTTER SCOTCH</option>
                <option value="VANILLA">VANILLA</option>
                <option value="BLACKCURRENT">BLACKCURRENT</option>
                <option value="ROASTED ALMOND">ROASTED ALMOND</option>
                <option value="PISTA">PISTA</option>
                <option value="STRAWBERRY">STRAWBERRY</option>
                <option value="MANGO">MANGO</option>
              </select>
            ) : (
              ""
            )}
            {getcategoryvalu === "DAIRYRICHICECREAM" ? (
              <select
                onChange={handleselectoptionsvalue}
                className="mb-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option>SELECT TYPE</option>
                <option value="BELGIANCHOCOLATE">BELGIAN CHOCOLATE</option>
                <option value="BUTTERSCOTCH">BUTTER SCOTCH</option>
                <option value="VANILLA">VANILLA</option>
                <option value="BLACKCURRENT">BLACKCURRENT</option>
                <option value="ROASTED ALMOND">ROASTED ALMOND</option>
                <option value="PISTA">PISTA</option>
                <option value="STRAWBERRY">STRAWBERRY</option>
                <option value="MANGO">MANGO</option>
              </select>
            ) : (
              ""
            )}
            {getcategoryvalu === "FRIES" ? (
              <select
                onChange={handleselectoptionsvalue}
                className="mb-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option>SELECT TYPE</option>
                <option value="ALOOFRIES">ALOO FRIES</option>
                <option value="NUGGETS">NUGGETS</option>
                <option value="SMILES">SMILES</option>
                <option value="CHEESEPIZZAFINGERS">CHEESE PIZZA FINGERS</option>
              </select>
            ) : (
              ""
            )}
            {getcategoryvalu === "FRUITS" ? (
              <select
                onChange={handleselectoptionsvalue}
                className="mb-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option>SELECT TYPE</option>
                <option value="APPLES">APPLES</option>
                <option value="ORANGE">ORANGE</option>
                <option value="MANGO">MANGO</option>
                <option value="BANANA">BANANA</option>
                <option value="PINEAPPLE">PINEAPPLE</option>
                <option value="PAPAYA">PAPAYA</option>
                <option value="POMEGRANATE">POMEGRANATE</option>
                <option value="GRAPES">GRAPES</option>
                <option value="MUSKMELON">MUSKMELON</option>
                <option value="MOOSAMBI">MOOSAMBI</option>
                <option value="ANJEER">ANJEER</option>
                <option value="CHICKO">CHICKO</option>
                <option value="KIWI">KIWI</option>
              </select>
            ) : (
              ""
            )}
            {getcategoryvalu === "CRUSH" ? (
              <select
                onChange={handleselectoptionsvalue}
                className="mb-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option>SELECT TYPE</option>
                <option value="MANGO">MANGO</option>
                <option value="BUTTERSCOTCH">BUTTERSCOTCH</option>
                <option value="KIWI">KIWI</option>
                <option value="ORANGE">ORANGE</option>
                <option value="POMEGRANATE">POMEGRANATE</option>
                <option value="PINEAPPLE">PINEAPPLE</option>
                <option value="PISTA">PISTA</option>
                <option value="BANANA">BANANA</option>
                <option value="HONEY">HONEY</option>
                <option value="BLUEBERRY">BLUEBERRY</option>
                <option value="BLUEBLAST">BLUEBLAST</option>
                <option value="HONEY">HONEY</option>
                <option value="CHOCOLATE">CHOCOLATE</option>
              </select>
            ) : (
              ""
            )}
            {getcategoryvalu === "SAUCE" ? (
              <select
                onChange={handleselectoptionsvalue}
                className="mb-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option>SELECT TYPE</option>
                <option value="CHIPOTTESTYLEDIP">CHIPOTTE STYLE DIP</option>
                <option value="THOUSANDISTALANDDRESSING">
                  THOUSAND ISTALAND DRESSING
                </option>
                <option value="PASTAANDPIZZASAUCE">
                  PASTA AND PIZZA SAUCE
                </option>
                <option value="SCHEWANSAUCE">SCHEWAN SAUCE</option>
                <option value="MAYONNAISE">MAYONNAISE</option>
              </select>
            ) : (
              ""
            )}
            {getcategoryvalu === "DRYFRUITS" ? (
              <select
                onChange={handleselectoptionsvalue}
                className="mb-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option>SELECT TYPE</option>
                <option value="KAJU">KAJU</option>
                <option value="BADAMI">BADAMI</option>
                <option value="DRYGRAPE">DRY GRAPE</option>
                <option value="DATES">DATES</option>
              </select>
            ) : (
              ""
            )}
            {getcategoryvalu === "OTHERS" ? (
              <select
                onChange={handleselectoptionsvalue}
                className="mb-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option>SELECT TYPE</option>
                <option value="WATER_BOTTLE">WATER BOTTLE</option>
                <option value="SODA">SODA</option>
                <option value="MILK">MILK</option>
                <option value="CURD">CURD</option>
                <option value="OIL">OIL</option>
                <option value="PANEER">PANEER</option>
                <option value="CHEESE">CHEESE</option>
                <option value="KITKAT_CHOCOLATES">KITKAT CHOCOLATES</option>
                <option value="SINKERS_CHOCOLATES">SINKERS CHOCOLATES</option>
                <option value="CHOCOCHIPS">CHOCOCHIPS</option>
                <option value="MAGGIE">MAGGIE</option>
                <option value="BURGERS">BURGERS</option>
                <option value="PERIPERI_POWDER">PERIPERI POWDER</option>
                <option value="LEMONS">LEMONS</option>
                <option value="COFFEE_POWDER">COFFEE POWDER</option>
                <option value="SUGAR">SUGAR</option>
                <option value="OREO_BISCUITS">OREO BISCUITS</option>
                <option value="GOODDAY_BISCUITS">GOODDAY BISCUITS</option>
                <option value="CORN">CORN</option>
                <option value="NUTELLA">NUTELLA</option>
                <option value="WINIKS_CAKES">WINIKS CAKES</option>
              </select>
            ) : (
              ""
            )}

            <label className="mb-2 text-gray-700">Enter Stock Quantity</label>
            <input
              type="number"
              className="mb-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              id="quantity"
              onChange={handleChange}
              value={formdata.quantity}
            />
            <button
              type="submit"
              className="bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300"
            >
              Submit
            </button>
          </form>
          {error && <p>Something went wrong please try again later.</p>}
          {success && (
            <p className="text-green-500">Data added successfully.</p>
          )}
          {setallfielderror !== "" && (
            <p className="text-red-500 text-center mt-4">
              ! {setallfielderror}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
