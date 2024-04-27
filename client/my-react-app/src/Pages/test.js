<div className="bg-[#F6F5FB] flex basis ">
        <div className="basis-2/12">
            <Sidebar></Sidebar>
        </div>
        <div className="basis-8/12 bg-slate-50">
            <div className="mt-8">
           <Navbar></Navbar>
            </div>
            <table className="mt-8 w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="">
            <tr>
              <th className="text-md text-slate-700 py-4 px-3 text-left">ID</th>
              <th className="text-md text-slate-700 py-4 px-3 text-left">Project Name</th>
              <th className="text-md text-slate-700 py-4 px-3 text-left">Date of Creation</th>
              <th className="text-md text-slate-700 py-4 px-3 text-left">Execution Time</th>
              <th className="text-md text-slate-700 py-4 px-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Lignes de données ici */}
            <tr>
              <td className="py-2 px-3">1</td>
              <td className="py-2 px-3">Project 1</td>
              <td className="py-2 px-3">2024-04-26</td>
              <td className="py-2 px-3">
                <button className="bg-green-100 text-green-500 text-md font-medium rounded-2xl py-1 px-4">Optimiser</button>
              </td>
              <td className="py-2 px-3">
                <button className="text-green-500 underline underline-offset-1 font-medium m-2">Edit</button>
                <button className="text-red-500 underline underline-offset-1 font-medium m-2">Delete</button>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-3">2</td>
              <td className="py-2 px-3">Project 2</td>
              <td className="py-2 px-3">2024-04-25</td>
              <td className="py-2 px-3"><button className="bg-green-100 text-green-500 text-md font-medium rounded-2xl py-1 px-4">Optimiser</button></td>
              <td className="py-2 px-3">
                <button className="text-green-500 underline underline-offset-1 font-medium m-2">Edit</button>
                <button className="text-red-500 underline underline-offset-1 font-medium m-2">Delete</button>
              </td>
            </tr>
            {/* Ajoutez plus de lignes de données au besoin */}
          </tbody>
        </table>
        </div>
        <div className="basis-2/12 pt-4  pr-4 bg-slate-50">
            <User></User>
        </div>
    </div>