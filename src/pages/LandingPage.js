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
        <div className="mx-auto my-auto w-full max-w-4xl">
          <div className="px-6 md:px-0">
            <div className="space-y-4 p-2 sm:p-4 md:space-y-6">
              <h1 className="text-center text-3xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white sm:mt-0 sm:text-4xl md:text-5xl lg:pt-8">
                PENDAFTARAN BEASISWA MEXT
              </h1>
              <p className="text-center text-lg font-extralight">
                Periode 26 Desember 2022 - 18 Januari 2023
              </p>
              <div className="grid pt-6 sm:grid-cols-2 sm:gap-8 sm:pt-8">
                <div className="pt-2.5 sm:duration-200 sm:hover:translate-y-2">
                  <div
                    className="flex h-full w-full cursor-pointer grid-cols-2 rounded-full bg-primary-600 px-5 py-8 text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:py-4"
                    type="submit"
                    onClick={() => {
                      history.push("/teacher");
                    }}
                  >
                    <img
                      className="ml-1 sm:ml-6"
                      width="35"
                      height="35"
                      src="/images/teacher.png"
                    />
                    <p className="m-auto grow text-center text-lg">
                      Teacher Training 2023 (Non-Degree)
                    </p>
                  </div>
                </div>
                <div className="mt-4 pt-2.5 sm:mt-0 sm:duration-200 sm:hover:translate-y-2">
                  <div
                    className="flex h-full w-full cursor-pointer grid-cols-2 rounded-full border bg-white px-5 py-8 text-sm font-medium shadow hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:py-4"
                    type="submit"
                    onClick={() => {
                      history.push("/student");
                    }}
                  >
                    <img
                      className="ml-1 sm:ml-6"
                      width="35"
                      height="35"
                      src="/images/student.png"
                    />
                    <p className="m-auto grow text-center text-lg">
                      Japanese Studies 2023
                    </p>
                  </div>
                </div>
                <div></div>
                <div className="ml-4 sm:ml-8">
                  <p className="mt-[20px] text-base italic text-zinc-800 sm:mt-[-10px] sm:text-[14px]">
                    Program beasiswa yang dirancang khusus bagi mahasiswa S1/D4
                    jurusan sastra atau pendidikan bahasa Jepang untuk belajar
                    selama 1 tahun di universitas di Jepang.
                  </p>
                </div>
              </div>
              <img
                className="mx-auto animate-loader pt-6"
                width="400"
                src="/images/study-abroad.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
