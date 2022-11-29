import React from "react";
import { useHistory } from "react-router-dom";

const LandingPage = () => {
  const history = useHistory();
  return (
    <React.Fragment>
      <div className="flex h-screen">
        <div className="mx-auto mt-[44%] w-full max-w-3xl sm:my-auto">
          <div className="px-6 sm:-mt-12 md:px-0">
            <div className="space-y-4 p-2 sm:p-4 md:space-y-6">
              <h1 className="text-center text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                BEASISWA MEXT
              </h1>
              <div className="grid sm:grid-cols-2 sm:gap-8 sm:pt-4">
                <div className="pt-2.5 sm:duration-200 sm:hover:translate-y-2">
                  <div
                    className="flex w-full cursor-pointer grid-cols-2 rounded-lg bg-primary-600 px-5 py-4 text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    type="submit"
                    onClick={() => {
                      history.push("/teacher");
                    }}
                  >
                    <img width="100" height="100" src="/images/teacher.png" />
                    <p className="m-auto grow text-center text-lg sm:text-xl">
                      Teacher Training 2023
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-2.5 sm:mt-0 sm:duration-200 sm:hover:translate-y-2">
                  <div
                    className="flex w-full cursor-pointer grid-cols-2 rounded-lg border bg-primary-600 px-5 py-4 text-sm font-medium text-white shadow hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    type="submit"
                    onClick={() => {
                      history.push("/student");
                    }}
                  >
                    <img width="100" height="100" src="/images/student.png" />
                    <p className="m-auto grow text-center text-lg sm:text-xl">
                      Japanese Studies 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
