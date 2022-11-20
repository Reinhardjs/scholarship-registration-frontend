import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import TextInput from "../../components/TextInput";
import SelectInput from "../../components/SelectInput";
import PhoneNumberInput from "../../components/PhoneNumberInput";
import DatePickerInput from "../../components/DatePickerInput";

const JapaneseStudiesRegistration = () => {
  const form = useForm();
  const history = useHistory();
  const { handleSubmit, watch } = form;
  const [universitasList, setUniversitasList] = React.useState([]);
  const [wilayahList, setWilayahList] = React.useState([]);

  const filteredProvince = wilayahList.filter((item) => {
    return item.provinsi === watch("province");
  });
  const kotaList = filteredProvince.length > 0 ? filteredProvince[0].kota : [];

  const isValidEmail = (email) =>
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );

  const handleEmailValidation = (email) => {
    return isValidEmail(email);
  };

  const getUniversitasList = async () => {
    fetch("universitas.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        setUniversitasList(jsonObject);
      });
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

  React.useEffect(() => {
    getUniversitasList();
    getWilayahList();
  }, []);

  const onSubmit = (data) => {
    axios
      .post("https://api.reinhardjs.site/japanese-studies/register", data)
      .then(
        (response) => {
          const { data } = response;
          console.log(data); // data is object
        },
        (error) => {
          console.log(error);
        }
      );
  };

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
                Students Registration
              </h1>
              <TextInput
                form={form}
                labelString={"Nama Lengkap"}
                inputName={"name"}
                notes={"Nama lengkap tidak disingkat"}
              />
              <TextInput
                form={form}
                labelString={"Alamat tempat tinggal sekarang"}
                inputName={"address"}
              />
              <TextInput
                form={form}
                labelString={"Nomor Telepon"}
                inputName={"telephone"}
                isRequired={false}
              />
              <PhoneNumberInput
                form={form}
                labelString={"Nomor Ponsel"}
                inputName={"handphone"}
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
                notes={"Usia maksimal 29 tahun pada 1 April 2023"}
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
                labelString={"Apakah memiliki status kewarganegaraan Jepang?"}
                inputName={"japaneseResident"}
                data={["Ya", "Tidak"].map((item) => {
                  return { option: item, value: item };
                })}
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
              <SelectInput
                form={form}
                labelString={"Universitas"}
                inputName={"university"}
                data={universitasList.map((item) => {
                  return { option: item, value: item };
                })}
              />
              <SelectInput
                form={form}
                labelString={"Semester"}
                inputName={"semester"}
                data={[3, 5, 7, 9].map((item) => {
                  return { option: item, value: item };
                })}
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
                labelString={"JLPT Score"}
                inputName={"jlptScore"}
                type={"number"}
                notes={"Skor Total"}
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
              <div className="pt-2.5">
                <button
                  className="w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  type={"submit"}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default JapaneseStudiesRegistration;
