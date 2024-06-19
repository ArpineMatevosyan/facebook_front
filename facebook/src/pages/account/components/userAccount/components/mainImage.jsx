import { useSelector } from "react-redux";

const MainImage = () => {
  const { userInfo } = useSelector((state) => state.user);

  const mainImage = userInfo?.images?.find((item) => item.main_image === 1);
  const mainImageUrl = mainImage
    ? `http://192.168.2.208:8000${mainImage.path}`
    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgsaRe2zqH_BBicvUorUseeTaE4kxPL2FmOQ&s";

  return <img src={mainImageUrl}></img>;
};

export default MainImage;
