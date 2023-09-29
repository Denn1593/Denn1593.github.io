
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
              <List title="Information">
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
                  29 Years old
                </BulletPoint>
              </List>

              <List title="Skills">
                <BulletPoint rating={5}>
                  TypeScript
                </BulletPoint>
                <BulletPoint rating={5}>
                  React
                </BulletPoint>
                <BulletPoint rating={4}>
                  Tailwind
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
                  C#
                </BulletPoint>
                <BulletPoint rating={2}>
                  Docker
                </BulletPoint>
              </List>

              <List title="Interests">
                <BulletPoint icon={<IoServer color="#3B6E99" size={20} />}>
                  Backend development
                </BulletPoint>
                <BulletPoint icon={<IoLaptopOutline color="#3B6E99" size={20} />}>
                  Frontend development
                </BulletPoint>
                <BulletPoint icon={<IoPhonePortraitSharp color="#3B6E99" size={20} />}>
                  App development
                </BulletPoint>
                <BulletPoint icon={<IoGameController color="#3B6E99" size={20} />}>
                  Game development
                </BulletPoint>
                <BulletPoint icon={<IoMusicalNotes color="#3B6E99" size={20} />}>
                  Music production
                </BulletPoint>
              </List>

              <List title="Languages">
                <BulletPoint rating={5}>
                  Danish
                </BulletPoint>
                <BulletPoint rating={4}>
                  English
                </BulletPoint>
              </List>
            </div>

          </div>
          <div className="grow bg-background p-6 relative pt-6">


            <List title="About me">
              <p className="text-xs font-normal text-primary mb-2">
                I am a software developer with a passion for bringing my ideas to life.
                I started programming as a hobby, creating my own games, which led
                me to a career in software development.
              </p>
              <p className="text-xs font-normal text-primary mb-2">
                I have experience in both frontend and backend development and am passionate about both.
              </p>
              <p className="text-xs font-normal text-primary mb-2">
                I enjoy collaborating with others and hearing different perspectives and ideas, but I am
                also comfortable working independently and immersing myself in my tasks.
              </p>
              <p className="text-xs font-normal text-primary mb-2">
                I work with focus and strive to develop with reusability and readability in mind.
              </p>
            </List>


            <List title="Experience">
              <BulletPoint small>
                <Parter dates="(Jan 2018 - Oct 2019)" content="Möbius ApS/Lerche Consult" />
              </BulletPoint>
              <Description>
                <p className="text-xs font-normal">Title: Systems Developer</p>
                <p className="text-xs font-normal pt-2">
                  Development of various products, including an Outlook Add-in for a document management platform, a system for distributing examiners for Danish exams, and a frontend for cargo ship route optimization.
                </p>
              </Description>
              <BulletPoint small>
                <Parter dates="(Jun 2021 - Mar 2023)" content="MeeW" />
              </BulletPoint>
              <Description>
                <p className="text-xs font-normal">Title: Fullstack Developer (Jun 2021 - Aug 2022)</p>
                <p className="text-xs font-normal pt-2">
                  Development of backend, frontend, and databases for various apps, including a fitness app and an editor for designing bead patterns for a bead craft app.
                </p>
              </Description>
              <Description>
                <p className="text-xs font-normal">Title: Tech Lead (Aug 2022 - Mar 2023)</p>
                <p className="text-xs font-normal pt-2">
                  Lead developer for 2 projects using an Ionic React (for both web and app) and Supabase stack. Handling of coding standards, code reviews, and internal project templates.
                </p>
              </Description>
              <BulletPoint small>
                <Parter dates="(Mar 2023 - now)" content="Colab7" />
              </BulletPoint>
              <Description>
                <p className="text-xs font-normal">Title: Fullstack developer</p>
                <p className="text-xs font-normal pt-2">
                  Development of apps using a React Native and Supabase stack, as well as web apps in Vite React.
                </p>
              </Description>
            </List>


            <List title="Education">
              <BulletPoint small>
                <Parter dates="(2012 - 2015)" content="HTX Vibenhus" />
              </BulletPoint>
              <Description>
                High School, Communication/IT
              </Description>
              <BulletPoint small>
                <Parter dates="(2015 - 2015)" content="Copenhagen VUC" />
              </BulletPoint>
              <Description>
                Supplement, Math A
              </Description>
              <BulletPoint small>
                <Parter dates="(2015 - 2018)" content="KEA" />
              </BulletPoint>
              <Description>
                AP Degree, Computer Science
              </Description>
              <BulletPoint small>
                <Parter dates="(2020 - 2022)" content="KEA" />
              </BulletPoint>
              <Description>
                Bachelor, Software Development
              </Description>
            </List>

            <List title="References">
              <Description>
                The following references will be provided upon request.
              </Description>
              <BulletPoint small>
                Kristian Lerche
              </BulletPoint>
              <Description>
                CEO of Möbius/Lerche consult
              </Description>
              <BulletPoint small>
                Sebastian Tracey
              </BulletPoint>
              <Description>
                Former CTO of MeeW
              </Description>
              <BulletPoint small>
                Mathias Høyrup Nielsen
              </BulletPoint>
              <Description noMargin>
                CEO of Colab7
              </Description>
            </List>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
