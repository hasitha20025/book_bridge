
import team_01 from '../../../public/imges/team/1.png';
import team_02 from '../../../public/imges/team/2.png';
import team_04 from '../../../public/imges/team/4.png';
import team_05 from '../../../public/imges/team/5.png';
import TeamCard from './ui/teamCard';


export default function OurTeam() {
  return (
    <>
      <section id="ourTeam" className="py-10">
        <h1 className="text-3xl font-semibold text-center text-text mb-8">Meet Our Team</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
           <TeamCard image={team_01.src} position={'Front-End Developer'} name={'Hasitha Dhananjaya'}/>
           <TeamCard image={team_02.src} position={'UI designer'} name={'venuri'}/>       
           <TeamCard image={team_04.src} position={'Front-End Developer'} name={'Sadun'}/>
           <TeamCard image={team_05.src} position={'Back-End Developer'} name={'Probod pubudu'}/>
        </div>

      </section>
    </>
  );
}
