"use client";
import scss from "./SignIn.module.scss";
import instagramLogo from "../../../assets/image/Instagram Logo.png";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FC, useEffect, useState } from "react";
import foto1 from "../../../assets/image/foto-1.png";
import foto2 from "../../../assets/image/foto-2.png";
import foto3 from "../../../assets/image/foto-3.png";
import foto4 from "../../../assets/image/foto-4.png";
import IphoneImage from "../../../assets/image/iphoneImage.png";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useSignInMutation } from "@/redux/api/auth";
interface ISignIn {
  email: string;
  password: string;
}

const SignIn: FC = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<ISignIn>();
  const [signInMutation] = useSignInMutation();
  const [photo, setPhoto] = useState(0);
  const screen = [foto1, foto2, foto3, foto4];
  useEffect(() => {
    const interval = setInterval(() => {
      setPhoto((prevCount) => (prevCount + 1) % screen.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const onSubmit: SubmitHandler<ISignIn> = async (data) => {
    console.log("🚀 ~ constonSubmit:SubmitHandler<ISignIn>= ~ data:", data);
    const userData: ISignIn = {
      email: data.email,
      password: `${data.password}`,
    };
    try {
      const { data: responseSignIn, error } = await signInMutation(userData);
      console.log(
        "🚀 ~ constonSubmit:SubmitHandler<ISignIn>= ~ responseSignIn:",
        responseSignIn
      );
      if (error) {
        console.log("Saikal,no");
      } else {
        console.log(responseSignIn);
        localStorage.setItem("tokens", JSON.stringify(responseSignIn));
        router.push("/");
      }
    } catch (err) {
      console.error(`Error Sign-in getSignInMutation ${err}`);
    }
  };

  return (
    <section className={scss.SignIn}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.two}>
            <div className={scss.photo}>
              <Image src={screen[photo]} alt="img" />
              <div className={scss.iphone}>
                <Image src={IphoneImage} alt="img" />
              </div>
            </div>
          </div>
          <div className={scss.three}>
            <div className={scss.auth}>
              <div className={scss.instagram}>
                <Image src={instagramLogo} alt="img" />
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={scss.form}>
                  <input
                    type="text"
                    placeholder="Email"
                    {...register("email", { required: true })}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    {...register("password", { required: true })}
                  />
                  <button type="submit">Log in</button>
                </div>
              </form>
              <div className={scss.block}>
                <div className={scss.line}></div>
                <h1>OR</h1>
                <div className={scss.line}></div>
              </div>
              <div className={scss.fecebook}>
                <span>
                  <FaFacebook />
                </span>
                <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26locale%3Dru_RU%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26response_type%3Dcode%252Cgranted_scopes%26scope%3Demail%26state%3D%257B%2522fbLoginKey%2522%253A%25221a4iqie105zlq22sf21intn8rak25yaa14pqctyua1xyq1v5ou8q%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D3f7e43c6-3515-40b3-b95d-7f7b7aa61e62%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%25221a4iqie105zlq22sf21intn8rak25yaa14pqctyua1xyq1v5ou8q%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%23_%3D_&display=page&locale=ru_RU&pl_dbl=0">
                  Log in with Facebook
                </a>
              </div>
              <h3>Forget your password?</h3>
            </div>
            <div className={scss.acaunt1}>
              <h1>
                Don't have an account yet?
                <Link href={"/sign-up"}> Register</Link>
              </h1>
            </div>
            <h1>Install the application.</h1>

            <div className={scss.acaunt2}>
              <div className={scss.google_play}>
                <span></span>
                <Link
                  href={"https://apps.apple.com/us/app/instagram/id389801252"}
                  target="blank"
                >
                  <h2>App Store</h2>
                </Link>
              </div>
              <div className={scss.microsoft}>
                <span></span>
                <Link
                  href={
                    "https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3DD046492D-ACBF-4C96-8027-AA3DE11D914B%26utm_campaign%3DunifiedHome%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge%26original_referrer%3Dhttps%3A%2F%2Fwww.google.com%2F"
                  }
                  target="blank"
                >
                  <h2>Google Play</h2>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
