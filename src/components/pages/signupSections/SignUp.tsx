"use client";
import scss from "./SignUp.module.scss";
import instagramLogo from "../../../assets/image/Instagram Logo.png";
import Image from "next/image";
import Link from "next/link";
import { ImFacebook2 } from "react-icons/im";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useSignUpMutation } from "@/redux/api/auth";

const SignUp = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<SignUpReq>();
  const [signUpMutation] = useSignUpMutation();

  const onSubmit: SubmitHandler<SignUpReq> = async (data) => {
    console.log("🚀:", data);
    const userData: SignUpReq = {
      email: data.email,
      password: data.password,
      username: data.username,
      photo: data.photo,
    };
    try {
      const { data: res, error } = await signUpMutation(userData);
      if (error) {
        console.log(error);
        return;
      }
      localStorage.setItem("tokens", JSON.stringify(res));
      router.push("/");
    } catch (error) {}
  };

  return (
    <section className={scss.SignUp}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.three}>
            <div className={scss.auth}>
              <div className={scss.instagram}>
                <Image src={instagramLogo} alt="logo" />
              </div>
              <h4>Sign up to see your friends' photos and videos.</h4>
              <div className={scss.fecebook}>
                <span>
                  <ImFacebook2 />
                </span>
                <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26locale%3Dru_RU%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26response_type%3Dcode%252Cgranted_scopes%26scope%3Demail%26state%3D%257B%2522fbLoginKey%2522%253A%25221a4iqie105zlq22sf21intn8rak25yaa14pqctyua1xyq1v5ou8q%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D3f7e43c6-3515-40b3-b95d-7f7b7aa61e62%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%25221a4iqie105zlq22sf21intn8rak25yaa14pqctyua1xyq1v5ou8q%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%23_%3D_&display=page&locale=ru_RU&pl_dbl=0">
                  Log in with Facebook
                </a>
              </div>
              <div className={scss.block}>
                <div className={scss.line}></div>
                <h1>OR</h1>
                <div className={scss.line}></div>
              </div>
              <form onClick={handleSubmit(onSubmit)}>
                <div className={scss.form}>
                  <input
                    type="text"
                    placeholder="Email"
                    {...register("email", {
                      required: "Email is required",
                    })}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    {...register("password", { required: true })}
                  />
                  <input
                    type="text"
                    placeholder="First and Last Name"
                    {...register("username", { required: true })}
                  />
                  <input
                    type="text"
                    placeholder="Photo"
                    {...register("photo", { required: true })}
                  />
                </div>
                <h3>
                  People who use our service may have uploaded your contact
                  information to Instagram.
                  <Link
                    href={
                      "https://www.facebook.com/help/instagram/261704639352628"
                    }
                    target="blank"
                  >
                    More details
                  </Link>
                </h3>
                <h5>
                  By registering, you agree to our
                  <Link
                    href={
                      "https://help.instagram.com/581066165581870/?locale=ru_RU"
                    }
                    target="blank"
                  >
                    Terms
                  </Link>
                  ,
                  <Link
                    href={"https://www.facebook.com/privacy/policy"}
                    target="blank"
                  >
                    Privacy Policy
                  </Link>
                  and
                  <Link
                    href={
                      "https://privacycenter.instagram.com/policies/cookies/"
                    }
                    target="blank"
                  >
                    Cookie Policy
                  </Link>
                  .
                </h5>
                <button type="submit">Register</button>
              </form>
            </div>
            <div className={scss.acaunt1}>
              <h1>
                Do you have an account?
                <Link href={"sign-in"}> Log in</Link>
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

export default SignUp;
