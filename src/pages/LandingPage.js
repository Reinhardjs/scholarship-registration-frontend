import React from "react";
import { useHistory } from "react-router-dom";

const LandingPage = () => {
  const history = useHistory();
  return (
    <React.Fragment>
      <div className="grid h-screen place-items-center">
        <div className="min-w-full">
          <div className="m-auto mt-10 mb-10 max-w-2xl rounded-lg border bg-white py-10 px-12 shadow">
            <div className="space-y-4 p-2 sm:p-4 md:space-y-6">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
                Beasiswa MEXT
              </h1>
              <div className="pt-2.5">
                <button
                  className="w-full rounded-lg bg-primary-600 px-5 py-4 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  type="submit"
                  onClick={() => {
                    history.push("/teacher");
                  }}
                >
                  Teacher Training 2023
                </button>
              </div>
              <div className="pt-2.5">
                <button
                  className="w-full rounded-lg bg-primary-600 px-5 py-4 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  type="submit"
                  onClick={() => {
                    history.push("/student");
                  }}
                >
                  Japanese Studies
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
