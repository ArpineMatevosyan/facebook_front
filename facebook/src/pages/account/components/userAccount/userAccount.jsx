import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
//import MainImage from "./components/mainImage";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

import styles from "./userAccount.module.scss";
import BackgroundImage from "../../../user/backgroundImage/backgroundImage";
import UserFace from "../../../../components/userFace/userFace";

const UserAccount = () => {
  const { userInfo } = useSelector((state) => state.user);

  return (
    <div className={styles.userAccount}>
      <h2>About</h2>
      <p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="cake" clip-path="url(#clip0_10_84)">
            <path
              id="Vector"
              d="M12 6C13.11 6 14 5.1 14 4C14 3.62 13.9 3.27 13.71 2.97L12 0L10.29 2.97C10.1 3.27 10 3.62 10 4C10 5.1 10.9 6 12 6ZM16.6 15.99L15.53 14.92L14.45 15.99C13.15 17.29 10.87 17.3 9.56 15.99L8.49 14.92L7.4 15.99C6.75 16.64 5.88 17 4.96 17C4.23 17 3.56 16.77 3 16.39V21C3 21.55 3.45 22 4 22H20C20.55 22 21 21.55 21 21V16.39C20.44 16.77 19.77 17 19.04 17C18.12 17 17.25 16.64 16.6 15.99ZM18 9H13V7H11V9H6C4.34 9 3 10.34 3 12V13.54C3 14.62 3.88 15.5 4.96 15.5C5.48 15.5 5.98 15.3 6.34 14.93L8.48 12.8L10.61 14.93C11.35 15.67 12.64 15.67 13.38 14.93L15.52 12.8L17.65 14.93C18.02 15.3 18.51 15.5 19.03 15.5C20.11 15.5 20.99 14.62 20.99 13.54V12C21 10.34 19.66 9 18 9Z"
              fill="#A303A0"
            />
          </g>
          <defs>
            <clipPath id="clip0_10_84">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <span> Born {userInfo?.birth_date}</span>
      </p>
      <p>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Call">
            <path
              id="Call_2"
              d="M12.9335 9.90336C12.3961 9.78777 11.971 10.0373 11.5946 10.2551C11.2091 10.4797 10.4761 11.0743 10.056 10.9221C7.90487 10.0364 5.88171 8.15363 5.00591 5.9939C4.85155 5.56478 5.4434 4.82713 5.66626 4.4371C5.88253 4.05954 6.12686 3.63042 6.01543 3.08904C5.91472 2.60254 4.61217 0.94511 4.15158 0.491875C3.84781 0.19249 3.53662 0.0278285 3.21718 0.00121652C2.01616 -0.0503442 0.674813 1.5522 0.439562 1.93557C-0.149804 2.75306 -0.146502 3.84082 0.449467 5.15978C1.88574 8.7025 7.31798 14.049 10.874 15.5393C11.5302 15.8462 12.1303 16 12.6693 16C13.1968 16 13.6665 15.8528 14.0701 15.5609C14.3747 15.3854 16.0429 13.9775 15.9992 12.7442C15.9727 12.4298 15.8085 12.1155 15.513 11.8111C15.0631 11.3462 13.4163 10.0048 12.9335 9.90336Z"
              fill="#A303A0"
            />
          </g>
        </svg>

        <span> {userInfo?.phone}</span>
      </p>
      <p>
        <svg
          width="16"
          height="15"
          viewBox="0 0 16 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Message">
            <path
              id="Message_2"
              //fill-rule="evenodd"
              //clip-rule="evenodd"
              d="M11.9512 0C13.024 0 14.056 0.441667 14.8152 1.23417C15.5752 2.025 16 3.09167 16 4.20833V10.7917C16 13.1167 14.184 15 11.9512 15H4.048C1.8152 15 0 13.1167 0 10.7917V4.20833C0 1.88333 1.8072 0 4.048 0H11.9512ZM13.224 5.44987L13.288 5.3832C13.4792 5.14153 13.4792 4.79153 13.2792 4.54987C13.168 4.4257 13.0152 4.34987 12.856 4.3332C12.688 4.32403 12.528 4.3832 12.4072 4.49987L8.79999 7.49987C8.33599 7.9007 7.67119 7.9007 7.19999 7.49987L3.59999 4.49987C3.35119 4.3082 3.00719 4.3332 2.79999 4.5582C2.58399 4.7832 2.55999 5.14153 2.74319 5.39153L2.84799 5.49987L6.48799 8.4582C6.93599 8.82487 7.47919 9.02487 8.04799 9.02487C8.61519 9.02487 9.16799 8.82487 9.61519 8.4582L13.224 5.44987Z"
              fill="#A303A0"
            />
          </g>
        </svg>
        <span> {userInfo?.email}</span>
      </p>
    </div>
  );
};

export default UserAccount;
