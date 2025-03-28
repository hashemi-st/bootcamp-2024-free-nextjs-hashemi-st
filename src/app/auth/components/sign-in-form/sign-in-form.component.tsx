"use client";

import { FormEvent, ReactElement } from "react";

import Image from "next/image";
import Link from "next/link";

import signInImage from "@/assets/images/sign-in.webp";

import { ButtonComponent } from "../button/button.component";
import Card from "@/components/Card/Card";
import NormalInputComponent from "../normal-input/normal-input.component";
import PasswordInputComponent from "../password-input/password-input.component";

import MingcuteUser3Line from "@/icons/MingcuteUser3Line";

import styles from "@/app/auth/components/styles/auth-form.module.css";

export default function SignInFormComponent(): ReactElement {
  const formSubmitHandler = async (
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();
  };

  return (
    <div className={styles["auth-form"]}>
      <Card>
        <div className={styles["card-content"]}>
          <div className={styles.writings}>
            <form onSubmit={formSubmitHandler}>
              <NormalInputComponent
                label="نام کاربری"
                type="text"
                name="username"
                prefixIcon={<MingcuteUser3Line />}
              />
              <PasswordInputComponent
                label="رمز عبور"
                name="password"
                autoComplete="current-password"
              />
              <ButtonComponent variant="primary">ورود</ButtonComponent>
            </form>
            <div className={styles["change-form"]}>
              قبلاً ثبت‌نام نکردید؟
              {` `}
              <Link href="/auth/sign-up">ثبت‌نام کنید</Link>.
            </div>
          </div>
          <div className={styles.visuals}>
            <Image src={signInImage} alt="" />
          </div>
        </div>
      </Card>
    </div>
  );
}
