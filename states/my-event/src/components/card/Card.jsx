import Image from "next/image";
import Link from "next/link";

const Card = (props) => {
    const {events} = props;

    return(
        <Link href={"/event/" + events?.slug}>
            <Image 
            src={events.image}
            width={200}
            height={100}
            alt={events?.title} />

            <p>{events.date}</p>
            <h3>{events.title}</h3>
        </Link>
    )
}

export default Card;