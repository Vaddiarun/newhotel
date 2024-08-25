import React, { useState } from "react";
import AdminHeader from "../../Components/AdminHeaader/AdminHeader";
import configuredUrl from "../../../utils/request/request";

const stockOptions = {
  MOMOS: [
    "VEGMOMOS",
    "SCHEZWANMOMOS",
    "MUSHROOMMOMOS",
    "PANEERMOMOS",
    "CORNCHEESEMOMOS",
  ],
  SODA: ["SODA"],
  CURD: ["CURD"],
  MILK: ["MILK"],
  CHEESE: ["CHEESE"],
  PANEER: ["PANEER"],
  OIL: ["OIL"],
  WATERBOTTLE: ["WATER BOTTLE"],
  MAGGI: ["MAGGI"],
  ALUTIKKA: ["ALUTIKKA"],
  AMULICECREAM: ["CHOCOLATE", "BUTTERSCOTCH", "VANILLA", "BLACKCURRENT"],
  DAIRYRICHICECREAM: ["BELGIAN CHOCOLATE", "BUTTER SCOTCH", "VANILLA"],
  FRIES: ["ALOOFRIES", "NUGGETS", "SMILES", "CHEESEPIZZAFINGERS"],
  FRUITS: ["APPLE", "ORANGE", "MANGO", "BANANA"],
  CRUSH: ["MANGO", "KIWI", "ORANGE", "POMEGRANATE"],
  SAUCE: ["CHIPOTTESTYLEDIP", "PASTAANDPIZZASAUCE", "MAYONNAISE"],
  DRYFRUITS: ["KAJU", "BADAMI", "DATES"],
  OTHERS: ["WATER BOTTLE", "MILK", "OIL", "CURD"],
};

export default function UpdateStock() {
  const [formdata, setFormData] = useState({ quantity: 0 });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [selectoption, setselectOption] = useState("");
  const [getcategoryvalu, setcategoryvalue] = useState("MOMOS");
  const [setallfielderror, setsetallfielderror] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formdata, [e.target.id]: e.target.value });
  };

  const handleselect = (e) => {
    setcategoryvalue(e.target.value);
    setselectOption(""); // Reset type on category change
  };

  const handleselectoptionsvalue = (e) => {
    setselectOption(e.target.value);
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);

    if (
      getcategoryvalu === "" ||
      selectoption === "" ||
      formdata.quantity === 0
    ) {
      setsetallfielderror("Please fill all the fields");
      return;
    }

    try {
      const { data } = await configuredUrl.post("/stock/addStock", {
        ...formdata,
        category: getcategoryvalu,
        name: selectoption,
      });

      if (data.success) {
        setSuccess(true);
        setError(false);
        setFormData({ quantity: 0 });
      } else {
        setSuccess(false);
        setError(true);
      }
    } catch (err) {
      setError(true);
    }
  };

  return (
    <>
      <AdminHeader />
      <div className="min-h-screen bg-gray-100 text-gray-800 flex justify-center items-center">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-semibold mb-6 text-orange-600">
            Update Stock Here
          </h1>
          <form className="flex flex-col" onSubmit={handlesubmit}>
            <label className="mb-2 text-gray-700">Select Stock Category</label>
            <select
              className="mb-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={getcategoryvalu}
              onChange={handleselect}
            >
              {Object.keys(stockOptions).map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            <label className="mb-2 text-gray-700">Select Stock Type</label>
            <select
              className="mb-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={selectoption}
              onChange={handleselectoptionsvalue}
            >
              <option value="">SELECT TYPE</option>
              {stockOptions[getcategoryvalu].map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>

            <label className="mb-2 text-gray-700">Enter Stock Quantity</label>
            <input
              type="number"
              className="mb-4 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              id="quantity"
              onChange={handleChange}
              value={formdata.quantity}
              min="0"
            />

            <button
              type="submit"
              className="bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300"
            >
              Submit
            </button>
          </form>

          {error && <p>Something went wrong. Please try again later.</p>}
          {success && (
            <p className="text-green-500">Data added successfully.</p>
          )}
          {setallfielderror && (
            <p className="text-red-500 mt-4">{setallfielderror}</p>
          )}
        </div>
      </div>
    </>
  );
}
