import React from 'react';
import AdminProfile from './Admin/AdminProfile';
import ChefProfile from './Chef/ChefProfile';
import UserProfile from './User/UserProfile';

const FindProfile = () => {
    const admin = 'admin';
    const chef = 'chef';
    const user = 'user';
    const userRole = user;

    if(userRole === admin){
        return (
            <AdminProfile />
        )
    }
    if(userRole === chef){
        return (
            <ChefProfile />
        )
    }
    if(userRole === user){
        return (
            <UserProfile />
        )
    }
};

export default FindProfile;