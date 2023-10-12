import tw from "twin.macro"
import {match} from "ts-pattern";
import React from "react";

const RES = tw.div` flex justify-evenly max-w-xl  items-baseline `
const A = tw.a`ml-2 hover:bg-warmblue hover:text-almostblack`

type cmd = ({
    command: string;
    description: string;
    content: string;
} | {
    command: string;
    description: string;
    content: {
        frontEnd: string[];
        database: string[];
        backEnd: string[];
        tools: string[];
    };
})
const data: cmd[] = [
    {
        command: 'about',
        description: 'Pequeño resumen',
        content: 'normalmente conocido como jordi o harpy, soy un desarrollador de backend y usualmente de frontend, entusiasmado por la programación. Empecé a programar plugins de minecraft y he terminado haciendo de todo un poco!'
    },
    {command: 'projects', description: 'algunos proyectos que he hecho', content: ''},
    {command: 'github', description: 'mi perfil de github', content: 'https://github.com/harpylmao'},
    {command: 'twitter', description: 'una de mis redes sociales', content: 'https://www.twitter.com/joord1h_'},
    {command: 'email', description: 'para contacter', content: 'contact@joordih.lol'},
    {command: 'music', description: 'lo que escucho', content: 'https://music.apple.com/profile/joordih'},
    {
        command: 'skills', description: 'mis conocimientos',
        content: {
            frontEnd: ['HTML', 'CSS', 'TailwindCSS', 'JavaScript', 'JQuery', 'React', 'TypeScript', 'Vue', 'Svelte'],
            backEnd: ['NodeJS', 'Java', 'Kotlin', 'C#', '.NET'],
            database: ['MySQL', 'MongoDB', 'RabbtitMQ', 'Redis'],
            tools: ['VScode', 'Jetbrains IDE´s', 'Git', 'Github', 'Docker']
        }
    },
    {command: 'repo', description: 'el repo de esta pagina', content: 'https://github.com/joord1h/joordih.lol'},
    {command: 'quote', description: 'mi frase estrella', content: 'Si funciona, no lo toques'},
    {command: 'clear', description: '', content: ''},
    {command: 'panel', description: '', content: ''},
]

export default function Result({commandInput}: any) {
    const res = commandInput === 'help' ? [...data] : [...data.filter((a: cmd) => a.command === 'panel')].filter((c: cmd) => c.command === commandInput);
    return (
        <div className="my-2 mr-2 text-coolgrey">
            <>
                {res.length === 0 && <p>command not found</p>}
                {res.length === data.length &&
                    res.map((cm: cmd, i: number) => {
                        if (cm.command != 'panel') {
                            return (
                                <RES key={i}>
                                    <p className="flex-1 -mr-16">{cm.command}</p>
                                    <p className="flex-1">{cm.description}</p>
                                </RES>
                            )
                        }
                    })
                }
                {res.length < data.length &&
                    res.map((cm: any, i: number) => {
                        return match(cm.command)
                            .with('skills', () => {
                                return (
                                    <div key={i}>
                                        <p>Front End:
                                            {cm.content.frontEnd.map((element: string) => (
                                                <span key={element}> {element} </span>
                                            ))} </p>
                                        <p>Back End:
                                            {cm.content.backEnd.map((element: string) => (
                                                <span key={element}> {element} </span>
                                            ))} </p>
                                        <p>Databases:
                                            {cm.content.database.map((element: string) => (
                                                <span key={element}> {element} </span>
                                            ))} </p>
                                        <p>Tools and others:
                                            {cm.content.tools.map((element: string) => (
                                                <span key={element}> {element} </span>
                                            ))} </p>
                                    </div>
                                );
                            })
                            .with('projects', () => {
                                return (
                                    <div key={"koid"}>
                                        <p>Koid Development: <A target='_blank' key={"koid"}
                                                                href="https://koid.tech/discord/">koid.tech</A></p>
                                    </div>
                                );
                            })
                            .with('twitter', 'github', () => {
                                return <p key={i}>check out my {cm.command} profile :
                                    <A href={cm.content} target='_blank'>{cm.content}</A></p>
                            })
                            .with('music', () => {
                                return <div className="-ml-2"><A href={cm.content} key={i}
                                                                 target='_blank'>{cm.content}</A></div>
                            })
                            .with('repo', () => {
                                return (
                                    <div key={i}>
                                        <p><A href={cm.content} target='_blank'>{cm.content}</A></p>
                                    </div>)
                            })
                            .with('panel', () => {
                                return (
                                    <div key={"panel"}>
                                        <p>KKK Panel: <A target='_blank' key={"panel"}
                                                         href="https://kkkpanel.koid.tech/">kkkpanel.koid.tech</A></p>
                                    </div>
                                );
                            })
                            .otherwise(() => {
                                return <p key={i}>{cm.content}</p>
                            });

                    })
                }
            </>
        </div>
    )
}
