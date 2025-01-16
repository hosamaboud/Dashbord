import img_1 from "../../assets/cloud.png";
import img_2 from "../../assets/coin.png";
import img_3 from "../../assets/dots.png";
import img_4 from "../../assets/spring.png";
import img_5 from "../../assets/rocket.png";
import img_6 from "../../assets/stars.png";
import img_7 from "../../assets/white-outline.png";
import "./Login.css";
import bg_1 from "../../assets/1.jpg";
import bg_2 from "../../assets/login.jpeg";
import { ThemeContext } from "../../context/ThemeContext";
import NavLogin from "../../Components/login/nav_login/NavLogin";
import { useContext, useState } from "react";
import { FaArrowRight, FaGooglePlusG, FaLock, FaRegUser } from "react-icons/fa";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { IoLogoGithub, IoReloadCircleOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosEye } from "react-icons/io";
import { auth } from "../../Firebase";
import {
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const { darkTheme } = useContext(ThemeContext);
  const [userName, setUserName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [newUser, setNewUser] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Reset password
  const handlePasswordReset = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Please enter a valid email.");
      return;
    }

    setLoading(true);

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setLoading(false);
        alert("Password reset link has been sent to your email.");
      })
      .catch((error) => {
        setLoading(false);
        handleAuthError(error);
      });
  };

  // Email validation
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  // Password validation
  const validatePassword = (password) => {
    const re = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
  };

  //  Error handler
  const handleAuthError = (error) => {
    const errorCode = error.code;
    let errorMessage = "An unknown error occurred. Please try again later.";

    switch (errorCode) {
      case "auth/invalid-email":
        errorMessage =
          "The email address is not valid. Please check and try again.";
        break;
      case "auth/user-disabled":
        errorMessage =
          "This account has been disabled. Contact support for more information.";
        break;
      case "auth/user-not-found":
        errorMessage =
          "No user found with this email address. Please check the email and try again.";
        break;
      case "auth/wrong-password":
        errorMessage =
          "Incorrect password. Please make sure you entered the correct password.";
        break;
      case "auth/email-already-in-use":
        errorMessage =
          "This email is already in use. Try using a different email address.";
        break;
      case "auth/weak-password":
        errorMessage =
          "Your password is too weak. Make sure it is at least 8 characters long with a mix of letters and numbers.";
        break;
      case "auth/too-many-requests":
        errorMessage =
          "Too many failed login attempts. Please try again later.";
        break;
      case "auth/network-request-failed":
        errorMessage =
          "Network error occurred. Please check your connection and try again.";
        break;
      case "auth/invalid-credential":
        errorMessage =
          "The provided credential is invalid or expired. Please try again.";
        break;
      case "auth/operation-not-allowed":
        errorMessage = "This operation is not allowed. Please contact support.";
        break;
      case "auth/requires-recent-login":
        errorMessage = "Please log in again to complete this operation.";
        break;
      case "auth/invalid-verification-code":
        errorMessage =
          "The verification code is invalid. Please check and try again.";
        break;
      case "auth/invalid-verification-id":
        errorMessage =
          "The verification ID is invalid. Please check and try again.";
        break;
      case "auth/missing-email":
        errorMessage = "Email is required. Please enter your email address.";
        break;
      case "auth/account-exists-with-different-credential":
        errorMessage =
          "An account already exists with the same email but with different credentials. Please sign in with the correct provider.";
        break;
      case "auth/popup-closed-by-user":
        errorMessage =
          "The popup was closed before the sign-in was completed. Please try again.";
        break;
      case "auth/missing-phone-number":
        errorMessage =
          "Phone number is required. Please provide a valid phone number.";
        break;
      case "auth/quota-exceeded":
        errorMessage =
          "The SMS quota for this project has been exceeded. Please try again later.";
        break;
      case "auth/timeout":
        errorMessage = "The operation timed out. Please try again.";
        break;
      case "auth/unverified-email":
        errorMessage =
          "The email address has not been verified. Please check your inbox.";
        break;
      case "auth/app-not-authorized":
        errorMessage =
          "This app is not authorized to use Firebase Authentication. Please check your app's configuration.";
        break;
      case "auth/unauthorized-domain":
        errorMessage = "This domain is not authorized for OAuth operations.";
        break;
      case "auth/user-token-expired":
        errorMessage = "Your session has expired. Please log in again.";
        break;
      case "auth/null-user":
        errorMessage = "No user is currently signed in.";
        break;
      case "auth/internal-error":
        errorMessage = "An internal error occurred. Please try again later.";
        break;
      case "auth/invalid-api-key":
        errorMessage =
          "The API key provided is invalid. Please check your Firebase configuration.";
        break;
      default:
        errorMessage = `An unexpected error occurred: ${errorCode}. Please try again.`;
    }

    // عرض الرسالة بشكل مناسب للمستخدم
    setError(errorMessage);
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(email)) {
      setError("Email is invalid.");
      return;
    }

    if (!validatePassword(password)) {
      setError(
        "Password must be at least 8 characters, with one uppercase letter and one number."
      );
      return;
    }

    setLoading(true);

    if (newUser) {
      // Sign Up
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setLoading(false);
          setUserName(user.displayName);

          localStorage.setItem("username", userName);
          window.location.href = "/";
        })
        .catch((error) => {
          setLoading(false);
          handleAuthError(error);
        });
    } else {
      // Sign In
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setLoading(false);

          localStorage.setItem("username", user.displayName || user.email);
          window.location.href = "/";
          
        })
        .catch((error) => {
          setLoading(false);
          handleAuthError(error);
        });
    }
  };
  const imgs = [
    { id: 1, img: img_1, alt: "cloud image", class: "cloud" },
    { id: 2, img: img_2, alt: "coin image", class: "coin" },
    { id: 3, img: img_3, alt: "dots image", class: "dots" },
    { id: 4, img: img_5, alt: "spring image", class: "spring" },
    { id: 5, img: img_4, alt: "rocket image", class: "rocket" },
    { id: 6, img: img_6, alt: "stars image", class: "stars" },
    { id: 7, img: img_7, alt: "white-outline image", class: "white-outline" },
  ];

  return (
    <div
      className="login "
      style={{
        backgroundImage: `url(${darkTheme ? bg_2 : bg_1})`,
      }}
    >
      <NavLogin />
      <h1>Every tool you need is at your fingertips</h1>

      <div className="login_container">
        <div className="login_left">
          <div className="images">
            {imgs.map((item) => (
              <img
                loading="lazy"
                className={`${item.class} login_left_image`}
                key={item.id}
                src={item.img}
                alt={item.alt}
              />
            ))}
          </div>
          <span className="login_text">
            Just a few steps away from managing your business efficiently!
          </span>
        </div>
        <div className="login_right">
          <div className="box_btn">
            <button
              onClick={() => setNewUser(false)}
              className={`bg_1 ${!newUser && "active"}`}
            >
              Sign in
            </button>
            <button
              onClick={() => setNewUser(true)}
              className={`btn_2 ${newUser && "active"}`}
            >
              Sign up
            </button>
          </div>

          {/* Sign In */}
          <div className={`signIn ${newUser && "active"}`}>
            <div className="login_title">
              <span>Sign In</span>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form_input">
                <input
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <FaRegUser className="icon" />
              </div>
              <div className="form_input">
                <input
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <FaLock className="icon" />
                <IoIosEye
                  className="icon eye "
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
              <div>
                <a href="/" onClick={handlePasswordReset}>
                  Forgot Password?
                </a>
              </div>
              <div className="btn_submit">
                <button type="submit" disabled={loading}>
                  {loading ? (
                    <>
                      Loading...
                      <IoReloadCircleOutline className="icon loading" />
                    </>
                  ) : (
                    <>
                      Sign In <FaArrowRight className="icon" />
                    </>
                  )}
                </button>
              </div>
              {error && <div className="error-message">{error}</div>}
            </form>
            <div className="social_media">
              <TiSocialFacebookCircular className="icon" />
              <FaGooglePlusG className="icon" />
              <IoLogoGithub className="icon" />
            </div>
          </div>

          {/* Sign Up */}

          <div className={`register ${newUser && "active"}`}>
            <div className="login_title">
              <span>Create Account</span>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form_input">
                <input
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <MdOutlineEmail className="icon" />
              </div>
              <div className="form_input">
                <input
                  placeholder="Username"
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
                <FaRegUser className="icon" />
              </div>
              <div className="form_input">
                <input
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <FaLock className="icon" />
                <IoIosEye
                  className="icon eye"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
              <div className="btn_submit">
                <button type="submit">
                  Sign In <FaArrowRight className="icon" />
                </button>
              </div>
            </form>
            <div className="social_media">
              <TiSocialFacebookCircular className="icon" />
              <FaGooglePlusG className="icon" />
              <IoLogoGithub className="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
