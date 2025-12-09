import React from 'react';
import Dashboard from './Dashboard';
import AdminDashboard from './Admin/AdminDashboard';
import ChefDashboard from './Chef/ChefDashboard';
import UserDashboard from './User/UserDashboard';

const DashboardLayout = () => {
    const admin = 'admin';
    const chef = 'chef';
    const user = 'user';
    const userRole = user;

    if(userRole === admin){
        return (
            <AdminDashboard />
        )
    }
    if(userRole === chef){
        return (
            <ChefDashboard />
        )
    }
    if(userRole === user){
        return (
            <UserDashboard />
        )
    }
};

export default DashboardLayout;