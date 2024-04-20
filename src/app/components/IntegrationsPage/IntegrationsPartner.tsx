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
            Encontre as lojas virtuais com integração ao Stock Controller
          </h1>
          <h3 className={styles.h3Text}>
            Escolha o sua loja virtual e integre ao estoque do Stock Controller
            e ganhe eficiência nas vendas.
          </h3>
        </div>
        <div className={styles.divErp}>
          <div className={styles.divItemErp}>
            <Image
              src="/assets/Ml.png"
              alt="Ml"
              width={160}
              height={80}
              className={styles.imgLogo}
            />
            <h4 className={styles.h4TextErp}>Mercado Livre</h4>
            <p className={styles.pTextErp}>Comércio eletrônico de produtos</p>
          </div>
          <div className={styles.divItemErp}>
            <Image
              src="/assets/Mercos.png"
              alt="HelpB1Logo"
              width={160}
              height={80}
              className={styles.imgLogo}
            />
            <h4 className={styles.h4TextErp}>Mercos</h4>
            <p className={styles.pTextErp}>Sistema de Vendas e Pedidos</p>
          </div>
          <div className={styles.divItemErp}>
            <Image
              src="/assets/Li.png"
              alt="HelpB1Logo"
              width={160}
              height={80}
              className={styles.imgLogo}
            />
            <h4 className={styles.h4TextErp}>Loja Integrada</h4>
            <p className={styles.pTextErp}>
              Desenvolvedora de sites para vendas online
            </p>
          </div>
          <div className={styles.divItemErp}>
            <Image
              src="/assets/Tray.png"
              alt="HelpB1Logo"
              width={160}
              height={80}
              className={styles.imgLogo}
            />
            <h4 className={styles.h4TextErp}>Tray E-commerce</h4>
            <p className={styles.pTextErp}>
            Plataforma de e-commerce para criação de lojas virtuais personalizadas
            </p>
          </div>
          <div className={styles.divItemErp}>
            <Image
              src="/assets/AliExpress.png"
              alt="HelpB1Logo"
              width={160}
              height={80}
              className={styles.imgLogo}
            />
            <h4 className={styles.h4TextErp}>AliExpress</h4>
            <p className={styles.pTextErp}>Comércio eletrônico de produtos</p>
          </div>
        </div>
        <Button variant="contained" href="/" className={styles.btDefaul}>
          Voltar
        </Button>
      </div>
    </div>
  );
}
