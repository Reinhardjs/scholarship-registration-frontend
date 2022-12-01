import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const AdminDashboard = () => {
  const history = useHistory();
  const [teacherTrainings, setTeacherTrainings] = useState([]);
  useEffect(() => {
    axios.post("/admin/teacher-training/view").then(
      (response) => {
        const { data } = response;
        setTeacherTrainings(data.data);
        console.log(data); // data is object
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <section className="px-4 text-gray-600 antialiased" x-data="app">
      <div className="flex flex-col justify-start px-4 pt-10">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid sm:grid-cols-2 sm:gap-8 sm:pt-4">
            <div className="pt-2.5 sm:duration-200 sm:hover:translate-y-2">
              <div
                className="flex w-full cursor-pointer grid-cols-2 rounded-full bg-primary-600 px-5 py-4 text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                type="submit"
                onClick={() => {
                  //   history.push("/");
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
                className="flex w-full cursor-pointer grid-cols-2 rounded-full border bg-white px-5 py-4 text-sm font-medium shadow hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                type="submit"
                onClick={() => {
                  //   history.push("/");
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
            <header className="border-b border-gray-100 px-5 py-4">
              <div className="font-semibold text-gray-800">
                Japanese Teacher Trainings
              </div>
            </header>
            <div className="relative overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="py-3 px-6">
                      Test ID
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Name
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Gender
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Age
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Birthdate
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Province
                    </th>
                    <th scope="col" className="py-3 px-6">
                      City
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Address
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Telephone
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Handphone
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Email
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Last Education
                    </th>
                    <th scope="col" className="py-3 px-6">
                      University
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Major
                    </th>
                    <th scope="col" className="py-3 px-6">
                      IPK
                    </th>
                    <th scope="col" className="py-3 px-6">
                      English Proficiency
                    </th>
                    <th scope="col" className="py-3 px-6">
                      English Proficiency Score
                    </th>
                    <th scope="col" className="py-3 px-6">
                      JLPT
                    </th>
                    <th scope="col" className="py-3 px-6">
                      JLPT Score
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Teaching Time
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Teaching Location
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Teaching Province
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Teaching City
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Teaching Subject
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Info From
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Test Location
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {teacherTrainings.map((item, key) => {
                    return (
                      <tr
                        key={key}
                        className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                      >
                        <td className="whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white">
                          {item.testId}
                        </td>
                        <th scope="col" className="py-3 px-6">
                          {item.name}
                        </th>
                        <th scope="col" className="py-3 px-6">
                          {item.gender}
                        </th>
                        <th scope="col" className="py-3 px-6">
                          {item.age}
                        </th>
                        <th scope="col" className="py-3 px-6">
                          {item.birthdate}
                        </th>
                        <th scope="col" className="py-3 px-6">
                          {item.province}
                        </th>
                        <th scope="col" className="py-3 px-6">
                          {item.city}
                        </th>
                        <th scope="col" className="py-3 px-6">
                          {item.address}
                        </th>
                        <th scope="col" className="py-3 px-6">
                          {item.telephone}
                        </th>
                        <th scope="col" className="py-3 px-6">
                          {item.handphone}
                        </th>
                        <th scope="col" className="py-3 px-6">
                          {item.email}
                        </th>
                        <th scope="col" className="py-3 px-6">
                          {item.lastEducation}
                        </th>
                        <th scope="col" className="py-3 px-6">
                          {item.university}
                        </th>
                        <th scope="col" className="py-3 px-6">
                          {item.major}
                        </th>
                        <th scope="col" className="py-3 px-6">
                          {item.ipk}
                        </th>
                        <th scope="col" className="py-3 px-6">
                          {item.englishProficiency}
                        </th>
                        <th scope="col" className="py-3 px-6">
                          {item.englishProficiencyScore}
                        </th>
                        <th scope="col" className="py-3 px-6">
                          {item.jlpt}
                        </th>
                        <th scope="col" className="py-3 px-6">
                          {item.jlptScore}
                        </th>
                        <th scope="col" className="py-3 px-6">
                          {item.teachingTime}
                        </th>
                        <th scope="col" className="py-3 px-6">
                          {item.teachingLocation}
                        </th>
                        <th scope="col" className="py-3 px-6">
                          {item.teachingProvince}
                        </th>
                        <th scope="col" className="py-3 px-6">
                          {item.teachingCity}
                        </th>
                        <th scope="col" className="py-3 px-6">
                          {item.teachingSubject}
                        </th>
                        <th scope="col" className="py-3 px-6">
                          {item.infoFrom}
                        </th>
                        <th scope="col" className="py-3 px-6">
                          {item.testLocation}
                        </th>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
