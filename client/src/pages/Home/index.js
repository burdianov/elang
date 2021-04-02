import './style.scss';

function Home() {
  return (
    <div className="home">
      <section className="welcome">
        <div className="welcome-left">
          <h1 className="welcome-title">
            Turn your hard-earned sales into repeat customers
          </h1>
          <p className="welcome-subtitle">
            Maximize your customer acquisition efforts and turn transactional
            sales into passionate brand advocates.
          </p>
        </div>
        <div className="welcome-right">
          <img
            src={`${process.env.PUBLIC_URL}/images/svg/studying.svg`}
            alt=""
          />
        </div>
      </section>
      <section className="info">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et in culpa
        vitae commodi autem sunt deserunt optio corrupti maiores eum beatae hic
        fugit amet voluptate, atque nostrum repellendus! Ea saepe iure labore
        animi illo eveniet quae magni accusantium nemo! Deserunt, dolorum
        consequatur. Sed sint impedit illum. Excepturi fugiat, facere aliquam
        perspiciatis ipsam ratione, quo veritatis mollitia sequi tenetur
        expedita! Consequuntur iusto dignissimos nisi, ducimus illo enim placeat
        provident magnam, nesciunt at pariatur. Molestias laborum eligendi nobis
        earum doloribus exercitationem, ullam ex nihil hic, veritatis vero
        perspiciatis nemo ipsa! Vitae pariatur sint ratione voluptatum incidunt
        impedit dolorum, voluptas esse nihil repellat.
      </section>
    </div>
  );
}

export default Home;
