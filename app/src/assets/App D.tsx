
import { IoMail, IoCall, IoLocation, IoPhonePortraitSharp, IoServer, IoLaptopOutline, IoGameController, IoMusicalNotes, IoCalendar } from 'react-icons/io5'
import { BulletPoint } from "./BulletPoint";
import { List } from "./List";
import { Description } from "./Description";
import { Parter } from "./2Parter";
import image from "./assets/mig.webp";

function App() {

  document.title = 'Dennis Hvidberg Madsen';

  return (
    <div className="App">

      <div className="flex flex-col h-screen">

        <div className="grow bg-red-300 w-full h-full flex shadow-2xl z-20">
          <div className="w-96 bg-menu">
            <div className="w-full py-6 pb-8 bg-primary text-secondary flex flex-col text-md font-extrabold grow-0 items-center relative">
              <div className="w-24 h-24 rounded-full border-2 mb-2 border-secondary border-solid overflow-hidden mr-4">
                <img className="w-full h-full" src={image} />
              </div>

              Dennis Hvidberg Madsen
              <div className="bg-secondary absolute left-0 right-0 top-0 bottom-0" style={{
                clipPath: 'polygon(100% 85%, 100% 100%, 0% 100%)'
              }} />
            </div>

            <div className="p-6">
              <List title="Oplysninger">
                <BulletPoint icon={<IoCall color="#3B6E99" size={20} />}>
                  +45 22 29 29 87
                </BulletPoint>

                <BulletPoint icon={<IoMail color="#3B6E99" size={20} />}>
                  oowej@hotmail.com
                </BulletPoint>

                <BulletPoint icon={<IoLocation color="#3B6E99" size={20} />}>
                  2600 Glostrup
                </BulletPoint>

                <BulletPoint icon={<IoCalendar color="#3B6E99" size={20} />}>
                  29 År
                </BulletPoint>
              </List>

              <List title="Evner">
                <BulletPoint rating={5}>
                  TypeScript
                </BulletPoint>
                <BulletPoint rating={5}>
                  React
                </BulletPoint>
                <BulletPoint rating={4}>
                  React Native
                </BulletPoint>
                <BulletPoint rating={4}>
                  Flutter
                </BulletPoint>
                <BulletPoint rating={4}>
                  PostgreSQL
                </BulletPoint>
                <BulletPoint rating={4}>
                  MySQL
                </BulletPoint>
                <BulletPoint rating={4}>
                  Spring boot
                </BulletPoint>
                <BulletPoint rating={4}>
                  Java
                </BulletPoint>
                <BulletPoint rating={4}>
                  Ionic
                </BulletPoint>
                <BulletPoint rating={4}>
                  Supabase
                </BulletPoint>
                <BulletPoint rating={3}>
                  Express
                </BulletPoint>
                <BulletPoint rating={3}>
                  Sequelize
                </BulletPoint>
                <BulletPoint rating={3}>
                  C#
                </BulletPoint>
                <BulletPoint rating={3}>
                  Vue
                </BulletPoint>
              </List>

              <List title="Interesser">
                <BulletPoint icon={<IoServer color="#3B6E99" size={20} />}>
                  Backend udvikling
                </BulletPoint>
                <BulletPoint icon={<IoLaptopOutline color="#3B6E99" size={20} />}>
                  Frontend udvikling
                </BulletPoint>
                <BulletPoint icon={<IoPhonePortraitSharp color="#3B6E99" size={20} />}>
                  App udvikling
                </BulletPoint>
                <BulletPoint icon={<IoGameController color="#3B6E99" size={20} />}>
                  Spil udvikling
                </BulletPoint>
                <BulletPoint icon={<IoMusicalNotes color="#3B6E99" size={20} />}>
                  Musik produktion
                </BulletPoint>
              </List>

              <List title="Sprog">
                <BulletPoint rating={5}>
                  Dansk
                </BulletPoint>
                <BulletPoint rating={4}>
                  Engelsk
                </BulletPoint>
              </List>
            </div>

          </div>
          <div className="grow bg-background p-6 relative pt-6">


            <List title="Om mig">
              <p className="text-xs font-normal text-primary mb-2">
                Jeg er en softwareudvikler med en passion for at bringe mine ideer til live.
                Jeg begyndte at programmere som en hobby og lavede mine egne spil, og det førte
                mig til en karriere inden for softwareudvikling.
              </p>
              <p className="text-xs font-normal text-primary mb-2">
                Jeg har erfaring indenfor både frontend og backend udvikling og er passioneret for begge dele.
              </p>
              <p className="text-xs font-normal text-primary mb-2">
                Jeg nyder at samarbejde med andre og høre forskellige perspektiver og ideer, men jeg er
                også komfortabel med at arbejde selvstændigt og fordybe mig i mine opgaver.
              </p>
              <p className="text-xs font-normal text-primary mb-2">
                Jeg arbejder fokuseret og stræber efter at
                udvikle med genanvendelighed og læsbarhed i tankerne.
              </p>
            </List>


            <List title="Erfaring">
              <BulletPoint small>
                <Parter dates="(Jan 2018 - Okt 2019)" content="Möbius ApS/Lerche Consult" />
              </BulletPoint>
              <Description>
                <p className="text-xs font-normal">Titel: System Udvikler</p>
                <p className="text-xs font-normal pt-2">
                  Udvikling af diverse produkter blandt andet en Outlook Addin til en dokumenthåndteringsplatform, system til fordeling af censorer til danskprøver og frontend til fragtskibs ruteoptimering.
                </p>
              </Description>
              <BulletPoint small>
                <Parter dates="(Jun 2021 - Mar 2023)" content="MeeW" />
              </BulletPoint>
              <Description>
                <p className="text-xs font-normal">Titel: Fullstack Udvikler (Jun 2021 - Aug 2022)</p>
                <p className="text-xs font-normal pt-2">
                  Udvikling af backend, frontend og database til diverse apps, blandt andet en fitness app og en editor til at designe perleplade motiver til en perleplade app.
                </p>
              </Description>
              <Description>
                <p className="text-xs font-normal">Titel: Tech Lead (Aug 2022 - Mar 2023)</p>
                <p className="text-xs font-normal pt-2">
                  Lead udvikler for 2 projekter med en Ionic React (Til både web og app), supabase stack. Håndtering af kodestandard, code reviews og interne projekt templates.
                </p>
              </Description>
              <BulletPoint small>
                <Parter dates="(Mar 2023 - nu)" content="Colab7" />
              </BulletPoint>
              <Description>
                <p className="text-xs font-normal">Titel: Fullstack udvikler</p>
                <p className="text-xs font-normal pt-2">
                  Udvikling af apps med en React Native og supabase stack, samt webapps i Vite React.
                </p>
              </Description>
            </List>


            <List title="Uddannelse">
              <BulletPoint small>
                <Parter dates="(2012 - 2015)" content="HTX Vibenhus" />
              </BulletPoint>
              <Description>
                Gymnasie, Kommunikation/IT
              </Description>
              <BulletPoint small>
                <Parter dates="(2015 - 2015)" content="Københavns VUC" />
              </BulletPoint>
              <Description>
                Supplement, Matematik A
              </Description>
              <BulletPoint small>
                <Parter dates="(2015 - 2018)" content="KEA" />
              </BulletPoint>
              <Description>
                Erhvervsakademi uddannelse, Datamatiker
              </Description>
              <BulletPoint small>
                <Parter dates="(2020 - 2022)" content="KEA" />
              </BulletPoint>
              <Description>
                Professionsbachelor, Softwareudvikling
              </Description>
            </List>

            <List title="Referencer">
              <Description>
                Følgende referencer oplyses gerne på opfordring
              </Description>
              <BulletPoint small>
                Kristian Lerche
              </BulletPoint>
              <Description>
                Direktør for Möbius/Lerche consult
              </Description>
              <BulletPoint small>
                Sebastian Tracey
              </BulletPoint>
              <Description>
                Tidligere CTO for MeeW
              </Description>
              <BulletPoint small>
                Mathias Høyrup Nielsen
              </BulletPoint>
              <Description noMargin>
                Direktør for Colab7
              </Description>
            </List>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
