export default function Home() {
  return (
    <div className="px-4 py-4 flex flex-col items-center">
      <div className="w-full mt-4 flex flex-col">
        <h3 className="text-3xl font-semibold mb-2">
          Vercel Analytics Dashboard
        </h3>
        <div className="mt-4 flex flex-col">
          <div className="bg-white rounded-md p-4 shadow-xl relative">
            <div className="w-full flex flex-row justify-between">
              <p className="text-lg font-semibold">Available Services</p>
              <p className="text-lg font-semibold">Count</p>
            </div>
            <div className="w-full flex flex-row mt-4 justify-between">
              <p className="text-base font-semibold">Deploys</p>
              <p className="text-base font-semibold">345</p>
            </div>
            <div className="w-full flex flex-row mt-4 justify-between">
              <p className="text-base font-semibold">Domains</p>
              <p className="text-base font-semibold">245</p>
            </div>
            <div className="w-full flex flex-row mt-4 justify-between">
              <p className="text-base font-semibold">Projects</p>
              <p className="text-base font-semibold">10</p>
            </div>
            <div className="w-full flex flex-row mt-4 justify-between">
              <p className="text-base font-semibold">Team Members</p>
              <p className="text-base font-semibold">47</p>
            </div>
            <div className="w-full flex flex-row mt-4 justify-between">
              <p className="text-base font-semibold">Git Providers</p>
              <p className="text-base font-semibold">5</p>
            </div>
          </div>
          <div className="mt-4 bg-white rounded-md p-4 shadow-xl relative">
            <h4 className="text-xl font-semibold mb-2">
              Per Project Deploys Over Time
            </h4>
            <div className="w-full flex flex-row justify-around mt-4">
              <div className="w-1/2 bg-gray-300 h-64"></div>
              <div className="w-1/2 bg-gray-300 h-64"></div>
            </div>
            <div className="w-full flex flex-row justify-around mt-4">
              <div className="w-1/2 flex flex-row items-center">
                <input type="checkbox" className="h-4 w-4" />
                <p className="text-base font-semibold ml-2">Project A</p>
              </div>
              <div className="w-1/2 flex flex-row items-center">
                <input type="checkbox" className="h-4 w-4" />
                <p className="text-base font-semibold ml-2">Project B</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
