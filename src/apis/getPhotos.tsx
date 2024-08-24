// 'use client'

import { ENDPOINT } from "../utils/endPoinrs"
import {  baseInstance, baseUrl } from "./baseUrl"

export const getPhotos = async() => { 
    const response = await fetch(baseUrl + ENDPOINT.PHOTO.GETPHOTOS, {
      method: 'GET',
    })
    return response.json(); 
  }; 

  // export const getPhotos = async () => {
  //   const res = await baseInstance({
  //     method: 'GET',
  //     url: ENDPOINT.PHOTO.GETPHOTOS,
  //     // data: data
  //   })
  
  //   return res.data
  // }