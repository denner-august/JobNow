// import Image from "next/image";
import Image from "next/future/image";

import styles from "../styles/user.module.scss";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import Router from "next/router";
import { Div } from "../styles/components/photo";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";

export default function User() {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      return;
    } else {
      Router.push("/");
    }
  }, [session]);

  function Logout() {
    if (session) {
      signOut();
      Router.push("/");
    }
    Router.push("/");
  }

  function PushInicio() {
    Router.push("/");
  }

  return (
    <div className={styles.Container}>
      <header className={styles.header}>
        <button className={styles.button} onClick={PushInicio}>
          Inicio
        </button>
        <p className={styles.titulo}>Job Now</p>
        <button className={styles.perfil} onClick={Logout}>
          <Image
            src="/images/github2.png"
            alt="imagem do usuario"
            width={25}
            height={25}
          />
          <p>{session?.user?.name}</p>
        </button>
      </header>

      <div className={styles.Container2}>
        <Div className={styles.photo} usuario={session?.user?.image}></Div>
        <div className={styles.Menu}>
          <div className={styles.carrosel}>
            <Swiper
              style={{
                height: "100%",
                width: "100%",
              }}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
            >
              <SwiperSlide>
                <Image src="/images/login/dusty-rose.jpg" alt="rosa" fill />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/login/long-forest-path.jpg"
                  alt="rosa"
                  fill
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/login/white-rose-close-up.jpg"
                  alt="rosa"
                  fill
                />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className={styles.options}></div>
        </div>
      </div>
    </div>
  );
}
