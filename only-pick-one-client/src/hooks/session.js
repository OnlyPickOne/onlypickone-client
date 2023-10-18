import { useCallback } from "react";
import {useAxios} from "./axios"

export const useLogin = () =>{

  const [request,response]=useAxios();

  const run = (email,password)=>{

    return request({
      url: "/auth/login",
      method: "POST",
      email: email,
      password: password
    });
  
  };

  return [run,response];
}

export const useSignup = () => {
  const [request, response] = useAxios();

  const run = useCallback((values) => {
    return request({
      url: '/auth/signup',
      method: 'POST',
      
    })
  }, [request])

  return [run, response]
}