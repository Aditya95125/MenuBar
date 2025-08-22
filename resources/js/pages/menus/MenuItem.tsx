import { useState } from "react";
import MenuList from "./MenuList";
import { ChevronDown, ChevronRight, ChevronUp, Minus, Plus } from 'lucide-react';


export default function MenuItem({ item }) {
    const [displayCurrentChild, setDisplayCurrentChild] = useState({});

    function handleToggle(getCurrentLabel){
        setDisplayCurrentChild({
            ...displayCurrentChild,
            [getCurrentLabel]: !displayCurrentChild[getCurrentLabel],
        });
    }
    console.log(displayCurrentChild);
    
    return (
        <li className="flex flex-col" >
        <div className="flex items-center px-6 space-x-0 cursor-pointer  p-1 rounded" >
            <p>{item.label}</p>
            {
               item &&  item.children && item.children.length > 0 ?
                (
                    <span onClick={() => handleToggle(item.label)} >
                        {
                            displayCurrentChild[item.label] ? 
                           <ChevronUp className=" 
                            rounded-md border border-transparent hover:border-2 hover:border-red hover:bg-green-100
                           "  />  : <ChevronRight className=" 
                           rounded-md border border-transparent hover:border-2 hover:border-red hover:bg-green-100" />
                        }
                    </span>
                ) : null
            }
        </div>  

            {item && item.children && item.children.length > 0 && displayCurrentChild[item.label] ? (
                <div className="pl-4">
                <MenuList list={item.children} />
                </div>
            ) : null}
        </li>
    )
}