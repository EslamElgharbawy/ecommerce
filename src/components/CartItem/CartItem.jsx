import { useContext } from "react"
import { CartContext } from "../Context/Cart.context"
import { Link } from "react-router-dom"

export default function CartItem({ productInfo }) {
    const { count, price, product } = productInfo
    const { id, category, imageCover, title } = product
    let { RemoveProduct, ProductCount } = useContext(CartContext)
    return <>
        <div className="flex gap-2">
            <div className="bg-gray-100 flex items-center justify-between gap-28 px-10 py-5 rounded-lg grow sm:max-lg:flex-col sm:max-lg:gap-10 lg:max-2xl:gap-20">

                <img src={imageCover} className="w-24 h-24 object-cover rounded-full border-4 border-white sm:max-lg:w-36 sm:max-lg:h-36" />

                <Link to={`/product/${id}`} className="font-semibold text-lg">{title}</Link >
                <h3 className="ms-auto text-lg sm:max-lg:ms-0">{category.name}</h3>
                <div className="price text-xl">
                    <h3 className="font-cairo font-semibold">{price} L.E</h3>
                </div>
                <div className="counter flex justify-center items-center text-xl">
                    <div className=" flex sm:flex-row  gap-5 justify-center items-center">
                        <i
                            onClick={() => {
                                ProductCount({ productId: id, count: count + 1 })
                            }}
                            className="fa-solid cursor-pointer fa-circle-plus"></i>
                        <span className="font-semibold">{count}</span>
                        <i
                            onClick={() => {
                                ProductCount({ productId: id, count: count - 1 })
                            }}
                            className="fa-solid cursor-pointer fa-circle-minus"></i>
                    </div>
                </div>
            </div>

            <button
                onClick={() => {
                    RemoveProduct({ productId: id })
                }}
                className="bg-gray-100 hover:bg-gray-200 transition-all duration-200 p-3 rounded-lg">
                <i className="fa-solid fa-xmark"></i>
            </button>
        </div >

    </>
}
