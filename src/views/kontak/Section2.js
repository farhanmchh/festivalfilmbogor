import { Input } from "@mui/material";
import emailjs from "@emailjs/browser";
import React, { useState } from "react";

function Section2() {
  const [dataMessage, setDataMessage] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [invalid, setInvalid] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleSendEmail = async () => {
    setLoading(true);
    try {
      if (!dataMessage.name) {
        throw new Error("invalid");
      }
      if (!dataMessage.email) {
        throw new Error("invalid");
      }
      if (!dataMessage.message) {
        throw new Error("invalid");
      }

      var templateParams = {
        from_name: dataMessage.name,
        from_email: dataMessage.email,
        message: dataMessage.message,
      };

      emailjs
        .send(
          "service_kgjaawn",
          "template_pa5o0wn",
          templateParams,
          "PBAIMI6gO3Gvn55LS"
        )
        .then(function (response) {
          console.log("SUCCESS!", response.status, response.text);
          window.location.reload();
        });
    } catch (error) {
      setLoading(false);
    }
  };

  console.log("data message", dataMessage);
  return (
    <div className="bg-[#FEDE88] relative z-0">
      <img
        src="/assets/mekar-kembang-01-green-1-top-left.svg"
        className="absolute w-[13%] md:w-[5%] top-0 left-0"
      />
      <img
        src="/assets/mekar-kembang-01-green-1-top-left.svg"
        className="absolute w-[13%] md:w-[5%] bottom-0 left-0 -rotate-90 "
      />
      <img
        src="/assets/si-rusa-green.svg"
        className="absolute h-full right-0 top-0 hidden sm:block -z-10"
      />

      <div className="px-10 sm:px-16 py-20 z-0">
        <p className="font-bold text-2xl sm:text-4xl z-50">
          BARANGKALI INGIN BERTANYA?
        </p>
        <p className="text-lg sm:text-xl my-5 z-10">
          Pertanyaan akan dikirim & dijawab melalui email.
        </p>

        <div className="w-full md:w-1/2">
          <div className="grid grid-cols-2 gap-7">
            <input
              placeholder="Nama"
              className="w-full outline outline-1 p-3"
              onChange={(e) =>
                setDataMessage({ ...dataMessage, name: e.target.value })
              }
              value={dataMessage.name}
            />
            <input
              placeholder="Email"
              className="w-full outline outline-1 p-3"
              onChange={(e) =>
                setDataMessage({ ...dataMessage, email: e.target.value })
              }
              value={dataMessage.email}
            />

            <textarea
              placeholder="Tulis Pesanmu..."
              className="w-full outline outline-1 p-3 h-36 col-span-2"
              onChange={(e) =>
                setDataMessage({ ...dataMessage, message: e.target.value })
              }
              value={dataMessage.message}
            />
          </div>

          <div className="flex justify-between mt-5 w-full">
            <button className="cursor-pointer" onClick={handleSendEmail}>
              <div className="bg-black w-fit py-1 px-3 flex gap-2 z-10">
                <img
                  src="/assets/mekar-kembang-01-white-2.svg"
                  className={`w-5 ${loading && "animate-spin"}`}
                />
                <p className="text-white font-semibold">Kirim</p>
              </div>
            </button>

            <div className="flex gap-5 z-10">
              <button
                onClick={() =>
                  window.open("https://www.instagram.com/festivalfilmbogor/")
                }
              >
                <div className="bg-[#DB4C4C] w-fit py-1 px-3 flex gap-2 z-10">
                  <img src="/assets/instagram-logo.svg" className="w-5" />
                  <p className="text-white font-semibold hidden sm:block">
                    Instagram
                  </p>
                </div>
              </button>

              <button
                onClick={() =>
                  window.open(
                    "https://mail.google.com/mail/?view=cm&fs=1&to=festivalfilmbogor@gmail.com"
                  )
                }
              >
                <div className="bg-[#DB4C4C] w-fit py-1 px-3 flex gap-2">
                  <img src="/assets/email-logo.svg" className="w-5" />
                  <p className="text-white font-semibold hidden sm:block">
                    Email
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
