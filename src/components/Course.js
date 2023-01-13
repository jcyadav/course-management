import React, { useEffect } from "react";
// npm i react-helmet

function Course() {

  
    return (
        <>
            <div className="px-4 mx-auto max-w-6xl sm:px-6 md:px-8 md:mt-4">
                {/* Replace with your content */}
                <h1 className="text-3xl text-black text-center"><u>Courses</u></h1>
                
                <div className="py-2">
                <div class="grid grid-cols-3 gap-6 py-4">
<div className="max-w-[40rem] h-72 bg-white text-2xl shadow-md font-bold rounded text-center py-6 hover:bg-gray-800 hover:text-white border-t-4 border-indigo-500">
<div className="text-2xl font-bold rounded text-center hover:text-white">
React JS
</div>
<span className="text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</span>
</div>
<div className="max-w-[40rem] h-72 bg-white text-2xl shadow-md font-bold rounded text-center py-6 hover:bg-gray-800 hover:text-white border-t-4 border-indigo-500">
<div className="text-2xl font-bold rounded text-center hover:text-white">
Angular
</div>
<span className="text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</span>
</div>
<div className="max-w-[40rem] h-72 bg-white text-2xl shadow-md font-bold rounded text-center py-6 hover:bg-gray-800 hover:text-white border-t-4 border-indigo-500">
<div className="text-2xl font-bold rounded text-center hover:text-white">
Node JS
</div>
<span className="text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</span>
</div>
<div className="max-w-[40rem] h-72 bg-white text-2xl shadow-md font-bold rounded text-center py-6 hover:bg-gray-800 hover:text-white border-t-4 border-indigo-500">
<div className="text-2xl font-bold rounded text-center hover:text-white">
Laravel
</div>
<span className="text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</span>
</div>
<div className="max-w-[40rem] h-72 bg-white text-2xl shadow-md font-bold rounded text-center py-6 hover:bg-gray-800 hover:text-white border-t-4 border-indigo-500">
<div className="text-2xl font-bold rounded text-center hover:text-white">
JavaScript
</div>
<span className="text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</span>
</div>
<div className="max-w-[40rem] h-72 bg-white text-2xl shadow-md font-bold rounded text-center py-6 hover:bg-gray-800 hover:text-white border-t-4 border-indigo-500">
<div className="text-2xl font-bold rounded text-center hover:text-white">
Python
</div>
<span className="text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</span>
</div>
</div>
                    <div className="flex flex-col py-2">
  <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
    <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow">
    <div class="py-3 px-5 bg-white text-xl text-gray-600 font-bold">Note: new courses coming soon</div>
     
    </div>
  </div>
</div>

                    </div>
                </div>
                
                {/* /End replace */}
          
                </>
    );
}

export default Course;
