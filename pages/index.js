import Image from 'next/image'
import { Inter } from 'next/font/google'
import Card from '@/Components/Card'
import Carousal from '@/Components/Carousal'
import { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [foodCat, setFoodCat] = useState([]);
  const [fooditem, setFooditem] = useState([]);
  const [search, setsearch] = useState([]);
  

  const loaddata = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });

    response = await response.json();
    // console.log(response[0],response[1])
    setFooditem(response[0]);
    setFoodCat(response[1]);
  }
  

  useEffect(() => {
    loaddata();
  }, [])

  return (
    <main className={`${inter.className}`}>
      <div className='absolute bottom-0 z-50 left-[43%]'>

        <div class="relative w-60 mx-auto text-gray-600 lg:block hidden">
          <input
            class="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
            type="search" name="search" placeholder="Search" value={search} onChange={(e) => { setsearch(e.target.value) }} />
          <button type="submit" class="absolute right-0 top-0 mt-3 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} >
              <path d="M9 2C5.146 2 2 5.146 2 9s3.146 7 7 7a6.959 6.959 0 0 0 4.574-1.719l.426.426V16l5.586 5.586a1.415 1.415 0 0 0 2-2L16 14h-1.293l-.426-.426A6.959 6.959 0 0 0 16 9c0-3.854-3.146-7-7-7zm0 2c2.773 0 5 2.227 5 5s-2.227 5-5 5-5-2.227-5-5 2.227-5 5-5z" />
            </svg>
          </button>
        </div>
      </div>
      <div>
        <Carousal />
      </div>
      <div className='m-3 '>
        {
          foodCat !== []
            ? foodCat.map((data) => {
              return (<div className=''>
                <div key={data._id} className='text-2xl font-medium m-3'>
                  {data.CategoryName}
                </div>
                <hr />
                {
                  foodCat !== []
                    ? <div className='flex flex-wrap gap-14 items-center justify-center'>{
                    fooditem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleString())))
                    .map(filteritems => {
                      return (
                        <div key={filteritems._id} className=" h-[16rem]  " >
                        <Card foodName={filteritems.name} options={filteritems.options[0]} imgSrc={filteritems.img} />
                      </div>
                      )
                      })}</div> :
                    <div>No Such Data Found</div>
                }
              </div>
              )
            })
            : ""
        }
      </div>
    </main>
  )
}
