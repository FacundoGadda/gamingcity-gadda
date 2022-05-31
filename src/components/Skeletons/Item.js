import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Item = () => {
  return (
    <div className="bg-white overflow-hidden">
      <div className="px-4 py-3">
        <Skeleton height={95}/>
        <hr className="mt-3 mb-2 mx-2 text-muted" />
        <h5>
          <Skeleton width={90} height={30}/>
        </h5>
        <p className="mb-2">
          <Skeleton count={2}/>
        </p>
      </div>
    </div>
  );
};

export default Item;
