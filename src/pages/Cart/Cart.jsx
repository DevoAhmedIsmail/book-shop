import React, { useState, useEffect } from "react";
import { updateCart } from "../../State/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import HeaderContent from "../../components/HeaderContent/HeaderContent";
const Cart = () => {
  const [coupon, setCoupon] = useState(0);
  const [textCoupon, setTextCoupon] = useState("");
  const [couponStatus, setCouponStatus] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  const { cart } = useSelector((state) => state.cart);
  const { coupons } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const couponHandler = (e) => {
    e.preventDefault();
    const COUPON = coupons.find((item) => item.text === textCoupon);
    if (COUPON) {
      setCoupon(COUPON.value);
      setTextCoupon("");
      setCouponStatus("yes");
    } else {
      setTextCoupon("");
      setCouponStatus("no");
    }
  };

  const quantityChangeHandler = (operation, id) => {
    if (operation === "dec") {
      let newCart = [];
      cart.map((item) => {
        if (item.id === id) {
          if (item.quantity !== 1) {
            newCart.push({ ...item, quantity: item.quantity - 1 });
          }
        } else {
          newCart.push(item);
        }
      });
      dispatch(updateCart(newCart));
    } else {
      let newCart = [];
      cart.map((item) => {
        if (item.id === id) {
          newCart.push({ ...item, quantity: item.quantity + 1 });
        } else {
          newCart.push(item);
        }
      });
      dispatch(updateCart(newCart));
    }
  };

  const deleteItemHandler = (id) => {
    let newCart = cart.filter((item) => item.id !== id);
    dispatch(updateCart(newCart));
  };

  const calcTotalPrice = () => {
    let TPrice = 0;
    cart.map((item) => (TPrice += item.price * item.quantity));
    setTotalPrice(TPrice);
  };

  useEffect(() => {
    calcTotalPrice();
  }, [cart]);

  return (
    <main>
      <HeaderContent text={'Shopping Cart'} />
      {/* container */}
      <div className="container mx-auto">
        {Object.keys(cart).length ? (
          <>
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full">
                      <thead className="border-b">
                        <tr>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-16 py-4 text-left uppercase"
                          >
                            Items
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-16 py-4 text-left uppercase"
                          >
                            Quantity
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-16 py-4 text-left uppercase"
                          >
                            Price
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-16 py-4 text-left uppercase"
                          >
                            total
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map((item) => (
                          <tr key={item.id} className="border-b">
                            <td className="text-sm text-gray-700  px-16 py-4 whitespace-nowrap">
                              <div className="flex flex-row items-center">
                                <div className="h-24 w-16">
                                  <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-contain"
                                  />
                                </div>
                                <div className="flex flex-col ml-5">
                                  <p className="text-lg font-semibold">
                                    {item.title}
                                  </p>
                                  <p>Author: {item.author}</p>
                                </div>
                              </div>
                            </td>
                            <td className=" text-gray-700  px-16 py-4 whitespace-nowrap text-lg">
                              <IoIosArrowDown
                                className="inline-block cursor-pointer text-gray-400 hover:text-gray-700"
                                onClick={() =>
                                  quantityChangeHandler("dec", item.id)
                                }
                              />
                              <p className="inline-block mx-4">
                                {item.quantity}
                              </p>
                              <IoIosArrowUp
                                className="inline-block cursor-pointer text-gray-400 hover:text-gray-700"
                                onClick={() =>
                                  quantityChangeHandler("inc", item.id)
                                }
                              />
                            </td>
                            <td className="text-sm text-gray-700 px-16 py-4 whitespace-nowrap font-semibold">
                              USD ${item.price}
                            </td>
                            <td className="text-sm text-gray-700  px-16 py-4 whitespace-nowrap font-semibold">
                              <p>
                                USD ${(item.price * item.quantity).toFixed(2)}
                              </p>
                            </td>
                            <td>
                              <GrClose
                                className="cursor-pointer"
                                onClick={() => deleteItemHandler(item.id)}
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center py-10">
              <div className="">
                <p className="text-gray-800 font-semibold">
                  Have a Coupon Code ?
                </p>
                <form
                  onSubmit={couponHandler}
                  className="flex flex-col md:flex-row gap-5 mt-5"
                >
                  <input
                    type="text"
                    className="rounded-lg px-2 py-3 w-56 border-2 border-gray-300"
                    placeholder="Enter Code Here!"
                    value={textCoupon}
                    onChange={(e) => setTextCoupon(e.target.value)}
                  />
                  <button
                    className="border-2 border-gray-400 rounded-full px-8 py-3 uppercase font-semibold text-gray-500 hover:text-gray-800"
                    type="submit"
                  >
                    Apply coupon
                  </button>
                </form>
                {couponStatus ? (
                  <p
                    className={`text-sm font-semibold mt-2 ${
                      couponStatus === "yes" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {couponStatus === "yes"
                      ? "The coupon has been added"
                      : "Try another coupon"}
                  </p>
                ) : (
                  ""
                )}
              </div>

              <div className="mt-8 md:mt-0">
                <div className="gap-16 px-12 mb-5">
                  <div className="flex justify-between">
                    <p className="text-gray-400 font-semibold">Subtotal</p>
                    <p className="text-gray-400 font-semibold">
                      USD ${totalPrice.toFixed(2)}
                    </p>
                  </div>
                  {coupon ? (
                    <div className="flex justify-between">
                      <p className="text-red-400 font-semibold">Coupon</p>
                      <p className="text-red-400 font-semibold">
                        USD ${(totalPrice * (coupon / 100)).toFixed(2)} -
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <hr />
                <div className="flex justify-between gap-16 px-12 mt-5">
                  <p className="text-gray-700 font-semibold text-lg">Total</p>
                  <p className="text-gray-700 font-semibold text-lg">
                    USD ${(totalPrice - totalPrice * (coupon / 100)).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-end items-center pt-5 pb-10 gap-5">
              <Link
                to="/books"
                className="py-3 px-8 font-semibold rounded-full border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white transition duration-300 uppercase"
              >
                Continue Shopping
              </Link>
              <Link
                to="checkout"
                className="py-3 px-8 font-semibold rounded-full bg-cyan-500 text-white border-2 border-cyan-500 hover:text-cyan-500 hover:bg-white transition duration-300 uppercase shadow-lg shadow-cyan-500"
              >
                process checkout
              </Link>
            </div>
          </>
        ) : (
          <div className="py-16 text-center">
            <p className="text-3xl font-bold text-gray-700">There is no item in cart</p>
            <p className="text-gray-600 mb-5">Try to Pruchase some</p>
            <Link to='/books' className="py-3 px-8 bg-cyan-500 text-white rounded-full">Back to Books</Link>
          </div>
        )}
      </div>
      {/* ./Container */}
    </main>
  );
};

export default Cart;
