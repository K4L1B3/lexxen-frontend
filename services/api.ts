import axios from "axios";
import React from "react";

interface IResponseLogin {
  access_token: string;
}

interface ILogin {
  username: string;
  password: string;
}
interface IRegister {
  name: string;
  email: string;
  phone: string;
  password: string;
}

const api = axios.create({
  baseURL: "http://localhost:3000",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export const post_login = async ({
  username,
  password,
}: ILogin): Promise<IResponseLogin> => {
  try {
    const response = await api.post<IResponseLogin>("/auth/login", {
      username,
      password,
    });
    localStorage.setItem("token", response.data.access_token);
    return response.data;
  } catch (error) {
    console.error("Erro ao fazer login:", error);
    throw error;
  }
};

export const post_register = async ({
  name,
  email,
  phone,
  password,
}: IRegister): Promise<IRegister> => {
  try {
    const response = await api.post<IRegister>("/auth/register", {
      name,
      email,
      phone,
      password,
    } as IRegister);
    return response.data;
  } catch (error) {
    console.error("Erro ao fazer cadastro:", error);
    throw error;
  }
};

// export const updatePassword = async
//   ({
//     token,
//     newPass
//   }: IUpdatePassword): Promise<void> => {
//   try {
//     await api.patch("/auth/updatePass", {

//     })
//   } catch (error) {
//     console.error("");
//   }
//  }
