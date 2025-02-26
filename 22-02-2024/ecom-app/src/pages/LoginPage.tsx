import { useMutation } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";
import { useContext, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { loginUser } from "../api/userApi";
import { UserIdContext } from "../contexts/UserIdContext";
import { adminIds } from "../lib/constants";
import { LoginUserData, userIdActions } from "../lib/types/UserTypes";

const LoginPage = () => {
  const { userId, userIdDispatch } = useContext(UserIdContext);
  const navigate = useNavigate();

  const [loginFormdata, setLoginFormdata] = useState<LoginUserData>({
    username: "",
    password: "",
  });

  const { mutate, isPending, error, isError } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => {
      return loginUser(loginFormdata);
    },
    onSuccess: (data) => {
      const userId = Number(jwtDecode(data.token).sub);
      userIdDispatch({
        type: userIdActions.LOGIN,
        payload: {
          userId,
        },
      });
      if (adminIds.includes(userId))
        navigate("/admin-dashboard", { replace: true });
      else navigate("/home-page", { replace: true });
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate();
  };

  if (isError) return <h1>{error.message}</h1>;
  if (userId && userId === 1) return <Navigate to={"/admin-dashboard"} />;
  return (
    <>
      {userId ? (
        <Navigate to={"/home-page"} />
      ) : (
        <div className=" h-screen flex items-center justify-center">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="container grid p-2 shadow-2xl rounded-2xl">
              <div className="m-5 grid gap-2 grid-cols-4 items-center">
                <label className="font-black col-span-1">Username :</label>
                <input
                  className="col-span-3 p-1.5 bg-blue-200 rounded"
                  name="username"
                  type="text"
                  value={loginFormdata.username}
                  onChange={(e) => {
                    setLoginFormdata({
                      ...loginFormdata,
                      username: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="m-5 grid gap-2 grid-cols-4 items-center">
                <label className="font-black col-span-1">Password :</label>
                <input
                  className="col-span-3 p-1.5 bg-blue-200 rounded font-semibold"
                  name="password"
                  type="password"
                  value={loginFormdata.password}
                  onChange={(e) => {
                    setLoginFormdata({
                      ...loginFormdata,
                      password: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="m-5 flex justify-center">
                <button
                  className=" bg-blue-500 rounded p-1 px-3 mx-auto "
                  type="submit"
                >
                  <p className=" text-white font-bold">
                    {isPending ? "Loading..." : "Login"}
                  </p>
                </button>
              </div>
              <p className="text-red-500">{error}</p>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default LoginPage;
