import React from "react";
import { Outlet, useLocation} from "react-router-dom";

export function Home() {
    return(
        <>
        <div>[Company Website</div>
       
        </>
    )
}
export function About() {
    return(
        <div>[About]
            <Outlet />
        </div>
    )
}
export function Services() {
    return(
        <div>[About / Services]</div>
    )
}
export function Events() {
    return(
        <div>[Events]</div>
    )
}
export function Contact() {
    return(
        <div>[Contact]</div>
    )
}

export function Whoops404(){
    let location = useLocation();
    console.log(location);
    return(
        <div>
            <h1>Resource not found at {location.pathname}</h1>
        </div>

    )
}