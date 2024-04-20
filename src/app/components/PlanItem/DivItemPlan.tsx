import { Button } from "@mui/material";
import styles from "./DivItemPlan.module.css";
import React from "react";
import Image from "next/image";
import { useItemPlanStore } from "@/app/state/itemPlan";

export default function DivItemPlan() {
  const itemOption = useItemPlanStore((state) => state.itemOption);

  if (itemOption == 0) {
    return (
      <div className={styles.divItemPlan}>
        <h2 className={styles.h2Text}>Plano Prata</h2>
        <h2 className={styles.h3Text}>R$ 59,90</h2>
        <Button variant="contained" className={styles.btDefaul}>
          Assinar
        </Button>
        <ul className={styles.ulMain}>
          <li className={styles.liMain}>
            <p className={styles.pSelect}>✓</p>
            <p>Cadastro de produto</p>
          </li>
          <li className={styles.liMain}>
            <p className={styles.pSelect}>✓</p>
            <p>Inventário de estoque</p>
          </li>
          <li className={styles.liMain}>
            <p className={styles.pSelect}>✓</p>
            <p>Digitação de pedidos</p>
          </li>
          <li className={styles.liMain}>
            <p className={styles.pNSelect}>X</p>
            <p>Relatórios Estatísticos</p>
          </li>
          <li className={styles.liMain}>
            <p className={styles.pNSelect}>X</p>
            <p>Envio de Email</p>
          </li>
          <li className={styles.liMain}>
            <p className={styles.pNSelect}>X</p>
            <p>Integração Lojas Virtuais</p>
          </li>
        </ul>
      </div>
    );
  } else if (itemOption == 1) {
    return (
      <div className={styles.divItemPlan}>
        <h2 className={styles.h2Text}>Plano Ouro</h2>
        <h2 className={styles.h3Text}>R$ 79,90</h2>
        <Button variant="contained" className={styles.btDefaul}>
          Assinar
        </Button>
        <ul className={styles.ulMain}>
          <li className={styles.liMain}>
            <p className={styles.pSelect}>✓</p>
            <p>Cadastro de produto</p>
          </li>
          <li className={styles.liMain}>
            <p className={styles.pSelect}>✓</p>
            <p>Inventário de estoque</p>
          </li>
          <li className={styles.liMain}>
            <p className={styles.pSelect}>✓</p>
            <p>Digitação de pedidos</p>
          </li>
          <li className={styles.liMain}>
            <p className={styles.pSelect}>✓</p>
            <p>Relatórios Estatísticos</p>
          </li>
          <li className={styles.liMain}>
            <p className={styles.pNSelect}>X</p>
            <p>Envio de Email</p>
          </li>
          <li className={styles.liMain}>
            <p className={styles.pNSelect}>X</p>
            <p>Integração Lojas Virtuais</p>
          </li>
        </ul>
      </div>
    );
  } else if (itemOption == 2) {
    return (
      <div className={styles.divItemPlan}>
        <h2 className={styles.h2Text}>Plano Diamante</h2>
        <h2 className={styles.h3Text}>R$ 99,90</h2>
        <Button variant="contained" className={styles.btDefaul}>
          Assinar
        </Button>
        <ul className={styles.ulMain}>
          <li className={styles.liMain}>
            <p className={styles.pSelect}>✓</p>
            <p>Cadastro de produto</p>
          </li>
          <li className={styles.liMain}>
            <p className={styles.pSelect}>✓</p>
            <p>Inventário de estoque</p>
          </li>
          <li className={styles.liMain}>
            <p className={styles.pSelect}>✓</p>
            <p>Digitação de pedidos</p>
          </li>
          <li className={styles.liMain}>
            <p className={styles.pSelect}>✓</p>
            <p>Relatórios Estatísticos</p>
          </li>
          <li className={styles.liMain}>
            <p className={styles.pSelect}>✓</p>
            <p>Envio de Email</p>
          </li>
          <li className={styles.liMain}>
            <p className={styles.pSelect}>✓</p>
            <p>Integração Lojas Virtuais</p>
          </li>
        </ul>
      </div>
    );
  }
}
