import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { PrivacyPage } from "./PrivacyPage";
import { IoMail, IoCall, IoLocation, IoPhonePortraitSharp, IoServer, IoLaptopOutline, IoGameController, IoMusicalNotes, IoCalendar } from 'react-icons/io5'
import { BulletPoint } from "./BulletPoint";
import { List } from "./List";
import { Description } from "./Description";
import { Parter } from "./2Parter";
import image from "./assets/mig.webp";

function App() {

  return (
    <div className="App">
      
      <div className="flex flex-col h-screen">
        <div className="w-full p-8 bg-primary text-secondary flex text-4xl font-extrabold grow-0 items-center relative">
          <div className="w-28 h-28 rounded-full border-2 border-secondary border-solid overflow-hidden mr-4">
            <img className="w-full h-full" src={image} />
          </div>

          Dennis Hvidberg Madsen
          <div className="bg-secondary absolute left-0 right-0 top-0 bottom-0" style={{
            clipPath: 'polygon(100% 75%, 100% 100%, 0% 100%)'
          }} />
        </div>

        <div className="grow bg-red-300 w-full h-full flex shadow-2xl z-20">
          <div className="w-64 p-6 pt-12 bg-menu">
            
            <List title="Oplysninger">
                <BulletPoint icon={<IoCall color="#3B6E99" size={20}/>}>
                  +45 22 29 29 87
                </BulletPoint>

                <BulletPoint icon={<IoMail color="#3B6E99" size={20}/>}>
                  oowej@hotmail.com
                </BulletPoint>

                <BulletPoint icon={<IoLocation color="#3B6E99" size={20}/>}>
                  2600 Glostrup
                </BulletPoint>

                <BulletPoint icon={<IoCalendar color="#3B6E99" size={20}/>}>
                  29 År
                </BulletPoint>
            </List>
            
            <List title="Evner">
                <BulletPoint rating={4}>
                  Flutter
                </BulletPoint>
                <BulletPoint rating={5}>
                  TypeScript
                </BulletPoint>
                <BulletPoint rating={5}>
                  React
                </BulletPoint>
                <BulletPoint rating={5}>
                  Java
                </BulletPoint>
                <BulletPoint rating={4}>
                  Spring boot
                </BulletPoint>
                <BulletPoint rating={4}>
                  Ionic
                </BulletPoint>
                <BulletPoint rating={3}>
                  Express
                </BulletPoint>
                <BulletPoint rating={4}>
                  PostgreSQL
                </BulletPoint>
                <BulletPoint rating={4}>
                  Supabase
                </BulletPoint>
                <BulletPoint rating={4}>
                  MySQL
                </BulletPoint>
                <BulletPoint rating={3}>
                  C#
                </BulletPoint>
                <BulletPoint rating={3}>
                  Vue
                </BulletPoint>
            </List>
            
            <List title="Interesser">
                <BulletPoint icon={<IoLaptopOutline color="#3B6E99" size={20} />}>
                  Frontend udvikling
                </BulletPoint>
                <BulletPoint icon={<IoServer color="#3B6E99" size={20} />}>
                  Backend udvikling
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

          </div>
          <div className="grow bg-background p-6 relative pt-12">
            <div className="bg-secondary absolute left-0 right-0 top-0 bottom-0 z-50" style={{
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 3%)'
            }}/>

            <List title="Om mig">
              <p className="text-xs font-normal text-primary mb-2">
                Jeg er en kreativ sjæl, der finder
                tilfredsstillelse i et skabe. Jeg kan godt lide
                at prøve at lave noget selv for at få en
                bedre forståelse for hvordan det fungerer,
                eller bare for at prøve det.
              </p>
              <p className="text-xs font-normal text-primary mb-2">
                Kan godt lide at samarbejde med andre mennesker, men kan samtidig også god tlide at sidde og fordybe mig i det jeg laver.
              </p>
              <p className="text-xs font-normal text-primary">
                Jeg arbejder fokuseret og stræber efter at
                udvikle med genanvendelighed og læsbarhed i tankerne.
              </p>
            </List>
            
            
            <List title="Erfaring">
              <BulletPoint small>
                <Parter dates="(Jan 2018 - Okt 2019)" content="Möbius ApS/Lerche Consult"/>
              </BulletPoint>
              <Description>
                <p className="text-xs font-normal">Titel: System Udvikler</p>
                <p className="text-xs font-normal pt-2">
                  Udvikling af diverse produkter blandt andet en Outlook Addin til dokumenthåndteringsplatform, system til fordeling af censorer til danskprøver og frontend til fragtskibs ruteoptimering.
                </p>
              </Description>
              <BulletPoint small>
                <Parter dates="(Jun 2021 - Aug 2022)" content="MeeW"/>
              </BulletPoint>
              <Description>
                <p className="text-xs font-normal">Titel: Fullstack Udvikler</p>
                <p className="text-xs font-normal pt-2">
                  Udvikling af apps blandt andet backend, frontend og database til diverse apps. Har arbejdet på frontend og backend med blandt andet React, Express, Flutter og MySQL.
                </p>
              </Description>
              <BulletPoint small>
                <Parter dates="(Aug 2022 - Now)" content="MeeW"/>
              </BulletPoint>
              <Description>
                <p className="text-xs font-normal">Titel: Tech Lead</p>
                <p className="text-xs font-normal pt-2">
                  Lead udvikler for 2 projekter med en Ionic React, supabase stack. Udvikling af interne projekt templates.
                </p>
              </Description>
            </List>
            
            
            <List title="Uddannelse">
              <BulletPoint small>
                <Parter dates="(2012 - 2015)" content="HTX Vibenhus"/>
              </BulletPoint>
              <Description>
                Gymnasie, Kommunikation/IT
              </Description>
              <BulletPoint small>
                <Parter dates="(2015 - 2015)" content="Københavns VUC"/>
              </BulletPoint>
              <Description>
                Supplement, Matematik A
              </Description>
              <BulletPoint small>
                <Parter dates="(2015 - 2018)" content="KEA"/>
              </BulletPoint>
              <Description>
                Erhvervsakademi uddannelse, Datamatiker
              </Description>
              <BulletPoint small>
                <Parter dates="(2020 - 2022)" content="KEA"/>
              </BulletPoint>
              <Description>
                Professionsbachelor, Softwareudvikling
              </Description>
            </List>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
