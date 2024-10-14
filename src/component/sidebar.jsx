function Sidebar() {
    return (
        <div className="p-3 w-[22.5%] font-poppins">
            <div className="border-2 h-[31rem] rounded-lg">
                <div className="bg-[#161D6F] rounded-t-lg p-3 text-white">
                    <p>Pembayaran</p>
                </div>
                <div className="p-3 font-poppins flex flex-col gap-3">
                    {/* hasil */}
                    1x2000
                </div>
                <div className="p-3 font-poppins flex justify-end items-end h-[25rem]">
                    <hr />
                    <button className="p-2 px-6 bg-[#161D6F] text-white rounded-[0.3rem] font-poppins text-[0.8rem] hover:scale-110 transition duration-300">
                        Bayar
                    </button>
                </div>
            </div> 
        </div>
    )
}

export default Sidebar;3