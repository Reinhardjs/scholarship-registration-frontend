import React from "react";
import { useHistory } from "react-router-dom";

const LandingPage = () => {
  const history = useHistory();
  return (
    <React.Fragment>
      <div
        className="flex h-screen w-full bg-contain bg-fixed bg-top bg-no-repeat bg-origin-padding pt-8 sm:pt-0"
        style={{ backgroundImage: `url("/images/intersect.svg")` }}
      >
        <div className="mx-auto my-auto w-full max-w-5xl">
          <div className="px-6 md:px-0">
            <div className="mb-20 space-y-4 p-2 sm:mb-0 sm:p-4 md:space-y-6">
              <h1 className="text-center text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:mt-0 sm:text-4xl md:text-5xl lg:pt-8">
                PENDAFTARAN BEASISWA MEXT
              </h1>
              <p className="pt-[3.5rem] text-center text-lg font-normal md:pt-0">
                Periode 26 Desember 2022 - 18 Januari 2023
              </p>
              <div className="grid grid-cols-1 place-items-center sm:grid-cols-2">
                <img
                  className="mr-0 w-[250px] animate-loader pt-4 sm:w-[465px] sm:pt-1 lg:mr-[4rem] xl:mr-[8rem]"
                  src="/images/study-abroad.svg"
                />
                <div className="mx-auto grid max-w-2xl pt-6 sm:grid-cols-1 sm:gap-8 sm:pt-8">
                  <div
                    className="h-full cursor-pointer rounded-3xl bg-primary-600 px-5 py-8 pt-2.5 hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:duration-200 sm:hover:translate-y-2"
                    onClick={() => {
                      history.push("/teacher");
                    }}
                  >
                    <div
                      className="flex w-full grid-cols-2 justify-center px-5 py-8 text-sm font-medium text-white sm:py-4"
                      type="submit"
                    >
                      <img
                        className="object-contain"
                        width="35"
                        src="/images/teacher.png"
                      />
                      <p className="ml-2 text-center text-lg sm:ml-4">
                        Teacher Training 2023 (Non-Degree)
                      </p>
                    </div>
                    <p className="text-center text-white">
                      Program beasiswa yang dirancang khusus bagi para guru
                      untuk meningkatkan kualitas pengajaran sesuai dengan
                      bidangnya.
                    </p>
                  </div>
                  <div
                    className="mt-4 h-full cursor-pointer rounded-3xl border bg-white px-5 py-8 pt-2.5 shadow hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:mt-0 sm:duration-200 sm:hover:translate-y-2"
                    onClick={() => {
                      history.push("/student");
                    }}
                  >
                    <div
                      className="flex w-full grid-cols-2 justify-center px-5 py-8 text-sm font-medium sm:mb-0 sm:mt-0 sm:py-4"
                      type="submit"
                    >
                      <img
                        className="object-contain"
                        width="35"
                        src="/images/student.png"
                      />
                      <p className="ml-2 text-center text-lg sm:ml-4">
                        Japanese Studies 2023 (Non-Degree)
                      </p>
                    </div>
                    <p className="text-center">
                      Program beasiswa yang dirancang khusus bagi mahasiswa
                      S1/D4 jurusan sastra atau pendidikan bahasa Jepang untuk
                      belajar selama 1 tahun di universitas di Jepang.
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
