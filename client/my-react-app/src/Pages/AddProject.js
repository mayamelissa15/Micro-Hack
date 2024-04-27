import React from 'react';
import Sidebar from "../Components/Sidebar";
import add from '../Assets/Add.png';
import TestComponent from "../Components/TestComponent";
import AddingTask from "../Components/AddingTask";

const AddProject = () => {
    return (
        <div className="flex flex-row">
            <div className="basis-1/3">
                <Sidebar />
            </div>
            <div className="bg-white rounded-lg mt-16 p-16 shadow-md">
                <form className="basis-2/3">
                    <div className="mb-4">
                        <label className="block text-slate-00 text-sm font-medium mb-2" htmlFor="field1">
                            Name of project
                        </label>
                        <input
                            className="shadow appearance-none shadow-md rounded w-full py-2 px-3 text-slate-600 leading-tight focus:outline-none focus:shadow-outline"
                            id="field1"
                            type="text"
                        />
                    </div>
                    <div className="mb-4 flex">
                        <div className="mr-2 w-1/2">
                            <label className="block text-slate-00 text-sm font-medium mb-2" htmlFor="field2">
                                Start date
                            </label>
                            <input
                                className="shadow appearance-none shadow-md rounded w-full py-2 px-3 text-slate-600 leading-tight focus:outline-none focus:shadow-outline"
                                id="field2"
                                type="date"
                                placeholder="Enter Field 2"
                            />
                        </div>
                        <div className="ml-2 w-1/2">
                            <label className="block text-slate-00 text-sm font-medium mb-2" htmlFor="field3">
                                End Date
                            </label>
                            <input
                                className="shadow appearance-none shadow-md rounded w-full py-2 px-3 text-slate-600 leading-tight focus:outline-none focus:shadow-outline"
                                id="field3"
                                type="date"
                                placeholder="Enter Field 3"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-slate-00 text-sm font-medium mb-2" htmlFor="description">
                            task Description
                        </label>
                        <textarea
                            className="shadow appearance-none shadow-md rounded w-full py-2 px-3 text-slate-600 leading-tight focus:outline-none focus:shadow-outline"
                            id="description"
                            placeholder="Enter description"
                            rows="4"
                        />
                    </div>
                    <div className="flex justify-start">
                        <AddingTask />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddProject;
