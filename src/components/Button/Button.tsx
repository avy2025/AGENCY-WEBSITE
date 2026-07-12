import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import styles from './Button.module.css';

type BaseProps = {
  variant?: 'primary' | 'secondary' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button'; href?: never; to?: never };

type ButtonAsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a'; href: string; to?: never };

type ButtonAsLink = BaseProps &
  Omit<LinkProps, 'to' | 'children'> & { as: 'link'; to: string; href?: never };

type ButtonProps = ButtonAsButton | ButtonAsAnchor | ButtonAsLink;

export default function Button({
  variant = 'primary',
  size = 'md',
  icon,
  className = '',
  children,
  ...rest
}: ButtonProps) {
  const cls = [
    styles.btn,
    styles[variant],
    styles[size],
    className,
  ].join(' ');

  const inner = (
    <>
      <span>{children}</span>
      {icon && <span className={styles.icon} aria-hidden="true">{icon}</span>}
    </>
  );

  if (rest.as === 'link') {
    const { as: _, ...linkRest } = rest as ButtonAsLink;
    return <Link className={cls} {...linkRest}>{inner}</Link>;
  }
  if (rest.as === 'a') {
    const { as: _, ...anchorRest } = rest as ButtonAsAnchor;
    return <a className={cls} {...anchorRest}>{inner}</a>;
  }

  const { as: _, ...btnRest } = rest as ButtonAsButton;
  return <button className={cls} {...btnRest}>{inner}</button>;
}
