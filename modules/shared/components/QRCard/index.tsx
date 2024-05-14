import { type HTMLProps } from "react";

import Image from "next/image";

import Card from "../Card";

import styles from "./styles.module.css";

interface QRCardProps extends Omit<HTMLProps<HTMLElement>, "children"> {}

const QRCard = (props: QRCardProps) => {
  const { className, ...rest } = props;

  return (
    <Card className={className} {...rest}>
      <div className={styles.qrWrapper}>
        <Image src="/assets/images/image-qr-code.png" fill alt="" />
      </div>

      <div className={styles.cardBody}>
        <h3 className={styles.title}>
          Improve your front-end skills by building projects
        </h3>
        <p className={styles.copy}>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </Card>
  );
};

export default QRCard;
