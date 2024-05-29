import { useTranslation } from 'react-i18next';
import carousel from "../../assets/info/sample/carousel.png"
import carousel_dark from "../../assets/info/sample/carousel-dark.png"

function Sample() {
  const { t } = useTranslation();

  return (
    <>
    <div className="bg-[#F7F9FB] dark:bg-black py-8 md:py-24">
      <p className="text-center font-trispace font-medium text-xl md:text-3xl leading-8">{t("Samples of Collection")}</p>

      <img className="w-full mt-16 inline dark:hidden" src={carousel} />
      <img className="w-full mt-16 hidden dark:inline" src={carousel_dark} />
    </div>
    </>
  )
}

export default Sample

