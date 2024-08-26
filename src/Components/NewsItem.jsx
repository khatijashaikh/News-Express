import image from "../assets/news1.png";

const NewsItem = ({ data }) => {
  return (
    <div
      class="card bg-dark text-light mb-3 d-inline-block mx-3 my-3 px-2 py-2"
      style={{ maxWidth: "415px" }}
    >
      <img
        src={data?.src ? data?.src : image}
        style={{ height: "200px", width: "400px" }}
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">
          {data?.title ? data?.title.slice(0, 50) : "Title"}
        </h5>
        <p class="card-text">
          {data?.description ? data?.description : "Description"}
        </p>
        <a href={data?.url} class="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
