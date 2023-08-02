import React from 'react';

const titulo = "Dashboard!";

const DashBoardComponent = () =>{
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-blue-800 text-white">
                {/* Sidebar content */}
                {/* Add your sidebar content here */}
            </aside>

            {/* Main content */}
            <main className="flex-1 p-8">
                {/* Main content goes here */}
                <h1 className="text-3xl font-bold">{titulo}</h1>
                {/* Add your dashboard components here */}
            </main>
        </div>
      );
};


export default DashBoardComponent;