import Image from "next/image";

const SlideCard = (props) => {
  <div class="card " style="width: 18rem;">
    <Image
      src={props.src}
      class="card-img-top"
      alt="..."
      width={400}
      height={800}
    />
    <div class="card-body">
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
    </div>
  </div>;
};

export default SlideCard;
