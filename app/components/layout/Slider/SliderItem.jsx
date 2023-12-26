import Image from "next/image";

/**
 * Componente de formatação para os items do slider
 * @param image (Optional)
 */
const SliderItem = ({text,image="/static/images/placeholder.png"}) => {

  return (
    <div className="
      flex-none cursor-pointer
      w-vw-3 h-max p-2
      border-1 rounded shadow
      bg-content-light text-text-light
      dark:bg-content-dark dark:text-text-dark
    ">
      {/* IMAGE */}
      <div className="
        w-fit 
        my-3 mx-auto p-2 
        rounded-full border shadow 
        dark:bg-content-light
      ">
        <Image src={image} alt={"img-modalidade-" + text} width={150} height={150}/>
      </div>
      {/* TEXT */}
      <h3 className="font-bold">
        {text}
      </h3>
    </div>
  );
};

export default SliderItem;