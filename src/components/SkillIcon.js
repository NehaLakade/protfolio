// SkillIcon.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCss3Alt, 
    faHtml5,
    faJs, 
    faReact, 
    faDatabase, 
    faAngular, 
    faJava, 
    faPython,
    faC,
    faCpp,
    faFlask,
    faDjango,
    faGit,
    faTypescript
} from '@fortawesome/free-brands-svg-icons';


const SkillIcon = () => (
    <div className="flex flex-wrap justify-center space-x-4">
        <Skill name="HTML" icon={faHtml5} color="#E34F26" />
        <Skill name="CSS" icon={faCss3Alt} color="#1572B6" />
        <Skill name="JavaScript" icon={faJs} color="#F7DF1E" />
        <Skill name="React.js" icon={faReact} color="#61DAFB" />
        <Skill name="Next.js" icon={faReact} color="#000000" />
        <Skill name="MySQL" icon={faDatabase} color="#4479A1" />
        <Skill name="Angular.js" icon={faAngular} color="#DD0031" />
        <Skill name="Java" icon={faJava} color="#007396" />
        <Skill name="Python" icon={faPython} color="#3776AB" />
        <Skill name="C" icon={faC} color="#A8B9CC" />
        <Skill name="C++" icon={faCpp} color="#00599C" />
        <Skill name="Git" icon={faGit} color="#F05032" />
        <Skill name="Flask" icon={faFlask} color="#000000" />
        <Skill name="Django" icon={faDjango} color="#092E20" />
        <Skill name="TypeScript" icon={faTypescript} color="#007ACC" />
    </div>
);

const Skill = ({ name, icon, color }) => (
    <div className="flex items-center justify-center rounded-lg bg-black p-2 m-2 shadow-md hover:shadow-lg transition duration-300">
        <FontAwesomeIcon icon={icon} className="text-xl" style={{ color }} />
        <span className="text-lg ml-2">{name}</span>
    </div>
);

export default SkillIcon;
