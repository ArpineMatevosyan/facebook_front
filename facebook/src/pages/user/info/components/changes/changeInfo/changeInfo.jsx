import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../../../../../components/input/input";
import { changeInfo } from "../../../../../../constants/changeInfo";
import MainButton from "../../../../../../components/button/button";
import MainDate from "../../../../../../components/datePicker/mainDate";
import { UserInfoAPI } from "../../../../../../services/user";

import styles from "./changeInfo.module.scss";

const ChangeInfo = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);

  const { handleSubmit, control, setValue } = useForm({
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      phone: "",
      birth_date: "",
    },
  });

  useEffect(() => {
    if (userInfo) {
      for (const key in userInfo) {
        setValue(key, userInfo[key]);
      }
    }
  }, [userInfo, setValue]);

  const onChange = handleSubmit((data) => {
    dispatch(UserInfoAPI.putChangeInfo(data));
  });

  return (
    <div className={styles.box}>
      {changeInfo?.map((inp, idx) => (
        <div key={idx}>
          {inp.name === "birth_date" ? (
            <MainDate
              control={control}
              name={inp.name}
              label={inp.label}
              className={styles.date}
            />
          ) : (
            <Input
              className={styles.inp}
              type={inp.type}
              name={inp.name}
              placeholder={inp.name}
              control={control}
            />
          )}
        </div>
      ))}
      <MainButton onClick={onChange}>Change info</MainButton>
    </div>
  );
};

export default ChangeInfo;
