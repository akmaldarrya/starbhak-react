import Button from "../atoms/button"
import Brownies from "../assets/brownies.jpg"

function Product() {
    return (
        <div className="p-3 w-[13rem] border-2 rounded-lg flex flex-col gap-3">
            <div>
                <img src={Brownies} alt="foto" className="object-none rounded-md"/>
            </div>
            <div>
                <div className="font-semibold">
                    Brownies Tiramisu
                </div>
                <div className="text-[0.9rem] text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit..
                </div>
            </div>
            <div className=" flex justify-end">
                <Button />
            </div>
        </div>
    )
}

export default Product;