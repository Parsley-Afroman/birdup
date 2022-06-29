import { ButtonHTMLAttributes, PropsWithRef, ReactElement } from "react"
import PageNav from "../Molecules/PageNav"
import PageTitle from "../Molecules/PageTitle"
import CardArray from "../Organisms/CardArray"
import PageBanner from "../Organisms/PageBanner"

function HomeTemplate ({birdData, opposite, leftDirection, rightDirection, action} : any) {
return (
    <>
        <PageBanner opposite={opposite} leftDirection={leftDirection} rightDirection={rightDirection} action={action}/>
        <CardArray birdData={birdData}/>
    </>
)
}

export default HomeTemplate