const Car = ()=>{
    return(
        <div className='bg-white cursor-pointer w-56 h-60'>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute'>Electronics</span>
                <img src='' alt="Headphones" />
                <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full'>+</div>
                <span>Headphones</span>
                <span>$3000</span>
            </figure>
        </div>
    )

}
export default Card