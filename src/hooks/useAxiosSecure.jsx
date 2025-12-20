import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from '../hooks/useAuth'

const axiosSecure = axios.create({
    baseURL: 'https://ghorerchef-server-api.vercel.app'
    // baseURL: 'http://localhost:3000/'
})

const useAxiosSecure = () => {

    const { user } = useAuth();
    useEffect(() => {
        axiosSecure.interceptors.request.use(config => {
            config.headers.Authorization = `Bearer ${user?.accessToken}`
            return config
        })
    }, [user])

    return axiosSecure;
};

export default useAxiosSecure;