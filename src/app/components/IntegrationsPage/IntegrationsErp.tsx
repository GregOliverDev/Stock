import { Button } from "@mui/material";
import styles from "./Integrations.module.css";
import React from "react";
import Image from "next/image";

export default function IntegrationsErp() {
  return (
    <div className={styles.divMain}>
      <div className={styles.divMainStart}>
        <div className={styles.divText}>
          <h1 className={styles.h1Text}>
            Encontre o ERP ideal com integração ao Stock Controller
          </h1>
          <h3 className={styles.h3Text}>
            Escolha o seu ERP integrado ao estoque do Stock Controller e ganhe
            eficiência.
          </h3>
          </div>
          <div className={styles.divErp}>
            <div className={styles.divItemErp}>
              <Image
                src="/assets/HelpB1Logo.png"
                alt="HelpB1Logo"
                width={150}
                height={90}
                className={styles.imgLogo}
              />
              <h4 className={styles.h4TextErp}>HELPB1</h4>
              <p className={styles.pTextErp}>
                Consultoria SAP B1 e Hospedagem em Nuvem
              </p>
            </div>
            <div className={styles.divItemErp}>
            <Image
                src="/assets/EmpresaFacilLogo.png"
                alt="HelpB1Logo"
                width={150}
                height={90}
                className={styles.imgLogo}
              />
              <h4 className={styles.h4TextErp}>Empresa Fácil</h4>
              <p className={styles.pTextErp}>
                Sistema Integrado de Gestão Empresarial
              </p>
            </div>
            <div className={styles.divItemErp}>
            <Image
                src="/assets/SoftUPLogo.png"
                alt="HelpB1Logo"
                width={150}
                height={90}
                className={styles.imgLogo}
              />
              <h4 className={styles.h4TextErp}>SoftUP</h4>
              <p className={styles.pTextErp}>
                Sistema de Gestão para Varejo Físico e Online
              </p>
            </div>
            <div className={styles.divItemErp}>
            <Image
                src="/assets/DigifullLogo.png"
                alt="HelpB1Logo"
                width={150}
                height={90}
                className={styles.imgLogo}
              />
              <h4 className={styles.h4TextErp}>Digifull</h4>
              <p className={styles.pTextErp}>
                Soluções em Software, comercializamos e implementamos Soluções
              </p>
            </div>
            <div className={styles.divItemErp}>
            <Image
                src="/assets/FabriLogo.png"
                alt="HelpB1Logo"
                width={150}
                height={90}
                className={styles.imgLogo}
              />
              <h4 className={styles.h4TextErp}>Fábrica de Códigos</h4>
              <p className={styles.pTextErp}>Desenvolvimento de Sistemas</p>
            </div>
          </div>
          <Button variant="contained" href="/" className={styles.btDefaul}>
            Voltar
          </Button>
        </div>
      </div>
  );
}
