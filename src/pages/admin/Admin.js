import React from "react";
import axios from "axios";
import { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

import AdminDashboard from "./AdminDashboard";
import Login from "../auth/Login";

const Admin = () => {
  const history = useHistory();

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

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (isLoggedIn === "false" || !isLoggedIn) {
    return <Login />;
  } else {
    return (
      <>
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex flex-shrink-0 items-center"></div>
                    <div className="hidden sm:ml-6 sm:block">
                      <div className="flex space-x-4"></div>
                    </div>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="sr-only">Open user menu</span>
                          <UserCircleIcon
                            className="h-8 w-8 rounded-full text-white"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            <span
                              className={
                                "block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              }
                            >
                              Change Password
                            </span>
                          </Menu.Item>
                          <Menu.Item>
                            <span
                              className={
                                "block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              }
                              onClick={() => {
                                history.push("/admin/resend-email");
                              }}
                            >
                              Resend Email
                            </span>
                          </Menu.Item>
                          <Menu.Item>
                            <span
                              className={
                                "block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              }
                              onClick={() => {
                                handleSignOut();
                              }}
                            >
                              Sign out
                            </span>
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3"></div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <AdminDashboard />
      </>
    );
  }
};

export default Admin;
