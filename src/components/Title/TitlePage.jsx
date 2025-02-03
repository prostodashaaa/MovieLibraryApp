import "./TitlePage.css";

function TitlePage({ title, text }) {
  const data = text ? text : "";

  return (
    <div className="title">
      <h1 className="title__h1">{title}</h1>
      <p className="title__text">{data}</p>
    </div>
  );
}

export default TitlePage;
