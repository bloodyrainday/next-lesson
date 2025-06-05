import { useRouter } from "next/router";
import { FC, PropsWithChildren } from "react";

export const LoginNavigate: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();

  const isAuth = true; // здесь должен быть запрос за данными пользователя

  if (!isAuth) router.push("/test");

  return <>{children}</>;
};
