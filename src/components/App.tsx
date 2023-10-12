import React, {useEffect, useState} from "react";
import tw from "twin.macro";
import Command from "./commands/Command";

const CONTAINER = tw.div` py-5 px-2 `;
const BANNER = tw.div`flex flex-row ml-2 md:ml-0`;
const PRE = tw.div`text-coolgrey font-mono  mt-8 ml-4 `;
const SPAN = tw.span`text-warmblue font-mono  `;
const APP = tw.div`font-mono  mt-8 ml-4 `;

function App() {
    const [res, showres] = React.useState<boolean>(false);
    const [cmd, showcmd] = React.useState<boolean>(false);


    return (
        <CONTAINER>
            <BANNER>
                <div className="ml-[15vw] text-white md:w-2/3 md:max-w-6xl">
          <pre>
            {`
          
░░░░░██╗░█████╗░░█████╗░██████╗░██████╗░██╗██╗░░██╗
░░░░░██║██╔══██╗██╔══██╗██╔══██╗██╔══██╗██║██║░░██║
░░░░░██║██║░░██║██║░░██║██████╔╝██║░░██║██║███████║
██╗░░██║██║░░██║██║░░██║██╔══██╗██║░░██║██║██╔══██║
╚█████╔╝╚█████╔╝╚█████╔╝██║░░██║██████╔╝██║██║░░██║
░╚════╝░░╚════╝░░╚════╝░╚═╝░░╚═╝╚═════╝░╚═╝╚═╝░░╚═╝
          `}
          </pre>
                    <span className="mt-5 text-warmpurple text-lg self-end opacity-70 align-bottom">
            v1.0.0
          </span>
                </div>
            </BANNER>
            <PRE>
                <p>welcome to my web terminal!</p>
                <p>
                    type <SPAN>'help'</SPAN> to see the terminal.
                </p>
            </PRE>
            <APP>
                <Command showres={showres} showcmd={showcmd} cmd={cmd}/>
            </APP>
        </CONTAINER>
    );
}

export default App;
