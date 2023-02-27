import React from 'react';
import { useTheme } from '../../../hooks/useTheme';
import DashboardRoutes from './DashboardRoutes';

const DashboardLeftSide = () => {
    const { theme } = useTheme();
    return (
        <div className={`${theme === "dark" ? "bg-[#2c303a54]" : "bg-slate-300"
            } md:h-screen  md:sticky top-0 text-gray-700 hidden lg:block lg:col-span-1 p-5`}>
            <DashboardRoutes></DashboardRoutes>
        </div>
    );
};

export default DashboardLeftSide;