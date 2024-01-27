import React, { useEffect } from "react";
import useRequest from "../../hooks/use-request";
import { useRouter } from "next/router";

const Signout = () => {
  const router = useRouter();
  const { doRequest } = useRequest({
    url: "/api/users/signout",
    body: {},
    method: "post",
    onSuccess: () => router.push("/"),
  });

  useEffect(() => {
    doRequest();
  }, []);

  return <div>Signing you out...</div>;
};

export default Signout;
