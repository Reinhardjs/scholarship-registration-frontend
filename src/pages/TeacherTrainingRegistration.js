import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

import TextInput from "../components/TextInput";
import SelectInput from "../components/SelectInput";
import PhoneNumberInput from "../components/PhoneNumberInput";
import DatePickerInput from "../components/DatePickerInput";
import Modal from "../components/Modal";
import SelectInput2 from "../components/SelectInput2";

const TeacherTrainingRegistration = () => {
  const [wilayahList, setWilayahList] = React.useState([]);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [isFailed, setIsFailed] = React.useState(false);
  const [responseMessage, setResponseMessage] = React.useState("");
  const [formData, setFormData] = React.useState();

  const form = useForm();
  const history = useHistory();
  const { handleSubmit, watch } = form;

  const filteredProvince = wilayahList.filter((item) => {
    return item.provinsi === watch("province");
  });
  const kotaList = filteredProvince.length > 0 ? filteredProvince[0].kota : [];

  const filteredTeachingProvince = wilayahList.filter((item) => {
    return item.provinsi === watch("teachingProvince");
  });
  const teachingCityList =
    filteredTeachingProvince.length > 0 ? filteredTeachingProvince[0].kota : [];

  const isValidEmail = (email) =>
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );

  function calculateAge(birthYear, birthMonth, birthDay) {
    var targetYear = 2023;
    var targetMonth = 4;
    var targetDay = 1;
    var calculatedAge = targetYear - birthYear;

    if (targetMonth < birthMonth) {
      calculatedAge--;
    }
    if (birthMonth === targetMonth && targetDay < birthDay) {
      calculatedAge--;
    }
    return calculatedAge;
  }

  const isValidDate = (date) => {
    const LIMIT_AGE = 34;
    const parts = date.split("-");
    const birthYear = parseInt(parts[0]);
    const birthMonth = parseInt(parts[1]);
    const birthDay = parseInt(parts[2]);
    return calculateAge(birthYear, birthMonth, birthDay) <= LIMIT_AGE;
  };

  const handleEmailValidation = (email) => {
    return isValidEmail(email);
  };

  const handleDateValidation = (email) => {
    return isValidDate(email);
  };

  const getWilayahList = async () => {
    fetch("wilayah.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        setWilayahList(jsonObject);
      });
  };

  const onSubmit = (data) => {
    setFormData(data);
    setIsModalOpen(true);
  };

  const handleOnConfirmSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      console.log(formData);
      formData.handphone = "+62" + formData.handphone;
      formData.teachingTime =
        formData.teachingYears + " " + formData.teachingMonths;

      const parts = watch("birthdate").split("-");
      const birthYear = parseInt(parts[0]);
      const birthMonth = parseInt(parts[1]);
      const birthDay = parseInt(parts[2]);
      formData.age = calculateAge(birthYear, birthMonth, birthDay).toString();

      axios
        .post(
          process.env["REACT_APP_API_ENDPOINT"] + "/teacher-training/register",
          formData
        )
        .then(
          (response) => {
            setIsLoading(false);
            const { data } = response;
            console.log(data); // data is object
            if (typeof data === "string") {
              setIsFailed(true);
              setResponseMessage(data);
            } else {
              setIsSuccess(true);
              form.reset();
            }
          },
          (error) => {
            console.log(error);
            alert(JSON.stringify(error));
          }
        );
    }, 1000);
  };

  React.useEffect(() => {
    getWilayahList();
  }, []);

  React.useEffect(() => {
    if (!isModalOpen) {
      setTimeout(() => {
        setIsSuccess(false);
        setIsFailed(false);
      }, 500);
    }
  }, [isModalOpen]);

  return (
    <React.Fragment>
      <div className="grid h-screen place-items-center">
        <div className="min-w-full">
          <form
            className="m-auto mt-10 mb-10 max-w-2xl rounded-lg border bg-white py-8 px-7 shadow"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="space-y-4 p-2 sm:p-4 md:space-y-6">
              <div className="flex  place-items-center">
                <ArrowLeftIcon
                  className="h-7 w-7 cursor-pointer text-red-600"
                  onClick={() => {
                    history.replace("/");
                  }}
                />
              </div>
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
                Teacher Training 2023
              </h1>
              <TextInput
                form={form}
                labelString={"Nama Lengkap"}
                inputName={"name"}
                notes={"Nama lengkap tidak disingkat"}
              />
              <SelectInput
                form={form}
                labelString={"Jenis Kelamin"}
                inputName={"gender"}
                data={["Laki-laki", "Perempuan"].map((item) => {
                  return { option: item, value: item };
                })}
              />
              <DatePickerInput
                form={form}
                labelString={"Tanggal Lahir"}
                inputName={"birthdate"}
                validation={handleDateValidation}
                notes={"Usia maksimal 34 tahun pada 1 April 2023"}
                minDate={new Date("04-01-1989")}
                maxDate={new Date()}
                showCurrentAge
              />
              <TextInput
                form={form}
                labelString={"Alamat tempat tinggal sekarang"}
                inputName={"address"}
              />
              <SelectInput
                form={form}
                labelString={"Provinsi"}
                inputName={"province"}
                data={wilayahList.map((item) => {
                  return { option: item.provinsi, value: item.provinsi };
                })}
              />
              <SelectInput
                form={form}
                labelString={"Kota/Kabupaten"}
                inputName={"city"}
                data={kotaList.map((item) => {
                  return { option: item, value: item };
                })}
              />
              <PhoneNumberInput
                form={form}
                labelString={"Nomor Ponsel"}
                inputName={"handphone"}
              />
              <PhoneNumberInput
                form={form}
                labelString={"Nomor Telepon"}
                inputName={"telephone"}
                isRequired={false}
              />
              <TextInput
                form={form}
                labelString={"Email Aktif"}
                inputName={"email"}
                validation={handleEmailValidation}
                notes={"E-mail yang terkoneksi dengan HP"}
              />
              <SelectInput
                form={form}
                labelString={"Pendidikan Terakhir"}
                inputName={"lastEducation"}
                data={["D4", "S1", "S2"].map((item) => {
                  return { option: item, value: item };
                })}
              />
              <TextInput
                form={form}
                labelString={"Universitas"}
                inputName={"university"}
                notes={
                  "Penulisan nama universitas dalam Bahasa Indonesia dan tidak disingkat"
                }
              />
              <TextInput
                form={form}
                labelString={"Jurusan"}
                inputName={"major"}
                notes={
                  "Penulisan nama jurusan dalam Bahasa Indonesia dan tidak disingkat"
                }
              />
              <TextInput
                form={form}
                labelString={"IPK (Indeks Prestasi Kumulatif)"}
                inputName={"ipk"}
                type={"number"}
                notes={"Contoh: 3.00 atau 3.57"}
              />
              <SelectInput
                form={form}
                labelString={"Kemampuan Bahasa Inggris"}
                inputName={"englishProficiency"}
                data={[
                  "TOEFL-PBT/ITP",
                  "TOEFL-IBT",
                  "IELTS",
                  "TOEIC",
                  "Tidak Ada",
                ].map((item) => {
                  return { option: item, value: item };
                })}
              />
              <TextInput
                form={form}
                labelString={"Skor Kemampuan Bahasa Inggris"}
                inputName={"englishProficiencyScore"}
                type={"number"}
                notes={"Skor Total"}
                isDisabled={
                  watch("englishProficiency") === "Tidak Ada" ? true : false
                }
              />
              <SelectInput
                form={form}
                labelString={"JLPT (Japanese Language Proficiency Test)"}
                inputName={"jlpt"}
                data={["N1", "N2", "N3", "N4", "N5", "Tidak Ada"].map(
                  (item) => {
                    return { option: item, value: item };
                  }
                )}
              />
              <TextInput
                form={form}
                labelString={"Skor JLPT"}
                inputName={"jlptScore"}
                type={"number"}
                notes={"Skor Total"}
                isDisabled={watch("jlpt") === "Tidak Ada" ? true : false}
              />

              <div className="pt-4"></div>

              <SelectInput2
                form={form}
                labelString={"Total Masa Mengajar"}
                inputLabel1={"tahun"}
                inputLabel2={"bulan"}
                inputName1={"teachingYears"}
                inputName2={"teachingMonths"}
                data1={[
                  "5 tahun",
                  "6 tahun",
                  "7 tahun",
                  "8 tahun",
                  "9 tahun",
                  "10 tahun",
                  "11 tahun",
                  "12 tahun",
                  "13 tahun",
                  "14 tahun",
                  "15 tahun",
                ].map((item) => {
                  return { option: item, value: item };
                })}
                data2={[
                  "0 bulan",
                  "1 bulan",
                  "2 bulan",
                  "3 bulan",
                  "4 bulan",
                  "5 bulan",
                  "6 bulan",
                  "7 bulan",
                  "8 bulan",
                  "9 bulan",
                  "10 bulan",
                  "11 bulan",
                ].map((item) => {
                  return { option: item, value: item };
                })}
                notes={
                  "Masa mengajar minimal 5 tahun 0 bulan pada 1 Oktober 2020"
                }
              />
              <TextInput
                form={form}
                labelString={"Sekolah Tempat Mengajar Saat Ini"}
                inputName={"teachingLocation"}
                notes={
                  "Penulisan nama sekolah sesuai dengan nama resmi dan tidak disingkat"
                }
              />
              <SelectInput
                form={form}
                labelString={"Provinsi"}
                inputName={"teachingProvince"}
                data={wilayahList.map((item) => {
                  return { option: item.provinsi, value: item.provinsi };
                })}
              />
              <SelectInput
                form={form}
                labelString={"Kota/Kabupaten"}
                inputName={"teachingCity"}
                data={teachingCityList.map((item) => {
                  return { option: item, value: item };
                })}
              />
              <TextInput
                form={form}
                labelString={"Mata Pelajaran yang Diampu"}
                inputName={"teachingSubject"}
                notes={
                  "Penulisan mata pelajaran tidak disingkat. Contoh: Bahasa Inggris"
                }
              />
              <SelectInput
                form={form}
                labelString={"Lokasi Ujian Tulis Beasiswa MEXT"}
                inputName={"testLocation"}
                data={[
                  "Jakarta",
                  "Surabaya",
                  "Denpasar",
                  "Medan",
                  "Makassar",
                ].map((item) => {
                  return { option: item, value: item };
                })}
                notes={
                  "Setelah klik tombol submit, lokasi ujian yang telah dipilih tidak bisa diganti"
                }
              />
              <SelectInput
                form={form}
                labelString={"Dari mana Anda tahu informasi beasiswa ini?"}
                inputName={"infoFrom"}
                data={[
                  "Guru",
                  "Teman",
                  "Website/Media Sosial Kumpulan Informasi Beasiswa Ke Luar Negeri",
                  "Webinar/Edufair JASSO",
                  "Lainnya...",
                ].map((item) => {
                  return { option: item, value: item };
                })}
              />

              <div className="mb-6 flex items-start pt-2">
                <div className="flex h-5 items-center">
                  <input
                    id="terms"
                    type="checkbox"
                    value=""
                    className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 text-primary-600 focus:ring-red-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-red-600"
                    {...form.register("check1", {
                      required: true,
                    })}
                  />
                </div>
                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Pastikan Anda telah membaca prosedur persyaratan serta FAQ
                  pada website Kedutaan Besar Jepang
                </label>
              </div>
              {form.formState.errors["check1"] && (
                <span className="text-red-600">
                  Silakan centang terlebih dahulu
                </span>
              )}

              <div className="mb-6 flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="terms"
                    type="checkbox"
                    value=""
                    className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 text-primary-600 focus:ring-red-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-red-600"
                    {...form.register("check2", {
                      required: true,
                    })}
                  />
                </div>
                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Periksa ulang jawaban Anda dan pastikan bahwa data sudah
                  terisi dengan benar. Data yang sudah di submit tidak akan bisa
                  diubah kembali.
                </label>
              </div>
              {form.formState.errors["check2"] && (
                <span className="text-red-600">
                  Silakan centang terlebih dahulu
                </span>
              )}

              <div className="pt-2.5">
                <button
                  className="w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  type={"submit"}
                >
                  Submit
                </button>
              </div>

              <Modal
                open={isModalOpen}
                setOpen={setIsModalOpen}
                onConfirm={handleOnConfirmSubmit}
                isLoading={isLoading}
                isSuccess={isSuccess}
                isFailed={isFailed}
                responseMessage={responseMessage}
              />
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TeacherTrainingRegistration;
