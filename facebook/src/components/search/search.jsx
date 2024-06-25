import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { UserInfoAPI } from "../../services/user";
import Input from "../input/input";
import { Fragment, useRef, useEffect, useState } from "react";

import styles from "./search.module.scss";
import SendFriend from "../friends/sendFriend/sendFriend";

const Search = () => {
  const { searchData } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { control, watch, setValue } = useForm({
    defaultValues: {
      search: "",
    },
  });

  const [isTyping, setIsTyping] = useState(false);

  const searchRef = useRef(null);
  const searchValue = watch("search");
  useEffect(() => {
    if (searchValue) {
      setIsTyping(true);
      const timeoutId = setTimeout(() => {
        dispatch(UserInfoAPI.postSearch({ search: searchValue }));
      }, 500);

      return () => clearTimeout(timeoutId);
    }
  }, [searchValue, dispatch, setValue]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setValue("search", "");
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setValue]);

  return (
    <div className={styles.searchContainer} ref={searchRef}>
      <Fragment>
        <Input
          className={styles.searchInp}
          type="text"
          control={control}
          name="search"
          placeholder={
            <span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Iconly/Bold/Search" opacity="0.8">
                  <g id="Search">
                    <path
                      id="Search_2"
                      // fill-rule="evenodd"
                      //clip-rule="evenodd"
                      d="M1.16666 6.22411C1.16666 3.43096 3.40685 1.16666 6.17028 1.16666C7.49732 1.16666 8.77001 1.69949 9.70837 2.64795C10.6467 3.59641 11.1739 4.88279 11.1739 6.22411C11.1739 9.01727 8.9337 11.2816 6.17028 11.2816C3.40685 11.2816 1.16666 9.01727 1.16666 6.22411ZM11.0911 10.2983L12.5813 11.5012H12.6072C12.9087 11.806 12.9087 12.3 12.6072 12.6048C12.3057 12.9095 11.8169 12.9095 11.5154 12.6048L10.2787 11.1874C10.1618 11.0697 10.0961 10.9097 10.0961 10.7429C10.0961 10.576 10.1618 10.4161 10.2787 10.2983C10.5042 10.0744 10.8656 10.0744 11.0911 10.2983Z"
                      fill="#490057"
                    />
                  </g>
                </g>
              </svg>
            </span>
          }
        />
      </Fragment>
      <div className={styles.searchContainer}>
        {searchValue && searchData?.length > 0
          ? searchData.map((data, idx) => (
              <div key={idx} className={styles.searchItem}>
                {data.images.map((img, idx) =>
                  img.main_image == 1 ? (
                    <img
                      src={`http://192.168.2.208:8000${img.path}`}
                      alt={`${data.name} image`}
                    />
                  ) : null
                )}
                {data.name +
                  " " +
                  data.surname +
                  " " +
                  data.email +
                  " " +
                  data.phone}

                <SendFriend id={searchData[idx].id} />
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Search;
