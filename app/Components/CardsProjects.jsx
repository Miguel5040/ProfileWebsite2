import React from "react";
import Link from "next/link";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";

const ProjectsCards = ({imgenUrl, title, description, tech, gitUrl, prevUrl }) =>{
    return(
        <div>              
            <div 
            className="aspect-video min-h-[200px] rounded-t-xl relative group"
            style={{background:`url(${imgenUrl})`, backgroundSize:"cover", backgroundPosition:"center"}}
            >
             <div className="overlay backdrop-blur-[2px] items-center justify-center absolute h-full w-full top-0 left-0 bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80">
                <Link href={gitUrl} className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
                    <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white cursor-pointe" />
                </Link>
                <Link href={prevUrl} className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
                    <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white cursor-pointe" />
                </Link>
             </div> 
            </div>
            <div className="text-white rounded-t-xl bg-[#181818] p-6 px-4">
                <h5 className="font-xl font-semibold mb-2">{title}</h5>
                <p className="text-[#ADB7BE]">{description}</p>
            </div>
        </div>
    )
}

export default ProjectsCards;