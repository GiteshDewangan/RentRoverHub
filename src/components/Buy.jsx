import React, { useState } from "react";
import { Button, CheckBox, Img, Input, List, Slider, Text } from "components";
const Buy=()=>{
  const[city,setcity]=useState('');
  const[pop,setpop]=useState('');
  const[price,setprice]=useState('');
    return(<>
    <div className="flex flex-col gap-5 items-start justify-start w-full">
                        <Input
                          name="textfieldlarge"
                          placeholder="City/Street"
                          className="font-semibold p-0 placeholder:text-gray-600 text-gray-600 text-left text-lg w-full"
                          wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pb-3.5 pt-5 px-4 rounded-[10px] w-full"
                          suffix={
                            <Img
                              className="mt-auto mb-[5px] h-5 ml-[35px]"
                              src="images/img_location.svg"
                              alt="location"
                            />
                          }
                        
                        />
                        <Input
                          name="textfieldlarge_One"
                          placeholder="Property Type"
                          className="font-semibold p-0 placeholder:text-gray-600 text-gray-600 text-left text-lg w-full"
                          wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pb-3.5 pt-5 px-4 rounded-[10px] w-full"
                          suffix={
                            <Img
                              className="mt-auto mb-[5px] h-5 ml-[35px]"
                              src="images/img_sort.svg"
                              alt="sort"
                            />
                          }
                        />
                        
                        <Input
                          name="textfieldlarge_Two"
                          placeholder="Price Range"
                          className="font-semibold p-0 placeholder:text-gray-600 text-gray-600 text-left text-lg w-full"
                          wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pb-3.5 pt-5 px-4 rounded-[10px] w-full"
                          suffix={
                            <Img
                              className="mt-auto mb-[5px] h-5 ml-[35px]"
                              src="images/img_sort.svg"
                              alt="sort"
                            />
                          }
                        />

                      </div>
    </>)
}
export default Buy;