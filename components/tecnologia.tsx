import Image from 'next/image';
import styles from '../styles/Home.module.css';

type Props = {
  imgUrl: string;
  imgAlt: string;
  description: string;
}

export default function Tecnologia(props: Props) {
  return (
    <div className="col">
      <div className="card h-100 shadow">
        <Image className="card-img-top" src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${props.imgUrl}`} alt={props.imgAlt} width="100%" height={225} />
        <div className="card-body">
          <p className="card-text">{props.description}</p>
        </div>
      </div>
    </div>
  )
}