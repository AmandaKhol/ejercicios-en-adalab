import React from 'react';
import MediaCard from './MediaCard';

class MediaList extends React.Component {
  render() {
    return (
      <section className="section-cards">
        <h1>Cards</h1>
        <ul className="section-cards_list">
          <li>
            <MediaCard
              name="Alex Guerrero"
              date="Lunes 26 de junio de 2017"
              paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          perspiciatis ducimus aliquam unde ipsam ad eius corporis ipsum
          repellendus esse, ut laborum quis nostrum voluptate aperiam commodi
          vitae reprehenderit itaque!"
              logo="../logo.svg"
              likes="30"
              fas={true}
            />
          </li>
          <li>
            <MediaCard
              name="Adriana del Teso"
              date="Martes 16 de Febrero del 2021"
              paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          perspiciatis ducimus aliquam unde ipsam ad eius corporis ipsum
          repellendus esse, ut laborum quis nostrum voluptate aperiam commodi
          vitae reprehenderit itaque!"
              logo="../logo.svg"
              likes={50}
              fas={false}
            />
          </li>
          <li>
            <MediaCard
              name="Amanda García"
              date="Martes 16 de Febrero del 2021"
              paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          perspiciatis ducimus aliquam unde ipsam ad eius corporis ipsum
          repellendus esse, ut laborum quis nostrum voluptate aperiam commodi
          vitae reprehenderit itaque!"
              logo="../logo.svg"
              likes="20"
              fas={true}
            />
          </li>
        </ul>
      </section>
    );
  }
}

export default MediaList;
