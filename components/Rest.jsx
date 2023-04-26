import React, { useEffect, useState } from "react";
import useFetch from "@/pages/api/useFetch";
import Link from "next/link";

function Rest() {
  const { data, isLoading, isError } = useFetch("", "all");

  console.log(data);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {isLoading ? (
        <div className="h-[92vh] w-[100%] flex justify-center items-center bg-white">
          {" "}
          <div className="w-10 h-10 border-t-2 border-r-4 border-b-6 border-gray-500 animate-spin rounded-full border-dotted"></div>
        </div>
      ) : isError ? (
        <div className="err h-[92vh] w-full flex justify-center items-center">
          <h1 className="text-red-600 text-2xl animate-bounce transition-all ease-in-out duration-500">
            Error loading page
          </h1>
        </div>
      ) : (
        data?.map((country, idx) => {
          const { name, flags, capital, region, population } = country;
          return (
            <Link href={`/views/${name.common}`} key={idx}>
              <div className="card shadow-md">
                <div className="flag">
                  <img
                    src={flags.png}
                    alt={name.common}
                    className="w-full h-48"
                  />
                </div>
                <div className="context mt-3 p-2 text-black space-y-2">
                  <h1>{name.common}</h1>
                  <h1>{capital}</h1>
                  <h1>{region}</h1>
                  <h1>{population}</h1>
                </div>
              </div>
            </Link>
          );
        })
      )}
    </div>
  );
}

export default Rest;
