
const Card = (props) => {
    let options = props.options;
    let priceOptions = Object.keys(options);


    return (
        <div
            class=" block w-[16rem] my-4  bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div
                class="relative overflow-hidden bg-cover bg-no-repeat"
                data-te-ripple-init
                data-te-ripple-color="light">
                <img
                    class=""
                    src={props.imgSrc}
                    alt="" />
                <a href="#!">
                    <div
                        class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                </a>
            </div>
            <div className='flex items-center flex-col justify-center px-5'>
                <h1>{props.foodName}</h1>
                {/* <p>this is some importent text.</p> */}
                <div className='w-full'>
                    <select className='m-2 h-full bg-green-500 rounded'>
                        {
                            Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })
                        }
                    </select>

                    <select className='m-2 h-full bg-green-400 rounded'>
                        {priceOptions.map((data) => {
                            return <option key={data} value={data}>{data}</option>
                        })}
                    </select>
                    <div className='inline h-full text-sm'>
                        Total Price
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
