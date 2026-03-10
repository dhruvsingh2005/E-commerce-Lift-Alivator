import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [products, setProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(true);
  const [productsError, setProductsError] = useState(null);
  const [projects, setProjects] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const currency = "₹";
  const delivery_fee = 5000;

  const getProductsData = async () => {
    setProductsLoading(true);
    setProductsError(null);
    try {
      const response = await axios.get(backendUrl + "/api/product/list");
      if (response.data.success) {
        setProducts(response.data.products || []);
      } else {
        setProductsError(response.data.message || "Failed to load products");
        setProducts([]);
      }
    } catch (error) {
      console.log(error);
      setProductsError(error.response?.data?.message || error.message || "Could not connect to server. Is the backend running?");
      setProducts([]);
      toast.error("Could not load products. Check backend and VITE_BACKEND_URL.");
    } finally {
      setProductsLoading(false);
    }
  };

  const getProjectsData = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/project/list");
      if (response.data.success) {
        setProjects(response.data.projects);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
       console.log(error);
    }
  };

  const addToCart = async (itemId) => {
    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }
    
    setCartItems(cartData);
    toast.success("Added to Consultation List");

    if (token) {
        try {
            await axios.post(backendUrl + '/api/cart/add', { itemId }, { headers: { token } })
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      try {
        if (cartItems[items] > 0) {
          totalCount += cartItems[items];
        }
      } catch (error) {}
    }
    return totalCount;
  };

  const updateQuantity = async (itemId, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId] = quantity;
    setCartItems(cartData);

    if (token) {
        try {
            await axios.post(backendUrl + '/api/cart/update', { itemId, quantity }, { headers: { token } })
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }
  };

  const getUserCart = async (token) => {
    try {
        const response = await axios.post(backendUrl + '/api/cart/get', {}, { headers: { token } })
        if (response.data.success) {
            setCartItems(response.data.cartData)
        }
    } catch (error) {
        console.log(error);
        toast.error(error.message)
    }
  }

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      if (!itemInfo) continue;
      try {
        if (cartItems[items] > 0) {
          totalAmount += itemInfo.price * cartItems[items];
        }
      } catch (error) {}
    }
    return totalAmount;
  };

  useEffect(() => {
    getProductsData();
    getProjectsData();
  }, []);

  useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      getUserCart(localStorage.getItem("token"));
    }
  }, []);

  const value = {
    products,
    productsLoading,
    productsError,
    getProductsData,
    projects,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    setCartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    backendUrl,
    token,
    setToken,
    navigate,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
