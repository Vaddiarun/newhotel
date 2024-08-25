import React, { useEffect, useState } from "react";
import AdminHeader from "../../Components/AdminHeaader/AdminHeader";
import configuredUrl from "../../../utils/request/request";

export default function StockPage() {
  const [stock, setStock] = useState([]);
  const [filteredStock, setFilteredStock] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchStock = async () => {
      try {
        const { data } = await configuredUrl.get("/stock/getStock");
        if (data.success) {
          setStock(data.Stock);
          setCategories([...new Set(data.Stock.map((item) => item.category))]);
          setFilteredStock(data.Stock);
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchStock();
  }, []);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredStock(stock);
    } else {
      setFilteredStock(
        stock.filter((item) => item.category === selectedCategory)
      );
    }
  }, [selectedCategory, stock]);

  return (
    <div className="bg-gradient-to-r from-[#e9e4f0] to-[ #decce3] min-h-screen">
      <AdminHeader />
      <div className="p-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Stock Details</h1>
        <div className="mb-4 text-center">
          <label
            htmlFor="category"
            className="text-lg font-semibold text-gray-700"
          >
            Filter by Category:
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="ml-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="All">All</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStock.map((each) => (
            <div
              key={each._id}
              className="bg-white p-4 rounded-xl shadow-lg transition-transform transform hover:scale-105"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {each.name}
              </h2>
              <p className="text-gray-600">Quantity: {each.quantity}</p>
              <p className="text-gray-500 text-sm">
                Added on: {new Date(each.createdAt).toLocaleDateString()}
              </p>
              <p className="text-gray-600">Category: {each.category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
