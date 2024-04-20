"use client";
import styles from "./page.module.css";
import DivHeader from "../components/HomePage/DivHeader";
import DivFooter from "../components/HomePage/DivFooter";
import { useIntegrationsOption } from "../state/integrationOption";
import IntegrationsErp from "../components/IntegrationsPage/IntegrationsErp";
import IntegrationsPartner from "../components/IntegrationsPage/IntegrationsPartner";

export default function IntegrationsPage() {
  const intOption = useIntegrationsOption((state) => state.intOption);
  if (intOption == 0) {
    return (
      <main className={styles.main}>
        <DivHeader />
        <IntegrationsErp />
        <DivFooter />
      </main>
    );
  } else if (intOption == 1) {
    return (
      <main className={styles.main}>
        <DivHeader />
        <IntegrationsPartner/>
        <DivFooter />
      </main>
    );
  }
}
