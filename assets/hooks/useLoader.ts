import { useRouter } from "next/router";
import nProgress from "nprogress";

export const useLoader = () => {
  const router = useRouter();

  const startLoading = () => nProgress.start();
  const endLoading = () => nProgress.done();
};
