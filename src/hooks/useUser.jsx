import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useUser = () => {
    const axiosSecure = useAxiosSecure()
    const { user, loading } = useAuth();
    const { data: userData, isLoading: userLoading } = useQuery({
        queryKey: ['user', user?.email],
        enabled: !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user?.email}`);
            return res.data;
        }
    })

    return {user, userData, loading, userLoading}
};

export default useUser;