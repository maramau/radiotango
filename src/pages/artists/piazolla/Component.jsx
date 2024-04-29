import {FaWikipediaW} from "react-icons/fa";

const body = <>
    <h2>Astor Piazolla</h2>
    <p>
        Astor Pantaleón Piazolla fue un músico re copado mal.
    </p>
    <p>
        Sus obras revolucionaron el tango tradicional en un nuevo estilo denominado tango de vanguardia o nuevo tango, incorporando elementos de la música académica, el jazz y el rock. 
    </p>
    <div>
        <a href="https://es.wikipedia.org/wiki/Astor_Piazzolla" target='_blank'>
            <FaWikipediaW/>
        </a>
    </div>
</>;

const data = {
    title: 'Astor Piazolla',
    body,
    playlist: [
        {
            artist: 'Astor Piazolla',
            song: 'Adiós Nonino',
            yt: 'VTPec8z5vdY',
            sc: 'https://soundcloud.com/paulacabralviolin/adios-nonino-piazolla?si=4cc39c1285f64519bf42298372958810',
        },
    ]
};

export default data;