import axios from "axios";
import { useEffect, useState } from "react";
import { Spinner } from "flowbite-react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

const AdminDashboard = () => {
  const [teacherTrainings, setTeacherTrainings] = useState([]);
  const [japaneseStudies, setJapaneseStudies] = useState([]);
  const [selectedTable, setSelectedTable] = useState(0);
  const [count, setCount] = useState(0);
  const TEACHER_TRAINING = 0;
  const JAPANESE_STUDIES = 1;
  const SELECTED_STYLE = `flex w-full cursor-pointer grid-cols-2 rounded-full bg-primary-600 px-5 py-4 text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`;
  const NONSELECTED_STYLE = `flex w-full cursor-pointer grid-cols-2 rounded-full border bg-white px-5 py-4 text-sm font-medium shadow hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`;

  const handleSignOut = () => {
    axios.post("https://api.daftarbeasiswamext.com/admin/logout").then(
      (response) => {
        localStorage.setItem("isLoggedIn", false);
        window.location.reload();
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const doJapaneseStudiesRequest = () => {
    axios.post("https://api.daftarbeasiswamext.com/admin/japanese-studies/view").then(
      (response) => {
        const { data } = response;
        if (!Array.isArray(data.data)) {
          handleSignOut();
          return;
        }

        setJapaneseStudies(data.data);
        console.log(data); // data is object
        setCount(count + 1);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const doTeacherTrainingsRequest = () => {
    axios.post("https://api.daftarbeasiswamext.com/admin/teacher-training/view").then(
      (response) => {
        const { data } = response;
        if (!Array.isArray(data.data)) {
          handleSignOut();
          return;
        }

        setTeacherTrainings(data.data);
        console.log(data); // data is object
        setCount(count + 1);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const downloadTeacherTrainings = () => {
    axios
      .get("/admin/teacher-training/download-excel", {
        responseType: "blob",
        timeout: 30000,
      })
      .then(
        (response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "teacher-training.xlsx");
          document.body.appendChild(link);
          link.click();
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const downloadJapaneseStudies = () => {
    axios
      .get("/admin/japanese-studies/download-excel", {
        responseType: "blob",
        timeout: 30000,
      })
      .then(
        (response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "japanese-studies.xlsx"); //or any other extension
          document.body.appendChild(link);
          link.click();
        },
        (error) => {
          console.log(error);
        }
      );
  };

  useEffect(() => {
    doTeacherTrainingsRequest();
    doJapaneseStudiesRequest();
  }, []);

  const renderTeacherTrainingsTable = () => {
    return (
      <table className="w-full table-fixed text-left text-sm text-gray-500 dark:text-gray-400">
        <thead className="bg-gray-200 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr className=" [&>*:nth-child(n)]:py-3 [&>*:nth-child(n)]:px-6 [&>*:nth-child(n)]:text-black">
            <th scope="col" className="w-[100px]">
              Test ID
            </th>
            <th scope="col" className="w-[250px]">
              Nama Lengkap
            </th>
            <th scope="col" className="w-[175px]">
              Jenis Kelamin
            </th>
            <th scope="col" className="w-[150px]">
              Tanggal Lahir
            </th>
            <th scope="col" className="w-[125px]">
              Usia
            </th>
            <th scope="col" className="w-[300px]">
              Alamat Tempat Tinggal Sekarang
            </th>
            <th scope="col" className="w-[175px]">
              Propinsi
            </th>
            <th scope="col" className="w-[175px]">
              Kota/Kabupaten
            </th>
            <th scope="col" className="w-[175px]">
              Nomor Ponsel Aktif
            </th>
            <th scope="col" className="w-[175px]">
              Nomor Telepon
            </th>
            <th scope="col" className="w-[250px]">
              Email Aktif
            </th>
            <th scope="col" className="w-[125px]">
              Pendidikan Terakhir
            </th>
            <th scope="col" className="w-[250px]">
              Universitas
            </th>
            <th scope="col" className="w-[175px]">
              Jurusan
            </th>
            <th scope="col" className="w-[175px]">
              IPK
            </th>
            <th scope="col" className="w-[175px]">
              Kemampuan Bahasa Inggris
            </th>
            <th scope="col" className="w-[175px]">
              Skor Bahasa Inggris
            </th>
            <th scope="col" className="w-[175px]">
              JLPT
            </th>
            <th scope="col" className="w-[175px]">
              Skor JLPT
            </th>
            <th scope="col" className="w-[175px]">
              Total Masa Mengajar
            </th>
            <th scope="col" className="w-[175px]">
              Sekolah Tempat Mengajar Saat Ini
            </th>
            <th scope="col" className="w-[175px]">
              Propinsi Mengajar
            </th>
            <th scope="col" className="w-[175px]">
              Kota Mengajar
            </th>
            <th scope="col" className="w-[175px]">
              Mata Pelajaran yang Diampu
            </th>
            <th scope="col" className="w-[175px]">
              Lokasi Ujian Tulis
            </th>
            <th scope="col" className="w-[175px]">
              Mendapat Informasi Beasiswa dari
            </th>
          </tr>
        </thead>
        <tbody>
          {teacherTrainings.map((item, key) => {
            return (
              <tr
                key={key}
                className="border-b bg-white dark:border-gray-700 dark:bg-gray-800 [&>*:nth-child(n)]:break-words [&>*:nth-child(n)]:py-3 [&>*:nth-child(n)]:px-6 [&>*:nth-child(n)]:font-normal [&>*:nth-child(n)]:text-black"
              >
                <td className="whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white">
                  {item.testId}
                </td>
                <td>{item.name}</td>
                <td>{item.gender}</td>
                <td>{item.birthdate.split("T00")[0]}</td>
                <td>{item.age} Tahun</td>
                <td>{item.address}</td>
                <td>{item.province}</td>
                <td>{item.city}</td>
                <td>{item.handphone}</td>
                <td>{item.telephone}</td>
                <td>{item.email}</td>
                <td>{item.lastEducation}</td>
                <td>{item.university}</td>
                <td>{item.major}</td>
                <td>{item.ipk}</td>
                <td>{item.englishProficiency}</td>
                <td>{item.englishProficiencyScore}</td>
                <td>{item.jlpt}</td>
                <td>{item.jlptScore}</td>
                <td>{item.teachingTime}</td>
                <td>{item.teachingLocation}</td>
                <td>{item.teachingProvince}</td>
                <td>{item.teachingCity}</td>
                <td>{item.teachingSubject}</td>
                <td>{item.testLocation}</td>
                <td>{item.infoFrom}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  const renderJapaneseStudiesTable = () => {
    return (
      <table className="w-full table-fixed text-left text-sm text-gray-500 dark:text-gray-400">
        <thead className="bg-gray-200 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr className=" [&>*:nth-child(n)]:py-3 [&>*:nth-child(n)]:px-6 [&>*:nth-child(n)]:text-black">
            <th scope="col" className="w-[100px]">
              Test ID
            </th>
            <th scope="col" className="w-[250px]">
              Nama Lengkap
            </th>
            <th scope="col" className="w-[175px]">
              Jenis Kelamin
            </th>
            <th scope="col" className="w-[150px]">
              Tanggal Lahir
            </th>
            <th scope="col" className="w-[125px]">
              Usia
            </th>
            <th scope="col" className="w-[175px]">
              Status WNJ
            </th>
            <th scope="col" className="w-[300px]">
              Alamat Tempat Tinggal
            </th>
            <th scope="col" className="w-[175px]">
              Provinsi
            </th>
            <th scope="col" className="w-[175px]">
              Kota/Kabupaten
            </th>
            <th scope="col" className="w-[175px]">
              Nomor Ponsel
            </th>
            <th scope="col" className="w-[175px]">
              Nomor Telepon
            </th>
            <th scope="col" className="w-[250px]">
              Email
            </th>
            <th scope="col" className="w-[250px]">
              Universitas
            </th>
            <th scope="col" className="w-[175px]">
              Semester
            </th>
            <th scope="col" className="w-[175px]">
              IPK
            </th>
            <th scope="col" className="w-[175px]">
              JLPT
            </th>
            <th scope="col" className="w-[175px]">
              JLPT Score
            </th>
            <th scope="col" className="w-[175px]">
              Lokasi Ujian Tulis
            </th>
            <th scope="col" className="w-[175px]">
              Mendapat Informasi Beasiswa Dari
            </th>
          </tr>
        </thead>
        <tbody>
          {japaneseStudies.map((item, key) => {
            return (
              <tr
                key={key}
                className="border-b bg-white dark:border-gray-700 dark:bg-gray-800 [&>*:nth-child(n)]:py-3 [&>*:nth-child(n)]:px-6 [&>*:nth-child(n)]:font-normal [&>*:nth-child(n)]:text-black"
              >
                <td className="whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white">
                  {item.testId}
                </td>
                <td>{item.name}</td>
                <td>{item.gender}</td>
                <td>{item.birthdate.split("T00")[0]}</td>
                <td>{item.age}</td>
                <td>{item.japaneseResident}</td>
                <td>{item.address}</td>
                <td>{item.province}</td>
                <td>{item.city}</td>
                <td>{item.handphone}</td>
                <td>{item.telephone}</td>
                <td>{item.email}</td>
                <td>{item.university}</td>
                <td>{item.semester}</td>
                <td>{item.ipk}</td>
                <td>{item.jlpt}</td>
                <td>{item.jlptScore}</td>
                <td>{item.testLocation}</td>
                <td>{item.infoFrom}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  return (
    <section className="px-4 text-gray-600 antialiased" x-data="app">
      <div className="flex flex-col justify-start px-4 pt-10">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid sm:grid-cols-2 sm:gap-8 sm:pt-4">
            <div className="pt-2.5 sm:duration-200 sm:hover:translate-y-2">
              <div
                className={
                  selectedTable === TEACHER_TRAINING
                    ? SELECTED_STYLE
                    : NONSELECTED_STYLE
                }
                type="submit"
                onClick={() => {
                  setSelectedTable(TEACHER_TRAINING);
                }}
              >
                <img
                  className="ml-1 sm:ml-6"
                  width="35"
                  height="35"
                  src="/images/teacher.png"
                  alt=""
                />
                <p className="m-auto grow text-center text-lg">
                  Teacher Training 2023
                </p>
              </div>
            </div>
            <div className="mt-4 pt-2.5 sm:mt-0 sm:duration-200 sm:hover:translate-y-2">
              <div
                className={
                  selectedTable === JAPANESE_STUDIES
                    ? SELECTED_STYLE
                    : NONSELECTED_STYLE
                }
                type="submit"
                onClick={() => {
                  setSelectedTable(JAPANESE_STUDIES);
                }}
              >
                <img
                  className="ml-1 sm:ml-6"
                  width="35"
                  height="35"
                  src="/images/student.png"
                  alt=""
                />
                <p className="m-auto grow text-center text-lg">
                  Japanese Studies 2023
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-xl border border-gray-200 bg-white shadow-lg">
            <header className="flex justify-between border-b border-gray-100 px-6 py-4">
              <div className="text-lg font-extrabold text-gray-800">
                {selectedTable === TEACHER_TRAINING && "Teacher Training 2023"}
                {selectedTable === JAPANESE_STUDIES && "Japanese Studies 2023"}
              </div>
              <ArrowDownTrayIcon
                className="h-8 w-8 cursor-pointer"
                onClick={() => {
                  if (selectedTable === TEACHER_TRAINING) {
                    downloadTeacherTrainings();
                  } else downloadJapaneseStudies();
                }}
              />
            </header>
            <div className="relative overflow-x-auto">
              {count === 2 && (
                <div className="mb-8 mt-4 flex animate-pulse items-center justify-center">
                  <Spinner color="failure" size="xl" />
                </div>
              )}
              {selectedTable === TEACHER_TRAINING &&
                renderTeacherTrainingsTable()}
              {selectedTable === JAPANESE_STUDIES &&
                renderJapaneseStudiesTable()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
