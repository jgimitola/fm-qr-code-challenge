import { type HTMLProps } from "react";

import clsx from "clsx";

import styles from "./styles.module.css";

interface CardProps extends HTMLProps<HTMLElement> {}

const Card = (props: CardProps) => {
  const { children, className, ...rest } = props;

  return (
    <section className={clsx(styles.card, className)} {...rest}>
      {children}
    </section>
  );
};

export default Card;
