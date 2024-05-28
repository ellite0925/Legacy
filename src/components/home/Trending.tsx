import Card from "./Trending/Card";
import abstr from "../../assets/home/discover/abstr.png";
import txt from "../../assets/home/discover/txt.png";
import pixel_first from "../../assets/home/discover/pixel-first.png";
import crystal from "../../assets/home/discover/crystal.png";
import abstract from "../../assets/home/discover/abstract.png";
import pixel_second from "../../assets/home/discover/pixel-second.png";

function Trending() {

  return (
    <>
      <div className="md:container mx-auto py-24">
        <p className="font-trispace text-3xl font-medium leading-8">Trending Collection</p>
        <div className="mt-12 flex space-x-6">
          <div className="basis-1/3">
            <Card image={abstr} semititle="ABSTR Collection" description="Sagittis bibendum amet mauris nulla maecenas quis vitae quam. Enim integer adipiscing netus dolor. " />
          </div>
          <div className="basis-1/3">
            <Card image={txt} semititle="TXT Collection" description="Sagittis bibendum amet mauris nulla maecenas quis vitae quam. Enim integer adipiscing netus dolor. " />
          </div>
          <div className="basis-1/3">
            <Card image={pixel_first} semititle="PIXEL Collection" description="Sagittis bibendum amet mauris nulla maecenas quis vitae quam. Enim integer adipiscing netus dolor. " />
          </div>
        </div>
        
        <div className="mt-6 flex space-x-6">
          <div className="basis-1/3">
            <Card image={crystal} semititle="CRYSTAL Collection" description="Sagittis bibendum amet mauris nulla maecenas quis vitae quam. Enim integer adipiscing netus dolor. " />
          </div>
          <div className="basis-1/3">
            <Card image={abstract} semititle="ABSTRACT Collection" description="Sagittis bibendum amet mauris nulla maecenas quis vitae quam. Enim integer adipiscing netus dolor. " />
          </div>
          <div className="basis-1/3">
            <Card image={pixel_second} semititle="PIXEL Collection" description="Sagittis bibendum amet mauris nulla maecenas quis vitae quam. Enim integer adipiscing netus dolor. " />
          </div>
        </div>
      </div>
    </>
  )
}

export default Trending

