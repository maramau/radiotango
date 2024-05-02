import {FaWikipediaW,
        FaYoutube,
        FaSpotify}          from "react-icons/fa";

const body = <>
    <p>
        Sciammarella Tango es una orquesta única fundada por la doctora en Física Denise Sciammarella en 2013. Lo que hace que esta orquesta sea tan particular es su enfoque reinterpretativo del tango desde una perspectiva de género moderna.
    </p>
    <p>
        La orquesta está integrada completamente por mujeres de diferentes partes del mundo, incluyendo Japón, Corea, Ucrania, Italia, Chile y Argentina. Estas músicas provienen de prestigiosas orquestas de Buenos Aires, como la Orquesta del Tango de Buenos Aires, la Orquesta Académica del Teatro Colón y la Orquesta Sinfónica Nacional.
    </p>
    <p>
        Es imposible hablar de esta orquesta sin hablar de Ángel Villoldo, quien fue uno de los compositores más característicos de las primeras épocas del tango, y escribió uno de los primeros tangos con letra. Sciammarella Tango se centra en la fase anterior del tango, conocida como tango prostibulario, que fue un período en el que el machismo estaba muy presente en el género.
    </p>
    <p>
        En su tercer disco, titulado "A Villoldo", las artistas rinden homenaje a Villoldo y resaltan su defensa de la mujer independiente, un rasgo extemporáneo para su época. El álbum fue grabado en 2019 como culminación de un proyecto de investigación y arte cosmopolita.
    </p>
    <p>
        Una de las obras destacadas de Villoldo es "El choclo", que la orquesta grabó en francés. La letra de esta versión es revolucionaria para su época, ya que narra la historia de una mujer francesa embarazada que se atreve a entrar a una milonga a bailar tango.
    </p>
    <p>
        La orquesta Sciammarella Tango está dirigida creativamente por la propia Denise Sciammarella, quien también contribuye con su voz. La dirección musical está a cargo de Cindy Harcha, quien también toca el bandoneón y hace los arreglos. La orquesta también incluye a Hanel Yeon y Shino Ohnaga en el piano, Mariana Atamás y Cecilia Florencia García en el violín, y Geraldina Carnicina en el contrabajo
    </p>
    <div>
        <a href="https://www.youtube.com/@SciammarellaTango" target='_blank'>
            <FaYoutube/>
        </a>
        <a href="https://open.spotify.com/intl-es/artist/59HnnLLjst8lKzKXTLoj71" target="_blank">
            <FaSpotify/>
        </a>
    </div>
</>;

const data = {
    title: 'Sciamarella Tango',
    body,
    playlist: [
        {
            artist: 'Sciamarella Tango',
            song: 'Kalisay',
            yt: 'Fx3QtMytaDQ',
            sc: '',
            sp: 'https://open.spotify.com/intl-es/track/6WLWjKKrYUCtK1Fw9HGB6M?si=23fff43d26144252'
        },
        {
            artist: 'Sciamarella Tango',
            song: 'Choclo',
            yt: 'f1-D0r1qmMs',
            sc: '',
            sp: 'https://open.spotify.com/intl-es/track/2J64RTn4ZdwS6X0e2ac7TR?si=e12f4af7de6b4811'
        },
        {
            artist: 'Sciamarella Tango',
            song: 'Plesiosaurio',
            yt: 'pAz32JpP3ug',
            sc: '',
            sp: 'https://open.spotify.com/intl-es/track/1kqTjzQhDB0STdky5QGdrt?si=5558de64c4194438'
        },
        {
            artist: 'Sciamarella Tango',
            song: 'Bajo el cono azul',
            yt: 'DKiCKIOhovw',
            sc: '',
            sp: 'https://open.spotify.com/intl-es/track/4cB7T3KLECAjJ3XCFC1i4O?si=d1a9ab6733b04052'
        },
        {
            artist: 'Sciamarella Tango',
            song: 'El esquinazo',
            yt: 'N3HJUec-2U4',
            sc: '',
            sp: 'https://open.spotify.com/intl-es/track/6HpY1MepAdM4jbBJGrPTvF?si=aa2db47942b94d32'
        },
    ]
};

export default data;