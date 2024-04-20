"use client";
import styles from "./page.module.css";
import DivMain from "./components/HomePage/DivMain";
import DivHeader from "./components/HomePage/DivHeader";
import DivFooter from "./components/HomePage/DivFooter";
import DivLogin from "./components/LoginPage/DivLogin";
import { useLoginStore } from "./state/loginState";
import { useHeaderState } from "./state/headerOption";

export default function Home() {
  const alterHeader = useHeaderState((state) => state.alter);
  const loginComp = useLoginStore((state) => state.loginComp);

  alterHeader(0);
  return (
    <main className={styles.main}>
      {!loginComp && (
        <>
          <DivHeader />
          <DivMain />
          <DivFooter />
        </>
      )}
      {loginComp && <DivLogin />}
    </main>
  );
}
